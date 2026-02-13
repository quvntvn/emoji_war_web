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

});
