const { test, describe } = require('node:test');
const assert = require('node:assert');
const GameCore = require('../game_core.js');

describe('GameCore Logic', () => {

    describe('Offline Gains', () => {
        const CFG = { OFFLINE_CAP_SECONDS: 28800, OFFLINE_GOLD_FACTOR: 0.25 }; // 8h cap

        test('should calculate zero gains for no time passed', () => {
            const now = 100000;
            const snapshot = { lastSeenAt: 100000, snapshotDps: 100 };
            const res = GameCore.computeOfflineGains(snapshot, now, CFG);
            assert.strictEqual(res.gold, 0);
            assert.strictEqual(res.seconds, 0);
        });

        test('should calculate gains for 1 hour', () => {
            const now = 100000 + 3600 * 1000;
            const snapshot = { lastSeenAt: 100000, snapshotDps: 100 };
            const res = GameCore.computeOfflineGains(snapshot, now, CFG);
            assert.strictEqual(res.seconds, 3600);
            // 100 dps * 3600 sec * 0.25 factor = 90000 gold
            assert.strictEqual(res.gold, 90000);
        });

        test('should cap gains at 8 hours', () => {
            const now = 100000 + 10 * 3600 * 1000; // 10 hours
            const snapshot = { lastSeenAt: 100000, snapshotDps: 100 };
            const res = GameCore.computeOfflineGains(snapshot, now, CFG);
            assert.strictEqual(res.seconds, 28800); // capped at 8h
            // 100 * 28800 * 0.25 = 720000
            assert.strictEqual(res.gold, 720000);
        });
    });

    describe('Prestige System', () => {
        test('computeEssenceGain should be monotonic', () => {
            const gain1 = GameCore.computeEssenceGain(100, 10, 0);
            const gain2 = GameCore.computeEssenceGain(101, 10, 0);
            const gain3 = GameCore.computeEssenceGain(100, 11, 0);
            const gain4 = GameCore.computeEssenceGain(100, 10, 1);

            assert.ok(gain2 >= gain1);
            assert.ok(gain3 >= gain1);
            assert.ok(gain4 >= gain1);
        });

        test('applyPrestige should reset run stats but keep permanent valid items', () => {
            const state = {
                stage: 500,
                gold: 1e9,
                prestige: { shards: 100, count: 5, essence: 50, talents: { dmgUp1: 1 }, bossesDefeated: 10 },
                stats: { kills: 1000 },
                settings: { sfxEnabled: true },
                quests: { list: [] },
                achievements: ['ach1'],
                offline: { lastSeenAt: 123 },
                highestStage: 500
            };

            const newState = GameCore.applyPrestige(state);

            // Check resets
            assert.ok(newState.stage < 500);
            assert.strictEqual(newState.gold, 0);
            assert.strictEqual(newState.inventory.length, 0);

            // Check preservation
            // Essence gain: 500*0.5 + 10*2 + 5*3 = 250 + 20 + 15 = 285. Previous 50. Total 335.
            const expectedEssence = 50 + 285;
            assert.strictEqual(newState.prestige.essence, expectedEssence);
            assert.strictEqual(newState.prestige.count, 6);
            assert.deepStrictEqual(newState.prestige.talents, { dmgUp1: 1 });
            assert.strictEqual(newState.stats.kills, 1000);
            assert.strictEqual(newState.settings.sfxEnabled, true);
            assert.deepStrictEqual(newState.achievements, ['ach1']);
        });
    });

    describe('Daily Quests', () => {
        test('generateDailyQuests should be deterministic for same date and seed', () => {
            const q1 = GameCore.generateDailyQuests("2025-01-01", 123);
            const q2 = GameCore.generateDailyQuests("2025-01-01", 123);
            assert.deepStrictEqual(q1, q2);
        });

        test('generateDailyQuests should return 3 unique quests', () => {
            const quests = GameCore.generateDailyQuests("2025-01-01", 123);
            assert.strictEqual(quests.length, 3);
            const ids = new Set(quests.map(q => q.id));
            assert.strictEqual(ids.size, 3);
        });
    });

    describe('Crit Logic', () => {
        test('rollCrit should respect chance from stub RNG', () => {
            // Mock RNG that always returns 0.04 (crit for 5%)
            const stubRng = () => 0.04;
            const res = GameCore.rollCrit(stubRng, 0.05);
            assert.strictEqual(res.isCrit, true);
            assert.strictEqual(res.mult, 3);
        });

        test('rollCrit should fail if roll > chance', () => {
            // Mock RNG that always returns 0.06 (fail for 5%)
            const stubRng = () => 0.06;
            const res = GameCore.rollCrit(stubRng, 0.05);
            assert.strictEqual(res.isCrit, false);
            assert.strictEqual(res.mult, 1);
        });
    });

    describe('Monster Generation', () => {
        test('getMonsterMaxHp should scale with stage', () => {
            const hp1 = GameCore.getMonsterMaxHp(1);
            const hp10 = GameCore.getMonsterMaxHp(10);
            assert.strictEqual(hp1, 8);
            assert.ok(hp10 > hp1);
        });

        test('createEnemy should return valid enemy object', () => {
            const enemy = GameCore.createEnemy(1, false, () => 0.5);
            assert.ok(enemy.id);
            assert.ok(GameCore.MONSTERS.includes(enemy.emoji) || enemy.emoji === "🪙");
            assert.strictEqual(enemy.isBoss, false);
            assert.ok(enemy.hp > 0);
        });

        test('createEnemy should create boss on demand', () => {
            const boss = GameCore.createEnemy(10, true, () => 0.5);
            assert.strictEqual(boss.isBoss, true);
        });

        test('createEnemiesForStage should generate correct count', () => {
            const enemies = GameCore.createEnemiesForStage(1, 3, () => 0.5);
            assert.strictEqual(enemies.length, 4); // 1 primary + 3 extras
            assert.strictEqual(enemies[0].isPrimary, true);
            assert.strictEqual(enemies[1].isRespawnable, true);
        });

        test('createEnemiesForStage should spawn boss every 10 stages', () => {
            const normal = GameCore.createEnemiesForStage(9, 0, () => 0.5);
            const boss = GameCore.createEnemiesForStage(10, 0, () => 0.5);
            assert.strictEqual(normal[0].isBoss, false);
            assert.strictEqual(boss[0].isBoss, true);
        });
    });

    describe('Economy and Shop', () => {
        test('getTalentCost should return correct scaling', () => {
            const cost0 = GameCore.getTalentCost('dmgUp1', 0);
            const cost1 = GameCore.getTalentCost('dmgUp1', 1);
            assert.strictEqual(cost0, 5);
            assert.strictEqual(cost1, 10);
        });

        test('getTalentCost should return -1 if maxed', () => {
            const cost = GameCore.getTalentCost('dmgUp1', 5);
            assert.strictEqual(cost, -1);
        });

        test('getKillGold should return more for bosses and chests', () => {
            const normal = { isPrimary: false, isBoss: false, isSilverChest: false };
            const boss = { isPrimary: false, isBoss: true, isSilverChest: false };
            const chest = { isPrimary: false, isBoss: false, isSilverChest: true };

            const gNormal = GameCore.getKillGold(normal, 1, 1);
            const gBoss = GameCore.getKillGold(boss, 1, 1);
            const gChest = GameCore.getKillGold(chest, 1, 1);

            assert.ok(gBoss > gNormal);
            assert.ok(gChest > gBoss);
        });

        test('getShopCost should scale with level', () => {
            const config = { tap: { baseCost: 10 } };
            const cost0 = GameCore.getShopCost('tap', 0, config);
            const cost1 = GameCore.getShopCost('tap', 1, config);
            assert.strictEqual(cost0, 10);
            assert.ok(cost1 > cost0);
        });
    });


    describe('Ability System', () => {
        test('getAbilityCooldownSec diminue avec level mais jamais sous le minimum', () => {
            const cd0 = GameCore.getAbilityCooldownSec('nova', 0);
            const cd10 = GameCore.getAbilityCooldownSec('nova', 10);
            const cd99 = GameCore.getAbilityCooldownSec('nova', 99);
            assert.ok(cd10 < cd0);
            assert.strictEqual(cd99, GameCore.getAbilityDefs().nova.minCooldownSec);
        });

        test('activateAbility fixe cooldownEndsAt = now + cooldown', () => {
            const nowMs = 1_000_000;
            const state = { abilities: { nova: { level: 0, cooldownEndsAt: 0 } }, prestige: { talents: {} } };
            const res = GameCore.activateAbility(state, 'nova', nowMs);
            assert.ok(res.effect);
            assert.strictEqual(res.newState.abilities.nova.cooldownEndsAt, nowMs + 60000);
            assert.strictEqual(res.effect.type, 'damage');
            assert.strictEqual(res.effect.targets, 'all');
        });

        test('isAbilityReady fonctionne selon cooldownEndsAt', () => {
            const abilityState = { level: 0, cooldownEndsAt: 5000 };
            assert.strictEqual(GameCore.isAbilityReady(abilityState, 4999), false);
            assert.strictEqual(GameCore.isAbilityReady(abilityState, 5000), true);
        });

        test('upgrade cost scaling est croissant et convexe', () => {
            const c0 = GameCore.getAbilityUpgradeCost('frenzy', 0);
            const c1 = GameCore.getAbilityUpgradeCost('frenzy', 1);
            const c2 = GameCore.getAbilityUpgradeCost('frenzy', 2);
            assert.ok(c1 > c0);
            assert.ok(c2 > c1);
            assert.ok((c2 - c1) > (c1 - c0));
        });

        test('Fureur définit activeUntil et le buff est appliqué pendant la fenêtre active', () => {
            const nowMs = 5000;
            const state = {
                abilities: { frenzy: { level: 2, cooldownEndsAt: 0, activeUntil: 0 } },
                prestige: { talents: {} },
            };
            const res = GameCore.activateAbility(state, 'frenzy', nowMs);
            assert.ok(res.effect);
            assert.strictEqual(res.effect.type, 'buff');
            assert.strictEqual(res.effect.durationMs, 8000);
            assert.strictEqual(res.newState.abilities.frenzy.activeUntil, nowMs + 8000);

            const activeMult = GameCore.getDamageMultiplierFromActiveBuffs(res.newState, nowMs + 1000);
            const expiredMult = GameCore.getDamageMultiplierFromActiveBuffs(res.newState, nowMs + 9000);
            assert.ok(activeMult > 1);
            assert.strictEqual(expiredMult, 1);
        });

        test('unlock auto abilities: true seulement après premier prestige', () => {
            const locked = { prestige: { count: 0 }, hasPrestigedOnce: false };
            const unlockedByCount = { prestige: { count: 1 }, hasPrestigedOnce: false };
            const unlockedByFlag = { prestige: { count: 0 }, hasPrestigedOnce: true };
            assert.strictEqual(GameCore.isAutoAbilitiesUnlocked(locked), false);
            assert.strictEqual(GameCore.isAutoAbilitiesUnlocked(unlockedByCount), true);
            assert.strictEqual(GameCore.isAutoAbilitiesUnlocked(unlockedByFlag), true);
        });
    });

    describe('Loot System', () => {
        test('generateItem should return valid item', () => {
            const rarities = [{ icon: "⚪", nameKey: "rarity_common", mult: 1 }];
            const pools = { weapon: ["🗡️"] };
            const item = GameCore.generateItem('weapon', 1, false, rarities, pools, () => 0.1);

            assert.strictEqual(item.slot, 'weapon');
            assert.strictEqual(item.rarity.index, 0);
            assert.strictEqual(item.emoji, "🗡️");
            assert.ok(item.stats.tap > 0);
        });
    });

});
