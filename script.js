const STORAGE_KEY = "emojiWarSave_v1";

const MONSTERS = ["👾", "🐉", "🕷️", "🦂", "🐺", "🦍", "🐍", "💀"];
const HEROES = ["🧙", "🥷", "🧑‍🚀", "🤖", "🦊", "🧝", "🦸", "🧛"];
const FEEDBACK_EMOJIS = ["💥", "⚡"];
const SILVER_CHEST_CHANCE = 0.015;
const SILVER_CHEST_EMOJI = "🪙";


const I18N = {
  fr: {
    pageTitle: "Emoji War: Légendes Idle",
    hudStage: "🏁 Niveau",
    hudGold: "💰 Or",
    hudTap: "👆 Dégâts clic",
    hudDps: "⚙️ DPS",
    hudScore: "⭐ Score",
    shop: "🛒 Boutique",
    inventory: "🎒 Inventaire",
    prestige: "🔮 Prestige",
    settings: "🌐 Paramètres",
    autoLocked: "🤖 Auto OFF (débloqué au premier prestige)",
    autoState: "🤖 Auto {state}",
    on: "ON",
    off: "OFF",
    heroSubtitle: "Les alliés infligent des DPS auto et se réinitialisent au prestige.",
    companionPower: "Puissance des alliés : {value} DPS",
    noCompanions: "Aucun allié. Achetez-en un dans la boutique !",
    waveBoss: "👑 Boss principal",
    waveEnemy: "Vague d'ennemis",
    waveStage: "Niveau {stage} • {alive}/{total} ennemis",
    chestTitle: "Coffre d'argent rare (1,5%)",
    enemyTitle: "Ennemi",
    attackTitle: "Attaque : {damage} dégâts",
    settingsLanguage: "Langue",
    settingsTitle: "🌐 Paramètres",
    heroTitle: "Héros & Compagnons",
    shopTitle: "🛒 Boutique",
    shopGoldLabel: "Or disponible",
    inventoryTitle: "🎒 Inventaire & Équipement",
    equipped: "Équipé",
    backpack: "Sac",
    prestigeTitle: "🔮 Chambre de Prestige",
    prestigeInfo: "Chaque boss vaincu donne 1 🟣. Dépensez 60 🟣 pour prestigier.",
    prestigeCurrent: "Actuel 🔮",
    highestStage: "Niveau max",
    damageMultiplier: "Multiplicateur de dégâts",
    goldMultiplier: "Multiplicateur d'or",
    dropBonus: "Bonus de drop",
    prestigeCostLabel: "Coût du prestige",
    close: "Fermer",
    all: "Tous",
    empty: "Vide",
    noItems: "Aucun objet. Battez des monstres et des boss !",
    noItemsTab: "Aucun objet dans cet onglet.",
    equip: "Équiper",
    level: "Niveau",
    total: "Total",
    gain: "Gain",
    current: "Actuel",
    buy: "Acheter",
    max: "Max",
    tapPerClick: "dégâts / clic",
    autoDps: "DPS auto",
    companionsDps: "DPS compagnons",
    secondaryMonsters: "monstres secondaires",
    lootFound: "Butin",
    silverChestGold: "Coffre argent ! +{gold}💰",
    needPrestige: "Besoin de {cost}🟣 (vous avez {have})",
    performPrestige: "Prestigier (Coût {cost}🟣)",
    companionTooltip: "+{dps} DPS • frappe toutes les {seconds}s",
    goldWord: "or",
    tapWord: "clic",
    dpsWord: "dps",
    slot_weapon: "⚔️ Arme",
    slot_shield: "🛡️ Bouclier",
    slot_boots: "👢 Bottes",
    slot_ring: "💍 Anneau",
    slot_gloves: "🧤 Gants",
    rarity_common: "Commun",
    rarity_uncommon: "Inhabituel",
    rarity_rare: "Rare",
    rarity_epic: "Épique",
    rarity_legendary: "Légendaire",
    shop_tap_name: "👆 Maîtrise du clic",
    shop_tap_bonus: "+1 dégât par clic",
    shop_dps_name: "⚙️ DPS auto",
    shop_dps_bonus: "+1 DPS auto",
    shop_gold_name: "💰 Gain d'or",
    shop_gold_bonus: "+10% or",
    shop_companion_name: "👥 Invoquer un compagnon",
    shop_companion_bonus: "+1 allié (DPS augmenté)",
    shop_enemyCount_name: "🧟 Meute d'ennemis",
    shop_enemyCount_bonus: "+1 monstre secondaire (max 9)",
  },
  en: {
    pageTitle: "Emoji War: Idle Legends",
    hudStage: "🏁 Stage",
    hudGold: "💰 Gold",
    hudTap: "👆 Click Dmg",
    hudDps: "⚙️ DPS",
    hudScore: "⭐ Score",
    shop: "🛒 Shop",
    inventory: "🎒 Inventory",
    prestige: "🔮 Prestige",
    settings: "🌐 Settings",
    autoLocked: "🤖 Auto OFF (Unlock at first prestige)",
    autoState: "🤖 Auto {state}",
    on: "ON",
    off: "OFF",
    heroSubtitle: "Allies deal auto DPS and reset on prestige.",
    companionPower: "Companion power: {value} DPS",
    noCompanions: "No companions yet. Buy one in the shop!",
    waveBoss: "👑 Main Boss",
    waveEnemy: "Enemy Wave",
    waveStage: "Stage {stage} • {alive}/{total} enemies",
    chestTitle: "Rare silver chest (1.5%)",
    enemyTitle: "Enemy",
    attackTitle: "Attack: {damage} damage",
    settingsLanguage: "Language",
    settingsTitle: "🌐 Settings",
    heroTitle: "Hero & Companions",
    shopTitle: "🛒 Shop",
    shopGoldLabel: "Available gold",
    inventoryTitle: "🎒 Inventory & Gear",
    equipped: "Equipped",
    backpack: "Backpack",
    prestigeTitle: "🔮 Prestige Chamber",
    prestigeInfo: "Each defeated boss gives 1 🟣. Spend 60 🟣 to prestige.",
    prestigeCurrent: "Current 🔮",
    highestStage: "Highest Stage",
    damageMultiplier: "Damage Multiplier",
    goldMultiplier: "Gold Multiplier",
    dropBonus: "Drop Bonus",
    prestigeCostLabel: "Prestige Cost",
    close: "Close",
    all: "All",
    empty: "Empty",
    noItems: "No items yet. Defeat monsters and bosses!",
    noItemsTab: "No item in this tab yet.",
    equip: "Equip",
    level: "Level",
    total: "Total",
    gain: "Gain",
    current: "Current",
    buy: "Buy",
    max: "Max",
    tapPerClick: "damage / click",
    autoDps: "auto DPS",
    companionsDps: "companion DPS",
    secondaryMonsters: "secondary monsters",
    lootFound: "Loot",
    silverChestGold: "Silver chest! +{gold}💰",
    needPrestige: "Need {cost}🟣 (you have {have})",
    performPrestige: "Perform Prestige (Cost {cost}🟣)",
    companionTooltip: "+{dps} DPS • attacks every {seconds}s",
    goldWord: "gold",
    tapWord: "tap",
    dpsWord: "dps",
    slot_weapon: "⚔️ Weapon",
    slot_shield: "🛡️ Shield",
    slot_boots: "👢 Boots",
    slot_ring: "💍 Ring",
    slot_gloves: "🧤 Gloves",
    rarity_common: "Common",
    rarity_uncommon: "Uncommon",
    rarity_rare: "Rare",
    rarity_epic: "Epic",
    rarity_legendary: "Legendary",
    shop_tap_name: "👆 Tap Mastery",
    shop_tap_bonus: "+1 damage per click",
    shop_dps_name: "⚙️ Auto DPS",
    shop_dps_bonus: "+1 auto DPS",
    shop_gold_name: "💰 Gold Gain",
    shop_gold_bonus: "+10% gold",
    shop_companion_name: "👥 Summon Companion",
    shop_companion_bonus: "+1 ally (higher DPS)",
    shop_enemyCount_name: "🧟 Enemy Pack",
    shop_enemyCount_bonus: "+1 secondary monster (max 9)",
  },
};

const SHOP_CONFIG = {
  tap: { nameKey: "shop_tap_name", baseCost: 12, basePower: 1.25, key: "tapLevel", bonusKey: "shop_tap_bonus" },
  dps: { nameKey: "shop_dps_name", baseCost: 20, basePower: 1.4, key: "dpsLevel", bonusKey: "shop_dps_bonus" },
  gold: { nameKey: "shop_gold_name", baseCost: 30, basePower: 0.12, key: "goldLevel", bonusKey: "shop_gold_bonus" },
  companion: { nameKey: "shop_companion_name", baseCost: 55, key: "companionLevel", bonusKey: "shop_companion_bonus" },
  enemyCount: { nameKey: "shop_enemyCount_name", baseCost: 70, key: "enemyCountLevel", bonusKey: "shop_enemyCount_bonus", maxLevel: 9 },
};

const EQUIP_SLOTS = [
  { key: "weapon", labelKey: "slot_weapon" },
  { key: "shield", labelKey: "slot_shield" },
  { key: "boots", labelKey: "slot_boots" },
  { key: "ring", labelKey: "slot_ring" },
  { key: "gloves", labelKey: "slot_gloves" },
];

const EQUIP_POOLS = {
  weapon: ["🗡️", "⚔️", "🔨", "🪓", "🏹"],
  shield: ["🛡️", "🪖", "🧿"],
  boots: ["👢", "🥾", "🩴"],
  ring: ["💍", "📿", "💠"],
  gloves: ["🧤", "🥊", "🧱"],
};

const RARITIES = [
  { icon: "⚪️", nameKey: "rarity_common", mult: 1 },
  { icon: "🟢", nameKey: "rarity_uncommon", mult: 1.35 },
  { icon: "🔵", nameKey: "rarity_rare", mult: 1.8 },
  { icon: "🟣", nameKey: "rarity_epic", mult: 2.45 },
  { icon: "🟠", nameKey: "rarity_legendary", mult: 3.3 },
];

function emojiList(raw) {
  return Array.from(raw).filter((ch) => ch && ch !== "\uFE0F");
}

const COMPANION_POOL = [
  ...emojiList("🐶🐱🐭🐹🐰🦊🐻🐼🐨🐯🦁🐮🐷🐸🐵🐔🐧🐦🐤🦆🦅🦉🦇🐺🐗🐴🦄🐝🐛🦋🐌🐞🐜🪲🪳🦂🐢🐍🦎🐙🦑🦐🦞🦀🐡🐠🐟🐬🐳🐋🦈🐊🐅🐆🦓🦍🦧🐘🦛🦏🐪🐫🦒🦬🐃🐂🐄🐎🐖🐏🐑🦙🐐🦌🐕🦮🐩🐈🐓🦃🦤🕊🦢🦩🦚🦜🐇🦝🦨🦡🦫🦦🦥🐁🐀🐿🦔"),
  ...emojiList("😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🥳😏😒😞😔😟😕🙁☹😣😖😫😩🥺😢😭😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🤗🤔🫡🤭🫢🫣🤫🤥😶🫥😐🫤😑😬🙄😯😦😧😮😲🥱😴🤤😪😵🤐🥴🤢🤮🤧😷🤒🤕"),
  ...emojiList("🍏🍎🍐🍊🍋🍌🍉🍇🍓🫐🍈🍒🍑🥭🍍🥥🥝🍅🍆🥑🥦🥬🥒🌶🫑🌽🥕🫒🧄🧅🥔🍠🫘🥐🥯🍞🥖🥨🧀🥚🍳🧈🥞🧇🥓🥩🍗🍖🦴🌭🍔🍟🍕🫓🥪🌮🌯🫔🥙🧆🥗🥘🍲🫕🥫🍝🍜🍛🍣🍱🥟🦪🍤🍙🍚🍘🍥🥠🥮🍢🍡🍧🍨🍦🥧🧁🍰🎂🍮🍭🍬🍫🍿🍩🍪🌰🥜🍯🍼🥛☕🍵🧃🥤🧋🍶🍺🍻🥂🍷🫗🥃🍸🍹🧉"),
  ...emojiList("⚽🏀🏈⚾🥎🎾🏐🏉🥏🎱🏓🏸🏒🏑🥍🏏🪃🥅⛳🪁🏹🎣🤿🥊🥋🎽🛹🛼🛷⛸🥌🎿⛷🏂🪂🏋🤼🤸⛹🤺🤾🏌🏇🧘🏄🏊🤽🚣🧗🚴🚵🎯🎮🎲🧩♟🎭🎨🎼🎤🎧🎷🎸🎹🥁🪘🎺🪗🪕🎻"),
  ...emojiList("🚗🚕🚙🚌🚎🏎🚓🚑🚒🚐🛻🚚🚛🚜🛵🏍🛺🚲🛴🚨🚁🛸✈🛫🛬🚀🛰⛵🚤🛥🛳⛴🚢⚓🪝🚧⛽🛞🚦🗺🧭🏰🏯🗽🗼🎡🎢🎠⛲🏖🏝🏜🌋⛰🏔🛤🌁🌃🏙🌄🌅🌆🌇🌉🌌🌠🎑"),
];

const defaultState = {
  hero: HEROES[Math.floor(Math.random() * HEROES.length)],
  stage: 1,
  highestStage: 1,
  gold: 0,
  score: 0,
  enemies: [],
  upgrades: {
    tapLevel: 0,
    dpsLevel: 0,
    goldLevel: 0,
    companionLevel: 0,
    enemyCountLevel: 0,
  },
  companions: [],
  equipment: {
    weapon: null,
    shield: null,
    boots: null,
    ring: null,
    gloves: null,
  },
  inventory: [],
  inventoryFilter: "all",
  automationEnabled: false,
  language: "fr",
  prestige: {
    shards: 0,
    count: 0,
  },
};

let state = loadState();

const el = {
  stage: document.getElementById("stageValue"),
  gold: document.getElementById("goldValue"),
  tapDamage: document.getElementById("tapDamageValue"),
  dps: document.getElementById("dpsValue"),
  score: document.getElementById("scoreValue"),
  monsterType: document.getElementById("monsterType"),
  monsterStage: document.getElementById("monsterStage"),
  monsterField: document.getElementById("monsterField"),
  hpFill: document.getElementById("hpFill"),
  hpText: document.getElementById("monsterHpText"),
  effects: document.getElementById("combatEffects"),
  hero: document.querySelector(".hero"),
  companions: document.getElementById("companionList"),
  companionPower: document.getElementById("companionPower"),
  shopItems: document.getElementById("shopItems"),
  shopGold: document.getElementById("shopGoldValue"),
  inventoryTabs: document.getElementById("inventoryTabs"),
  inventoryItems: document.getElementById("inventoryItems"),
  equipmentSlots: document.getElementById("equipmentSlots"),
  prestigeCurrency: document.getElementById("prestigeCurrency"),
  highestStage: document.getElementById("highestStage"),
  prestigeDamageBonus: document.getElementById("prestigeDamageBonus"),
  prestigeGoldBonus: document.getElementById("prestigeGoldBonus"),
  prestigeDropBonus: document.getElementById("prestigeDropBonus"),
  prestigeCost: document.getElementById("prestigeCost"),
  prestigeConfirm: document.getElementById("prestigeConfirm"),
  prestigeButton: document.getElementById("prestigeButton"),
  automationToggle: document.getElementById("automationToggle"),
  stageLabel: document.getElementById("stageLabel"),
  goldLabel: document.getElementById("goldLabel"),
  tapDamageLabel: document.getElementById("tapDamageLabel"),
  dpsLabel: document.getElementById("dpsLabel"),
  scoreLabel: document.getElementById("scoreLabel"),
  heroSubtitle: document.getElementById("heroSubtitle"),
  shopButton: document.getElementById("shopButton"),
  inventoryButton: document.getElementById("inventoryButton"),
  settingsButton: document.getElementById("settingsButton"),
  languageLabel: document.getElementById("languageLabel"),
  langFr: document.getElementById("langFr"),
  langEn: document.getElementById("langEn"),
  settingsTitle: document.getElementById("settingsTitle"),
  pageTitle: document.getElementById("pageTitle"),
  heroTitle: document.getElementById("heroTitle"),
  shopTitle: document.getElementById("shopTitle"),
  shopGoldLabel: document.getElementById("shopGoldLabel"),
  inventoryTitle: document.getElementById("inventoryTitle"),
  equippedTitle: document.getElementById("equippedTitle"),
  backpackTitle: document.getElementById("backpackTitle"),
  prestigeTitle: document.getElementById("prestigeTitle"),
  prestigeInfoText: document.getElementById("prestigeInfoText"),
  prestigeCurrencyLabel: document.getElementById("prestigeCurrencyLabel"),
  highestStageLabel: document.getElementById("highestStageLabel"),
  prestigeDamageLabel: document.getElementById("prestigeDamageLabel"),
  prestigeGoldLabel: document.getElementById("prestigeGoldLabel"),
  prestigeDropLabel: document.getElementById("prestigeDropLabel"),
  prestigeCostLabel: document.getElementById("prestigeCostLabel"),
};

function t(key, vars = {}) {
  const lang = I18N[state.language] || I18N.fr;
  const template = lang[key] || I18N.fr[key] || key;
  return Object.entries(vars).reduce(
    (txt, [k, value]) => txt.replaceAll(`{${k}}`, String(value)),
    template
  );
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultState);
  try {
    const parsed = JSON.parse(raw);
    const merged = structuredClone(defaultState);
    const loaded = {
      ...merged,
      ...parsed,
      upgrades: { ...merged.upgrades, ...parsed.upgrades },
      equipment: { ...merged.equipment, ...parsed.equipment },
      prestige: { ...merged.prestige, ...parsed.prestige },
      companions: Array.isArray(parsed.companions) ? parsed.companions : [],
      inventory: Array.isArray(parsed.inventory) ? parsed.inventory : [],
      enemies: Array.isArray(parsed.enemies) ? parsed.enemies : [],
      inventoryFilter: parsed.inventoryFilter || "all",
      automationEnabled: Boolean(parsed.automationEnabled),
      language: parsed.language === "en" ? "en" : "fr",
    };

    if (!loaded.enemies.length && parsed.monster) {
      loaded.enemies = [parsed.monster];
    }

    return loaded;
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let saveQueued = false;

function scheduleSave() {
  saveQueued = true;
}

function flushSave() {
  if (!saveQueued) return;
  saveState();
  saveQueued = false;
}

function getMonsterMaxHp(stage = state.stage) {
  return Math.max(1, Math.floor(8 * Math.pow(1.12, stage - 1)));
}

function getExtraEnemyCount() {
  return state.upgrades.enemyCountLevel;
}

function getTapDamage() {
  const base = 1 + state.upgrades.tapLevel * SHOP_CONFIG.tap.basePower;
  const gear = getEquipmentBonuses().tap;
  return (base + gear) * getPrestigeDamageMultiplier();
}

function getCompanionTotalDps() {
  const playerDps = getPlayerDps();
  return state.companions.reduce((sum, companion) => sum + getCompanionDps(companion, playerDps), 0);
}

function getPlayerDps() {
  const upgradeDps = state.upgrades.dpsLevel * SHOP_CONFIG.dps.basePower;
  const gear = getEquipmentBonuses().dps;
  return (upgradeDps + gear) * getPrestigeDamageMultiplier();
}

function getDps() {
  const companionDps = getCompanionTotalDps();
  return getPlayerDps() + companionDps;
}

function getGoldMultiplier() {
  const upgradeMult = 1 + state.upgrades.goldLevel * SHOP_CONFIG.gold.basePower;
  const gearMult = 1 + getEquipmentBonuses().gold;
  return upgradeMult * gearMult * getPrestigeGoldMultiplier();
}

function getPrestigeDamageMultiplier() {
  return 1 + state.prestige.shards * 0.06;
}

function getPrestigeGoldMultiplier() {
  return 1 + state.prestige.shards * 0.05;
}

function getDropBonus() {
  return state.prestige.shards * 0.002;
}

function getEquipmentBonuses() {
  return Object.values(state.equipment).reduce(
    (acc, item) => {
      if (!item) return acc;
      acc.tap += item.stats.tap;
      acc.dps += item.stats.dps;
      acc.gold += item.stats.gold;
      return acc;
    },
    { tap: 0, dps: 0, gold: 0 }
  );
}

function getShopCost(type) {
  const cfg = SHOP_CONFIG[type];
  const lvl = state.upgrades[cfg.key];
  return Math.floor(cfg.baseCost * Math.pow(1.15, lvl));
}

function getCompanionDps(companion, playerDps = getPlayerDps()) {
  if (companion.isGolden) return playerDps * 20;
  const multiplier = companion.dpsMultiplier ?? 1;
  return playerDps * multiplier;
}

function getRandomCompanionMultiplier() {
  return Number((0.6 + Math.random() * 1.6).toFixed(2));
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function createEnemy(stage, isBoss = false) {
  const hpVariance = 0.75 + Math.random() * 0.5;
  const isSilverChest = !isBoss && Math.random() < SILVER_CHEST_CHANCE;
  const hpMultiplier = isBoss ? 3.2 : (isSilverChest ? 0.85 : 1);
  const maxHp = Math.floor(getMonsterMaxHp(stage) * hpVariance * hpMultiplier);
  return {
    id: `${Date.now()}_${Math.random()}`,
    emoji: isSilverChest ? SILVER_CHEST_EMOJI : randomFrom(MONSTERS),
    hp: maxHp,
    maxHp,
    isBoss,
    isSilverChest,
    isPrimary: false,
    isRespawnable: false,
  };
}


function sanitizeEnemy(enemy, index = 0) {
  const maxHp = Math.max(1, Number(enemy?.maxHp) || getMonsterMaxHp(state.stage));
  const hp = Math.min(maxHp, Math.max(0, Number(enemy?.hp) || maxHp));
  return {
    id: enemy?.id || `${Date.now()}_${Math.random()}_${index}`,
    emoji: enemy?.emoji || randomFrom(MONSTERS),
    hp,
    maxHp,
    isBoss: Boolean(enemy?.isBoss),
    isSilverChest: Boolean(enemy?.isSilverChest),
    isPrimary: Boolean(enemy?.isPrimary),
    isRespawnable: Boolean(enemy?.isRespawnable),
  };
}

function createEnemiesForStage(stage) {
  const bossWave = stage % 10 === 0;
  const primaryEnemy = createEnemy(stage, bossWave);
  primaryEnemy.isPrimary = true;

  const extraCount = getExtraEnemyCount();
  const extras = Array.from({ length: extraCount }, () => {
    const enemy = createEnemy(stage, false);
    enemy.isRespawnable = true;
    return enemy;
  });

  return [primaryEnemy, ...extras];
}

function getWaveInfo() {
  const alive = state.enemies.filter((enemy) => enemy.hp > 0);
  const hp = alive.reduce((sum, enemy) => sum + enemy.hp, 0);
  const maxHp = alive.reduce((sum, enemy) => sum + enemy.maxHp, 0);
  const hasBoss = alive.some((enemy) => enemy.isBoss);
  return {
    alive,
    hp,
    maxHp,
    hasBoss,
    total: state.enemies.length,
  };
}

function clearWave() {
  const baseGold = Math.floor(8 * Math.pow(1.14, state.stage));
  const configuredEnemyCount = 1 + getExtraEnemyCount();
  const countMult = Math.max(1, 0.45 + configuredEnemyCount * 0.55);
  const primary = state.enemies.find((enemy) => enemy.isPrimary);
  const bossMult = primary?.isBoss ? 2 : 1;
  const goldGain = Math.floor(baseGold * countMult * getGoldMultiplier() * bossMult);

  state.gold += goldGain;
  state.score += Math.floor(state.stage * (primary?.isBoss ? 30 : 10) * countMult);
  if (primary?.isBoss) {
    state.prestige.shards += 1;
  }
  maybeDropLoot(Boolean(primary?.isBoss));
  state.stage += 1;
  state.highestStage = Math.max(state.highestStage, state.stage);
  state.enemies = createEnemiesForStage(state.stage);
  showEffect(`+${formatNumber(goldGain)}💰`);
  scheduleSave();
}

function maybeDropLoot(hasBoss) {
  if (!hasBoss) return;
  const slotDef = randomFrom(EQUIP_SLOTS);
  const item = generateItem(slotDef.key, state.stage, hasBoss);
  state.inventory.unshift(item);
  showEffect(`${t("lootFound")} ${item.emoji}${item.rarity.icon}`);
  scheduleSave();
}

function generateItem(slotKey, stage, isBoss) {
  const rarityRoll = Math.random();
  let rarityIndex = 0;
  const table = isBoss ? [0.2, 0.45, 0.72, 0.9, 1] : [0.5, 0.78, 0.93, 0.985, 1];
  while (rarityRoll > table[rarityIndex]) rarityIndex += 1;
  const rarity = RARITIES[rarityIndex];
  const power = (1 + stage * 0.08) * rarity.mult;
  return {
    id: `${Date.now()}_${Math.random()}`,
    slot: slotKey,
    slotLabel: slotKey,
    emoji: randomFrom(EQUIP_POOLS[slotKey]),
    rarity: { ...rarity, index: rarityIndex },
    stats: {
      tap: Number((power * 0.35).toFixed(2)),
      dps: Number((power * 0.22).toFixed(2)),
      gold: Number((power * 0.012).toFixed(3)),
    },
  };
}

function applyDamage(enemy, amount) {
  if (enemy.hp <= 0) return false;
  const previousHp = enemy.hp;
  enemy.hp = Math.max(0, enemy.hp - amount);
  return previousHp > 0 && enemy.hp === 0;
}

function getEnemyById(enemyId) {
  return state.enemies.find((enemy) => enemy.id === enemyId && enemy.hp > 0);
}

function refillSecondaryEnemies() {
  state.enemies = state.enemies.filter((enemy) => enemy.hp > 0 || !enemy.isRespawnable);

  const aliveSecondaries = state.enemies.filter((enemy) => enemy.hp > 0 && enemy.isRespawnable).length;
  const missing = getExtraEnemyCount() - aliveSecondaries;
  if (missing <= 0) return;

  for (let i = 0; i < missing; i += 1) {
    const enemy = createEnemy(state.stage, false);
    enemy.isRespawnable = true;
    state.enemies.push(enemy);
  }
}

function getRandomAliveEnemies(limit, excludedId = null) {
  const pool = state.enemies.filter((enemy) => enemy.hp > 0 && enemy.id !== excludedId);
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, limit);
}

function getKillGold(enemy) {
  const base = Math.floor(4 * Math.pow(1.12, state.stage - 1));
  const primaryMult = enemy.isPrimary ? 1.8 : 1;
  const bossMult = enemy.isBoss ? 2.5 : 1;
  const chestMult = enemy.isSilverChest ? 30 : 1;
  return Math.floor(base * primaryMult * bossMult * chestMult * getGoldMultiplier());
}

function rewardEnemyKills(killedEnemies) {
  if (!killedEnemies.length) return;
  const goldGain = killedEnemies.reduce((sum, enemy) => sum + getKillGold(enemy), 0);
  state.gold += goldGain;
  const foundChest = killedEnemies.some((enemy) => enemy.isSilverChest);
  showEffect(foundChest ? t("silverChestGold", { gold: formatNumber(goldGain) }) : `+${formatNumber(goldGain)}${randomFrom(FEEDBACK_EMOJIS)}`);
}

function attack(enemyId, amount, fromAuto = false) {
  const mainTarget = getEnemyById(enemyId) || state.enemies.find((enemy) => enemy.hp > 0);
  if (!mainTarget) return;

  const killedEnemies = [];

  if (applyDamage(mainTarget, amount)) killedEnemies.push(mainTarget);

  rewardEnemyKills(killedEnemies);

  if (!fromAuto && !killedEnemies.length) {
    showEffect(randomFrom(FEEDBACK_EMOJIS));
  }

  const primaryAlive = state.enemies.some((enemy) => enemy.isPrimary && enemy.hp > 0);
  if (!primaryAlive) {
    clearWave();
  } else {
    refillSecondaryEnemies();
    scheduleSave();
  }

  renderCombat();
}

function buyUpgrade(type) {
  const cost = getShopCost(type);
  const cfg = SHOP_CONFIG[type];
  if (cfg.maxLevel && state.upgrades[cfg.key] >= cfg.maxLevel) return;
  if (state.gold < cost) return;
  state.gold -= cost;
  state.upgrades[cfg.key] += 1;

  if (type === "companion") {
    const attackIntervalMs = Math.floor(800 + Math.random() * 1800);
    const companion = {
      emoji: randomFrom(COMPANION_POOL),
      dpsMultiplier: getRandomCompanionMultiplier(),
      attackIntervalMs,
      nextAttackAt: Date.now() + attackIntervalMs,
      isGolden: false,
    };
    state.companions.push(companion);
  }

  if (type === "enemyCount") {
    refillSecondaryEnemies();
  }

  scheduleSave();
  renderFull();
}

function equipItem(itemId) {
  const idx = state.inventory.findIndex((it) => it.id === itemId);
  if (idx === -1) return;
  const item = state.inventory[idx];
  const prev = state.equipment[item.slot];
  state.equipment[item.slot] = item;
  state.inventory.splice(idx, 1);
  if (prev) state.inventory.unshift(prev);
  scheduleSave();
  renderFull();
}

function canPrestige() {
  return state.prestige.shards >= getPrestigeCost();
}

function getPrestigeCost() {
  return 60;
}

function doPrestige() {
  if (!canPrestige()) return;
  const cost = getPrestigeCost();
  if (state.prestige.shards < cost) return;

  state.prestige.shards -= cost;
  state.prestige.count += 1;

  const restartStage = Math.max(1, Math.floor(state.stage / 4));
  const attackIntervalMs = Math.floor(800 + Math.random() * 1800);
  const goldenCompanion = {
    emoji: "🌟",
    dps: 0,
    attackIntervalMs,
    nextAttackAt: Date.now() + attackIntervalMs,
    isGolden: true,
  };

  state.stage = restartStage;
  state.gold = 0;
  state.score = 0;
  state.enemies = createEnemiesForStage(restartStage);
  state.upgrades = { tapLevel: 0, dpsLevel: 0, goldLevel: 0, companionLevel: 0, enemyCountLevel: 0 };
  state.companions = [
    ...state.companions.filter((companion) => companion.isGolden),
    goldenCompanion,
  ];
  state.inventory = [];
  state.equipment = { weapon: null, shield: null, boots: null, ring: null, gloves: null };

  scheduleSave();
  renderFull();
}

function showEffect(text) {
  el.effects.textContent = text;
  clearTimeout(showEffect.timer);
  showEffect.timer = setTimeout(() => {
    el.effects.textContent = "";
  }, 500);
}

function formatNumber(num) {
  if (num < 1000) return Math.floor(num).toString();
  const units = ["K", "M", "B", "T", "Qa", "Qi"];
  let value = num;
  let unitIndex = -1;
  while (value >= 1000 && unitIndex < units.length - 1) {
    value /= 1000;
    unitIndex += 1;
  }
  return `${value.toFixed(value >= 100 ? 0 : 1)}${units[unitIndex]}`;
}


function getSlotLabel(slotKey) {
  return t(`slot_${slotKey}`);
}

function getRarityName(rarity) {
  if (rarity?.nameKey) return t(rarity.nameKey);
  const fallback = ["rarity_common", "rarity_uncommon", "rarity_rare", "rarity_epic", "rarity_legendary"][rarity?.index ?? 0] || "rarity_common";
  return t(fallback);
}

function getUpgradeCurrentValue(key) {
  if (key === "tap") return `${t("current")}: ${getTapDamage().toFixed(1)} ${t("tapPerClick")}`;
  if (key === "dps") return `${t("current")}: ${getPlayerDps().toFixed(1)} ${t("autoDps")}`;
  if (key === "gold") return `${t("current")}: +${((getGoldMultiplier() - 1) * 100).toFixed(1)}% ${t("goldWord")}`;
  if (key === "companion") return `${t("current")}: ${getCompanionTotalDps().toFixed(1)} ${t("companionsDps")}`;
  if (key === "enemyCount") return `${t("current")}: ${getExtraEnemyCount()} ${t("secondaryMonsters")}`;
  return "";
}

function isAutomationUnlocked() {
  return state.prestige.count >= 1;
}

function getItemScore(item) {
  return item.stats.tap + item.stats.dps * 1.35 + item.stats.gold * 100;
}

function autoEquipBestGear() {
  for (const slot of EQUIP_SLOTS) {
    const candidates = state.inventory.filter((item) => item.slot === slot.key);
    const current = state.equipment[slot.key];
    if (current) candidates.push(current);
    if (!candidates.length) continue;

    candidates.sort((a, b) => getItemScore(b) - getItemScore(a));
    const best = candidates[0];
    if (current && current.id === best.id) continue;
    const bestIdx = state.inventory.findIndex((item) => item.id === best.id);
    if (bestIdx === -1) continue;

    state.inventory.splice(bestIdx, 1);
    if (current) state.inventory.unshift(current);
    state.equipment[slot.key] = best;
  }
}

function autoBuyCheapestUpgrade() {
  const entries = Object.keys(SHOP_CONFIG)
    .map((key) => {
      const cfg = SHOP_CONFIG[key];
      const level = state.upgrades[cfg.key];
      if (cfg.maxLevel && level >= cfg.maxLevel) return null;
      return { key, cost: getShopCost(key) };
    })
    .filter(Boolean)
    .sort((a, b) => a.cost - b.cost);

  if (!entries.length) return false;
  const cheapest = entries[0];
  if (state.gold < cheapest.cost) return false;
  buyUpgrade(cheapest.key);
  return true;
}

function runAutomation() {
  if (!isAutomationUnlocked() || !state.automationEnabled) return;
  autoEquipBestGear();
  for (let i = 0; i < 4; i += 1) {
    if (!autoBuyCheapestUpgrade()) break;
  }
}

function renderShop() {
  const entries = ["tap", "dps", "gold", "companion", "enemyCount"];
  el.shopItems.innerHTML = "";
  el.shopGold.textContent = formatNumber(state.gold);
  for (const key of entries) {
    const cfg = SHOP_CONFIG[key];
    const cost = getShopCost(key);
    const level = state.upgrades[cfg.key];
    const reachedCap = cfg.maxLevel && level >= cfg.maxLevel;
    const row = document.createElement("div");
    row.className = "shop-item";
    row.innerHTML = `
      <div class="item-head">
        <strong>${t(cfg.nameKey)}</strong>
        <button class="shop-buy" data-buy="${key}" ${(state.gold < cost || reachedCap) ? "disabled" : ""}>${reachedCap ? t("max") : `${t("buy")} ${formatNumber(cost)}💰`}</button>
      </div>
      <div class="item-meta">${t("level")} ${level}${cfg.maxLevel ? `/${cfg.maxLevel}` : ""}${key === "companion" ? ` • ${t("total")} ${state.companions.length}` : ""}</div>
      <div class="item-meta">${t("gain")}: ${t(cfg.bonusKey)}</div>
      <div class="item-meta">${getUpgradeCurrentValue(key)}</div>
    `;
    el.shopItems.append(row);
  }
}

function sortInventoryByRarity(items) {
  return items.sort((a, b) => {
    if (b.rarity.index !== a.rarity.index) return b.rarity.index - a.rarity.index;
    return b.stats.dps - a.stats.dps;
  });
}

function renderInventoryTabs() {
  const tabs = [{ key: "all", label: t("all") }, ...EQUIP_SLOTS.map((slot) => ({ key: slot.key, label: getSlotLabel(slot.key) }))];
  el.inventoryTabs.innerHTML = "";

  tabs.forEach((tab) => {
    const button = document.createElement("button");
    button.className = `inv-tab ${state.inventoryFilter === tab.key ? "active" : ""}`;
    button.dataset.tab = tab.key;
    button.textContent = tab.label;
    el.inventoryTabs.append(button);
  });
}

function renderInventory() {
  el.equipmentSlots.innerHTML = "";
  for (const slot of EQUIP_SLOTS) {
    const item = state.equipment[slot.key];
    const row = document.createElement("div");
    row.className = "slot";
    row.innerHTML = item
      ? `<strong>${getSlotLabel(slot.key)}: <span class="rarity-${item.rarity.index}">${item.rarity.icon} ${item.emoji} ${getRarityName(item.rarity)}</span></strong>
         <div class="item-meta">+${item.stats.tap} ${t("tapWord")} • +${item.stats.dps} ${t("dpsWord")} • +${(item.stats.gold * 100).toFixed(1)}% ${t("goldWord")}</div>`
      : `<strong>${getSlotLabel(slot.key)}: ${t("empty")}</strong>`;
    el.equipmentSlots.append(row);
  }

  renderInventoryTabs();

  el.inventoryItems.innerHTML = "";
  if (!state.inventory.length) {
    el.inventoryItems.innerHTML = `<div class="inventory-item">${t("noItems")}</div>`;
    return;
  }

  const filtered = state.inventoryFilter === "all"
    ? [...state.inventory]
    : state.inventory.filter((item) => item.slot === state.inventoryFilter);

  const sortedItems = sortInventoryByRarity(filtered).slice(0, 40);

  sortedItems.forEach((item) => {
    const row = document.createElement("div");
    row.className = "inventory-item";
    row.innerHTML = `
      <div class="item-head">
        <strong class="rarity-${item.rarity.index}">${item.rarity.icon} ${item.emoji} ${getRarityName(item.rarity)}</strong>
        <button class="inv-equip" data-equip="${item.id}">${t("equip")} ${getSlotLabel(item.slot)}</button>
      </div>
      <div class="item-meta">+${item.stats.tap} ${t("tapWord")} • +${item.stats.dps} ${t("dpsWord")} • +${(item.stats.gold * 100).toFixed(1)}% ${t("goldWord")}</div>
    `;
    el.inventoryItems.append(row);
  });

  if (!sortedItems.length) {
    el.inventoryItems.innerHTML = `<div class="inventory-item">${t("noItemsTab")}</div>`;
  }
}

function renderCompanions() {
  el.companions.innerHTML = "";
  if (!state.companions.length) {
    el.companions.textContent = t("noCompanions");
    el.companionPower.textContent = t("companionPower", { value: "0" });
    return;
  }

  const playerDps = getPlayerDps();
  const totalDps = state.companions.reduce((sum, companion) => {
    return sum + getCompanionDps(companion, playerDps);
  }, 0);
  el.companionPower.textContent = t("companionPower", { value: totalDps.toFixed(1) });

  state.companions.forEach((companion, index) => {
    const span = document.createElement("span");
    span.className = "companion";
    span.dataset.companionIndex = String(index);
    const companionDps = getCompanionDps(companion, playerDps);
    span.textContent = `${companion.emoji} ${companionDps.toFixed(1)}${companion.isGolden ? " 👑" : ""}`;
    span.title = t("companionTooltip", { dps: companionDps.toFixed(1), seconds: (companion.attackIntervalMs / 1000).toFixed(2) });
    el.companions.append(span);
  });
}

function renderPrestige() {
  const can = canPrestige();
  const cost = getPrestigeCost();
  const canPay = state.prestige.shards >= cost;

  el.prestigeCurrency.textContent = formatNumber(state.prestige.shards);
  el.highestStage.textContent = state.highestStage;
  el.prestigeDamageBonus.textContent = `${getPrestigeDamageMultiplier().toFixed(2)}x`;
  el.prestigeGoldBonus.textContent = `${getPrestigeGoldMultiplier().toFixed(2)}x`;
  el.prestigeDropBonus.textContent = `${(getDropBonus() * 100).toFixed(1)}%`;
  el.prestigeCost.textContent = `${cost} 🔮`;

  el.prestigeConfirm.disabled = !can || !canPay;
  if (!can) {
    el.prestigeConfirm.textContent = t("needPrestige", { cost, have: formatNumber(state.prestige.shards) });
  } else if (!canPay) {
    el.prestigeConfirm.textContent = t("needPrestige", { cost, have: formatNumber(state.prestige.shards) });
  } else {
    el.prestigeConfirm.textContent = t("performPrestige", { cost });
  }

  el.prestigeButton.disabled = false;
}

function renderWave() {
  const wave = getWaveInfo();
  const primary = state.enemies.find((enemy) => enemy.isPrimary);
  const primaryHp = Math.max(0, primary?.hp ?? 0);
  const primaryMaxHp = Math.max(1, primary?.maxHp ?? 1);

  el.monsterType.textContent = wave.hasBoss ? t("waveBoss") : t("waveEnemy");
  el.monsterStage.textContent = t("waveStage", { stage: state.stage, alive: wave.alive.length, total: wave.total });
  el.hpText.textContent = `${formatNumber(primaryHp)} / ${formatNumber(primaryMaxHp)}`;
  const primaryPercent = Math.max(0, Math.min(100, (primaryHp / primaryMaxHp) * 100));
  el.hpFill.style.width = `${primaryPercent}%`;

  el.monsterField.innerHTML = "";
  state.enemies.forEach((enemy) => {
    if (enemy.hp <= 0) return;

    const btn = document.createElement("button");
    btn.className = `monster-button small ${enemy.isPrimary ? "primary" : ""} ${enemy.isBoss ? "boss" : ""}`;
    btn.type = "button";
    btn.dataset.attack = enemy.id;
    const hpPercent = Math.max(0, Math.min(100, (enemy.hp / enemy.maxHp) * 100));
    btn.title = `${enemy.isSilverChest ? t("chestTitle") : t("enemyTitle")} • ${t("attackTitle", { damage: getTapDamage().toFixed(1) })}`;
    btn.innerHTML = `
      <span class="monster-emoji">${enemy.emoji}</span>
      <span class="enemy-hp">${formatNumber(enemy.hp)} / ${formatNumber(enemy.maxHp)}</span>
      <span class="enemy-hp-track"><span class="enemy-hp-fill" style="width:${hpPercent}%"></span></span>
    `;
    el.monsterField.append(btn);
  });
}

function render() {
  const dps = getDps();

  el.hero.textContent = state.hero;
  el.stage.textContent = state.stage;
  el.gold.textContent = formatNumber(state.gold);
  el.tapDamage.textContent = formatNumber(getTapDamage());
  el.dps.textContent = formatNumber(dps);
  el.score.textContent = formatNumber(state.score);

  el.stageLabel.textContent = t("hudStage");
  el.goldLabel.textContent = t("hudGold");
  el.tapDamageLabel.textContent = t("hudTap");
  el.dpsLabel.textContent = t("hudDps");
  el.scoreLabel.textContent = t("hudScore");
  el.shopButton.textContent = t("shop");
  el.inventoryButton.textContent = t("inventory");
  el.prestigeButton.textContent = t("prestige");
  el.settingsButton.textContent = t("settings");
  el.heroTitle.textContent = t("heroTitle");
  el.heroSubtitle.textContent = t("heroSubtitle");
  el.shopTitle.textContent = t("shopTitle");
  el.shopGoldLabel.childNodes[0].textContent = `${t("shopGoldLabel")}: `;
  el.inventoryTitle.textContent = t("inventoryTitle");
  el.equippedTitle.textContent = t("equipped");
  el.backpackTitle.textContent = t("backpack");
  el.prestigeTitle.textContent = t("prestigeTitle");
  el.prestigeInfoText.textContent = t("prestigeInfo");
  el.prestigeCurrencyLabel.childNodes[0].textContent = `${t("prestigeCurrent")}: `;
  el.highestStageLabel.childNodes[0].textContent = `${t("highestStage")}: `;
  el.prestigeDamageLabel.childNodes[0].textContent = `${t("damageMultiplier")}: `;
  el.prestigeGoldLabel.childNodes[0].textContent = `${t("goldMultiplier")}: `;
  el.prestigeDropLabel.childNodes[0].textContent = `${t("dropBonus")}: `;
  el.prestigeCostLabel.childNodes[0].textContent = `${t("prestigeCostLabel")}: `;
  el.languageLabel.textContent = t("settingsLanguage");
  el.settingsTitle.textContent = t("settingsTitle");
  document.title = t("pageTitle");
  document.documentElement.lang = state.language;
  el.langFr.classList.toggle("active", state.language === "fr");
  el.langEn.classList.toggle("active", state.language === "en");

  renderWave();
  renderCompanions();
  renderShop();
  renderInventory();
  renderPrestige();

  const automationUnlocked = isAutomationUnlocked();
  el.automationToggle.disabled = !automationUnlocked;
  el.automationToggle.textContent = automationUnlocked
    ? t("autoState", { state: state.automationEnabled ? t("on") : t("off") })
    : t("autoLocked");
}

function isVisible(element) {
  return !element.classList.contains("hidden");
}

function renderCombat() {
  const dps = getDps();

  el.stage.textContent = state.stage;
  el.gold.textContent = formatNumber(state.gold);
  el.tapDamage.textContent = formatNumber(getTapDamage());
  el.dps.textContent = formatNumber(dps);
  el.score.textContent = formatNumber(state.score);

  renderWave();
  renderCompanions();

  if (isVisible(document.getElementById("shopPanel"))) {
    renderShop();
  }
  if (isVisible(document.getElementById("inventoryPanel"))) {
    renderInventory();
  }
  if (isVisible(document.getElementById("prestigePanel"))) {
    renderPrestige();
  }
}

function renderFull() {
  render();
}


function bindEvents() {
  let lastPointerAttack = 0;

  const triggerMonsterAttack = (targetEl) => {
    const attackId = targetEl?.dataset?.attack;
    if (!attackId) return;
    attack(attackId, getTapDamage(), false);
  };

  el.monsterField.addEventListener("pointerdown", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const attackTarget = target.closest("[data-attack]");
    if (!attackTarget) return;
    lastPointerAttack = Date.now();
    triggerMonsterAttack(attackTarget);
  });

  el.monsterField.addEventListener("click", (event) => {
    if (Date.now() - lastPointerAttack < 250) return;
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const attackTarget = target.closest("[data-attack]");
    if (!attackTarget) return;
    triggerMonsterAttack(attackTarget);
  });

  el.shopButton.addEventListener("click", () => {
    document.getElementById("shopPanel").classList.remove("hidden");
  });
  el.inventoryButton.addEventListener("click", () => {
    document.getElementById("inventoryPanel").classList.remove("hidden");
  });
  el.prestigeButton.addEventListener("click", () => {
    document.getElementById("prestigePanel").classList.remove("hidden");
  });
  el.settingsButton.addEventListener("click", () => {
    document.getElementById("settingsPanel").classList.remove("hidden");
  });

  let lastPanelPointerAction = 0;
  const handlePanelAction = (event, selector, callback, skipDedup = false) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!skipDedup && event.type === "click" && Date.now() - lastPanelPointerAction < 250) return;
    const actionTarget = target.closest(selector);
    if (!actionTarget) return;
    if (event.type === "pointerdown") {
      lastPanelPointerAction = Date.now();
      event.preventDefault();
    }
    callback(actionTarget);
  };

  ["pointerdown", "click"].forEach((eventType) => {
    el.shopItems.addEventListener(eventType, (event) => {
      handlePanelAction(event, "[data-buy]", (actionTarget) => {
        const key = actionTarget.dataset.buy;
        if (!key) return;
        buyUpgrade(key);
      });
    });

    el.inventoryTabs.addEventListener(eventType, (event) => {
      handlePanelAction(event, "[data-tab]", (actionTarget) => {
        const tabKey = actionTarget.dataset.tab;
        if (!tabKey) return;
        state.inventoryFilter = tabKey;
        renderInventory();
        scheduleSave();
      });
    });

    el.inventoryItems.addEventListener(eventType, (event) => {
      handlePanelAction(event, "[data-equip]", (actionTarget) => {
        const itemId = actionTarget.dataset.equip;
        if (!itemId) return;
        equipItem(itemId);
      });
    });

    document.body.addEventListener(eventType, (event) => {
      handlePanelAction(event, "[data-close]", (actionTarget) => {
        document.getElementById(actionTarget.dataset.close).classList.add("hidden");
      }, true);
    });
  });

  el.prestigeConfirm.addEventListener("click", doPrestige);

  el.automationToggle.addEventListener("click", () => {
    if (!isAutomationUnlocked()) return;
    state.automationEnabled = !state.automationEnabled;
    scheduleSave();
    renderFull();
  });

  el.langFr.addEventListener("click", () => {
    state.language = "fr";
    scheduleSave();
    renderFull();
  });

  el.langEn.addEventListener("click", () => {
    state.language = "en";
    scheduleSave();
    renderFull();
  });

  document.body.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.closest("button, .panel, .panel-content, a, input, select, textarea, [data-attack], [data-buy], [data-equip], [data-tab], [data-close]")) return;
    const primary = state.enemies.find((enemy) => enemy.isPrimary && enemy.hp > 0) || state.enemies.find((enemy) => enemy.hp > 0);
    if (!primary) return;
    attack(primary.id, getTapDamage(), false);
  });
}

function gameLoop() {
  const now = Date.now();
  runAutomation();
  const dps = getDps();
  if (dps > 0) {
    const randomTarget = randomFrom(getWaveInfo().alive);
    if (randomTarget) attack(randomTarget.id, dps / 5, true);
  }

  state.companions.forEach((companion, index) => {
    if (!companion.attackIntervalMs) {
      companion.attackIntervalMs = Math.floor(500 + Math.random() * 9500);
      companion.nextAttackAt = now + companion.attackIntervalMs;
    }

    if (!companion.nextAttackAt || now < companion.nextAttackAt) return;

    const alive = getWaveInfo().alive;
    if (!alive.length) return;

    const companionDps = getCompanionDps(companion);
    const hit = companionDps * (companion.attackIntervalMs / 1000);
    const killedEnemies = [];
    const target = randomFrom(alive);
    if (target && applyDamage(target, hit)) killedEnemies.push(target);
    rewardEnemyKills(killedEnemies);
    companion.nextAttackAt = now + companion.attackIntervalMs;

    const companionEl = el.companions.querySelector(`[data-companion-index="${index}"]`);
    if (companionEl) {
      companionEl.classList.add("attacking");
      setTimeout(() => companionEl.classList.remove("attacking"), 100);
    }

    if (!killedEnemies.length) {
      showEffect(randomFrom(FEEDBACK_EMOJIS));
    }
  });

  const primaryAlive = state.enemies.some((enemy) => enemy.isPrimary && enemy.hp > 0);
  if (!primaryAlive) {
    clearWave();
  } else {
    refillSecondaryEnemies();
  }
  renderCombat();
  flushSave();
}


if (!Array.isArray(state.enemies) || !state.enemies.length) {
  state.enemies = createEnemiesForStage(state.stage);
} else {
  state.enemies = state.enemies.map((enemy, index) => sanitizeEnemy(enemy, index));
  const hasPrimary = state.enemies.some((enemy) => enemy && enemy.isPrimary);
  if (!hasPrimary) {
    const firstAlive = state.enemies.find((enemy) => enemy.hp > 0);
    if (firstAlive) {
      firstAlive.isPrimary = true;
      firstAlive.isBoss = state.stage % 10 === 0;
    }
  }

  state.enemies.forEach((enemy) => {
    if (enemy.isPrimary) {
      enemy.isRespawnable = false;
      return;
    }
    enemy.isRespawnable = true;
  });

  refillSecondaryEnemies();
}

state.companions = state.companions.map((companion) => {
  const attackIntervalMs = companion.attackIntervalMs || Math.floor(500 + Math.random() * 9500);
  const playerDps = Math.max(1, getPlayerDps());
  const savedDps = Number(companion.dps || 0);
  const dpsMultiplier = companion.isGolden
    ? undefined
    : Number((companion.dpsMultiplier ?? Math.max(0.1, savedDps / playerDps)).toFixed(2));

  return {
    ...companion,
    isGolden: Boolean(companion.isGolden),
    dpsMultiplier,
    attackIntervalMs,
    nextAttackAt: companion.nextAttackAt || Date.now() + attackIntervalMs,
  };
});

bindEvents();
renderFull();
window.addEventListener("beforeunload", flushSave);
setInterval(gameLoop, 200);
setInterval(flushSave, 1000);
