const STORAGE_KEY = "emojiWarSave_v1";

const MONSTERS = GameCore.MONSTERS;
const HEROES = ["🧙", "🥷", "🧑‍🚀", "🤖", "🦊", "🧝", "🦸", "🧛"];
const FEEDBACK_EMOJIS = ["💥", "⚡"];
const SILVER_CHEST_CHANCE = GameCore.SILVER_CHEST_CHANCE;
const SILVER_CHEST_EMOJI = "🪙";



const defaultState = {
  hero: "🧙",
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
  equipment: { weapon: null, shield: null, boots: null, ring: null, gloves: null },
  inventory: [],
  inventoryFilter: "all",
  automationEnabled: false,
  language: "fr",
  prestige: {
    shards: 0,
    count: 0,
    essence: 0,
    talents: {},
    bossesDefeated: 0,
  },
  stats: {
    kills: 0,
    bosses: 0,
    clicks: 0,
    chests: 0,
    timePlayedSec: 0,
  },
  quests: {
    dateKey: "",
    list: [],
    completed: [],
  },
  achievements: [],
  offline: {
    lastSeenAt: Date.now(),
    snapshotDps: 0,
  },
  abilities: {
    nova: { level: 0, cooldownEndsAt: 0 },
    frenzy: { level: 0, cooldownEndsAt: 0, activeUntil: 0 },
    midas: { level: 0, cooldownEndsAt: 0, activeUntil: 0 },
    execute: { level: 0, cooldownEndsAt: 0 },
  },
  settings: {
    musicEnabled: false,
    musicVolume: 0.3,
    sfxEnabled: true,
    sfxVolume: 0.5,
    comboEnabled: true,
    autoAbilitiesEnabled: false,
    companionsCollapsed: false,
    reduceMotion: false,
    loreSeen: false,
    offlineEnabled: true,
  },
  hasPrestigedOnce: false,
};


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
    autoLocked: "🤖 Auto Boutique OFF",
    autoState: "🤖 Auto Boutique {state}",
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
    prestigeInfo: "Chaque boss vaincu donne 1 🟣. Dépensez 10 🟣 pour prestigier.",
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
    quests: "📜 Quêtes",
    questsTitle: "📜 Quêtes & Succès",
    dailyQuests: "Quêtes du jour",
    achievementsTitle: "🏆 Succès",
    questComplete: "Quête terminée !",
    achievementUnlocked: "Succès débloqué !",
    questReward: "Récompense : {gold}💰 + {essence}✨",
    questClaimed: "Réclamé ✓",
    questClaim: "Réclamer",
    quest_kills: "Éliminer {target} ennemis",
    quest_bosses: "Vaincre {target} boss",
    quest_clicks: "Cliquer {target} fois",
    quest_chests: "Ouvrir {target} coffres",
    quest_stages: "Atteindre le niveau {target}",
    quest_timeSec: "Jouer {target} secondes",
    ach_first_kill: "Premier sang",
    ach_slayer_100: "Tueur x100",
    ach_slayer_1000: "Tueur x1000",
    ach_boss_hunter: "Chasseur de boss",
    ach_boss_legend: "Légende des boss",
    ach_clicker_500: "Cliqueur aguerri",
    ach_clicker_5000: "Cliqueur fou",
    ach_stage_50: "Niveau 50",
    ach_stage_100: "Niveau 100",
    ach_first_prestige: "Premier prestige",
    ach_chest_10: "Collecteur de coffres",
    ach_time_3600: "1 heure de jeu",
    essenceLabel: "✨ Essence",
    essenceGainPreview: "Prestige donnera : +{value}✨",
    talentsTitle: "🌟 Talents",
    talentBuy: "Acheter ({cost}✨)",
    talentMaxed: "Max ✓",
    talent_dmgUp1: "Dégâts I",
    talent_dmgUp2: "Dégâts II",
    talent_dmgUp3: "Dégâts III",
    talent_goldUp1: "Or I",
    talent_goldUp2: "Or II",
    talent_dropUp: "Drop+",
    talent_critChance: "Chance crit",
    talent_critDamage: "Dégât crit",
    talent_offlineBoost: "Hors-ligne+",
    talent_companionPow: "Compagnon+",
    offlineWelcome: "👋 Bon retour !",
    offlineTime: "Absent {hours}h {minutes}m",
    offlineGold: "+{gold}💰 gagnés hors-ligne",
    offlineClaim: "Réclamer",
    offlineToggle: "💤 Progression hors-ligne",
    sfxLabel: "🔊 Effets sonores",
    sfxVolumeLabel: "🔉 Volume",
    reduceMotionLabel: "🚫 Réduire les animations",
    critText: "CRIT!",
    loreButtonLabel: "📖 Histoire du jeu",
    loreButton: "📘 Ouvrir",
    loreTitle: "📖 Bienvenue dans Emoji War",
    loreIntro: "Un portail a libéré une armée d'émojis corrompus. Vous êtes le gardien des royaumes emoji.",
    loreStory: "Chaque niveau vous oppose à une nouvelle vague. Tous les 10 niveaux, un boss tente de briser l'équilibre.",
    loreGoal: "Objectif : renforcer votre héros, invoquer des compagnons, accomplir les quêtes et débloquer des succès.",
    loreTips: "Astuce : le prestige réinitialise votre run, mais vous donne des bonus permanents puissants.",
    achievementReward: "Récompense : {gold}💰 + {essence}✨",
    abilitiesTitle: "✨ Aptitudes",
    novaName: "Nova",
    frenzyName: "Fureur",
    midasName: "Pluie de Midas",
    executeName: "Exécution",
    autoAbilities: "✨ Auto Aptitudes {state}",
    autoAbilitiesLocked: "🔒 Débloqué après le 1er prestige",
    abilitiesHelpTitle: "✨ Aide des aptitudes",
    abilitiesHelpNova: "💥 Nova : inflige un énorme burst de dégâts instantané à l'ennemi principal.",
    abilitiesHelpFrenzy: "✨ Fureur : augmente temporairement vos dégâts automatiques pendant quelques secondes.",
    abilitiesHelpMidas: "💰 Pluie de Midas : augmente fortement les gains d'or pendant une courte durée.",
    abilitiesHelpExecute: "🗡️ Exécution : élimine la cible principale sous un seuil de PV, sinon inflige un gros coup.",
    companionsHide: "Masquer",
    companionsShow: "Afficher",
    abilityReady: "PRÊT",
    abilityActive: "ACTIF {seconds}s",
    abilityCooldown: "Recharge: {seconds}s",
    abilityLevel: "Niv. {level}",
    abilityUpgrade: "Améliorer ({cost}💰)",
    abilityActivated: "{name} activée !",
    abilityAutoActivated: "⚙️ {name}",
    abilityNovaMeta: "{level} • x{power} • CD {cooldown}s",
    abilityFrenzyMeta: "{level} • x{power} • CD {cooldown}s • {duration}s",
    abilityMidasMeta: "{level} • x{power} or • CD {cooldown}s • {duration}s",
    abilityExecuteMeta: "{level} • seuil {threshold}% • x{power} • CD {cooldown}s",
    shopAbilitiesTitle: "✨ APTITUDES",
    shop_ability_nova_name: "💥 Améliorer Nova",
    shop_ability_frenzy_name: "✨ Améliorer Fureur",
    shop_ability_midas_name: "💰 Améliorer Pluie de Midas",
    shop_ability_execute_name: "🗡️ Améliorer Exécution",
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
    autoLocked: "🤖 Auto Shop OFF",
    autoState: "🤖 Auto Shop {state}",
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
    prestigeInfo: "Each defeated boss gives 1 🟣. Spend 10 🟣 to prestige.",
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
    quests: "📜 Quests",
    questsTitle: "📜 Quests & Achievements",
    dailyQuests: "Daily Quests",
    achievementsTitle: "🏆 Achievements",
    questComplete: "Quest complete!",
    achievementUnlocked: "Achievement unlocked!",
    questReward: "Reward: {gold}💰 + {essence}✨",
    questClaimed: "Claimed ✓",
    questClaim: "Claim",
    quest_kills: "Eliminate {target} enemies",
    quest_bosses: "Defeat {target} bosses",
    quest_clicks: "Click {target} times",
    quest_chests: "Open {target} chests",
    quest_stages: "Reach stage {target}",
    quest_timeSec: "Play {target} seconds",
    ach_first_kill: "First Blood",
    ach_slayer_100: "Slayer x100",
    ach_slayer_1000: "Slayer x1000",
    ach_boss_hunter: "Boss Hunter",
    ach_boss_legend: "Boss Legend",
    ach_clicker_500: "Dedicated Clicker",
    ach_clicker_5000: "Click Maniac",
    ach_stage_50: "Stage 50",
    ach_stage_100: "Stage 100",
    ach_first_prestige: "First Prestige",
    ach_chest_10: "Chest Collector",
    ach_time_3600: "1 Hour Played",
    essenceLabel: "✨ Essence",
    essenceGainPreview: "Prestige will grant: +{value}✨",
    talentsTitle: "🌟 Talents",
    talentBuy: "Buy ({cost}✨)",
    talentMaxed: "Max ✓",
    talent_dmgUp1: "Damage I",
    talent_dmgUp2: "Damage II",
    talent_dmgUp3: "Damage III",
    talent_goldUp1: "Gold I",
    talent_goldUp2: "Gold II",
    talent_dropUp: "Drop+",
    talent_critChance: "Crit Chance",
    talent_critDamage: "Crit Damage",
    talent_offlineBoost: "Offline+",
    talent_companionPow: "Companion+",
    offlineWelcome: "👋 Welcome back!",
    offlineTime: "Away for {hours}h {minutes}m",
    offlineGold: "+{gold}💰 earned offline",
    offlineClaim: "Claim",
    offlineToggle: "💤 Offline Progress",
    sfxLabel: "🔊 Sound Effects",
    sfxVolumeLabel: "🔉 Volume",
    reduceMotionLabel: "🚫 Reduce Animations",
    critText: "CRIT!",
    loreButtonLabel: "📖 Game lore",
    loreButton: "📘 Open",
    loreTitle: "📖 Welcome to Emoji War",
    loreIntro: "A portal unleashed a corrupted emoji army. You are the guardian of the emoji realms.",
    loreStory: "Each stage brings a new wave. Every 10 stages, a boss tries to break the balance.",
    loreGoal: "Goal: strengthen your hero, summon companions, complete quests, and unlock achievements.",
    loreTips: "Tip: prestige resets your run, but grants strong permanent bonuses.",
    achievementReward: "Reward: {gold}💰 + {essence}✨",
    abilitiesTitle: "✨ Abilities",
    novaName: "Nova",
    frenzyName: "Frenzy",
    midasName: "Midas Rain",
    executeName: "Execute",
    autoAbilities: "✨ Auto Abilities {state}",
    autoAbilitiesLocked: "🔒 Unlocks after 1st prestige",
    abilitiesHelpTitle: "✨ Ability help",
    abilitiesHelpNova: "💥 Nova: deals a huge instant burst of damage to the main enemy.",
    abilitiesHelpFrenzy: "✨ Frenzy: temporarily boosts your automatic damage for a few seconds.",
    abilitiesHelpMidas: "💰 Midas Rain: greatly boosts gold gains for a short duration.",
    abilitiesHelpExecute: "🗡️ Execute: kills the main target under a HP threshold, otherwise deals a heavy strike.",
    companionsHide: "Hide",
    companionsShow: "Show",
    abilityReady: "READY",
    abilityActive: "ACTIVE {seconds}s",
    abilityCooldown: "Cooldown: {seconds}s",
    abilityLevel: "Lvl {level}",
    abilityUpgrade: "Upgrade ({cost}💰)",
    abilityActivated: "{name} activated!",
    abilityAutoActivated: "⚙️ {name}",
    abilityNovaMeta: "{level} • x{power} • CD {cooldown}s",
    abilityFrenzyMeta: "{level} • x{power} • CD {cooldown}s • {duration}s",
    abilityMidasMeta: "{level} • x{power} gold • CD {cooldown}s • {duration}s",
    abilityExecuteMeta: "{level} • threshold {threshold}% • x{power} • CD {cooldown}s",
    shopAbilitiesTitle: "✨ ABILITIES",
    shop_ability_nova_name: "💥 Upgrade Nova",
    shop_ability_frenzy_name: "✨ Upgrade Frenzy",
    shop_ability_midas_name: "💰 Upgrade Midas Rain",
    shop_ability_execute_name: "🗡️ Upgrade Execute",
  },
};

const ACHIEVEMENT_REWARDS = {
  first_kill: { gold: 150, essence: 1 },
  slayer_100: { gold: 900, essence: 1 },
  slayer_1000: { gold: 5000, essence: 4 },
  boss_hunter: { gold: 2200, essence: 2 },
  boss_legend: { gold: 9000, essence: 6 },
  clicker_500: { gold: 750, essence: 1 },
  clicker_5000: { gold: 4200, essence: 4 },
  stage_50: { gold: 3000, essence: 2 },
  stage_100: { gold: 8500, essence: 5 },
  first_prestige: { gold: 2000, essence: 3 },
  chest_10: { gold: 2800, essence: 2 },
  time_3600: { gold: 2500, essence: 2 },
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

/* ---- AUDIO CONTROLLER ---- */
const AudioController = {
  ctx: null,
  ambianceNodes: [],
  isInit: false,

  init() {
    if (this.isInit) return;
    try {
      const CtxClass = window.AudioContext || window.webkitAudioContext;
      if (!CtxClass) return;
      this.ctx = new CtxClass();
      this.isInit = true;
      this.updateAmbiance();
    } catch (e) {
      console.warn("Audio init failed", e);
    }
  },

  resume() {
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    if (!this.ambianceNodes.length && state.settings.musicEnabled) {
      this.startAmbiance();
    }
  },

  playTone(freq, type, duration, volMult = 1) {
    if (!state.settings.sfxEnabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    const vol = state.settings.sfxVolume * volMult;
    gain.gain.setValueAtTime(vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

    osc.connect(gain).connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  },

  // SFX Presets
  playHit() { this.playTone(200 + Math.random() * 50, "triangle", 0.1, 0.4); },
  playCrit() {
    this.playTone(600, "square", 0.15, 0.5);
    setTimeout(() => this.playTone(800, "square", 0.2, 0.5), 50);
  },
  playGold() { this.playTone(1200, "sine", 0.1, 0.2); },
  playLevelUp() {
    this.playTone(440, "sine", 0.2);
    setTimeout(() => this.playTone(554, "sine", 0.2), 100);
    setTimeout(() => this.playTone(659, "sine", 0.3), 200);
  },
  playUnlock() { this.playLevelUp(); }, // Reuse for now

  // Ambiance (Procedural Drone)
  startAmbiance() {
    if (!this.ctx || this.ambianceNodes.length) return;
    try {
      const masterGain = this.ctx.createGain();
      masterGain.gain.value = state.settings.musicVolume * 0.15;
      masterGain.connect(this.ctx.destination);

      const osc1 = this.ctx.createOscillator();
      osc1.type = "triangle";
      osc1.frequency.value = 55; // A1
      osc1.connect(masterGain);
      osc1.start();

      const osc2 = this.ctx.createOscillator();
      osc2.type = "sine";
      osc2.frequency.value = 110; // A2
      osc2.style = "detune"; // decorative property
      osc2.detune.value = 4; // slight dissonance
      osc2.connect(masterGain);
      osc2.start();

      this.ambianceNodes = [osc1, osc2, masterGain];
    } catch (e) { console.error(e); }
  },

  stopAmbiance() {
    this.ambianceNodes.forEach(n => {
      try { n.stop && n.stop(); n.disconnect(); } catch (e) { }
    });
    this.ambianceNodes = [];
  },

  updateAmbiance() {
    if (state.settings.musicEnabled) {
      if (!this.ambianceNodes.length) this.startAmbiance();
      else if (this.ambianceNodes[2]) this.ambianceNodes[2].gain.value = state.settings.musicVolume * 0.15;
    } else {
      this.stopAmbiance();
    }
  }
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
  companionsToggle: document.getElementById("companionsToggle"),
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
  essenceValue: document.getElementById("essenceValue"),
  essenceGainPreview: document.getElementById("essenceGainPreview"),
  talentGrid: document.getElementById("talentGrid"),
  talentsTitle: document.getElementById("talentsTitle"),
  questsButton: document.getElementById("questsButton"),
  dailyQuestsList: document.getElementById("dailyQuestsList"),
  achievementsList: document.getElementById("achievementsList"),
  questsPanelTitle: document.getElementById("questsPanelTitle"),
  dailyQuestsTitle: document.getElementById("dailyQuestsTitle"),
  achievementsTitleEl: document.getElementById("achievementsTitle"),
  offlinePanel: document.getElementById("offlinePanel"),
  offlineTitle: document.getElementById("offlineTitle"),
  offlineTimeText: document.getElementById("offlineTimeText"),
  offlineGoldText: document.getElementById("offlineGoldText"),
  offlineClaim: document.getElementById("offlineClaim"),
  offlineOpenButton: document.getElementById("offlineOpenButton"),
  fxLayer: document.getElementById("fxLayer"),
  toastContainer: document.getElementById("toastContainer"),
  abilitiesTitle: document.getElementById("abilitiesTitle"),
  abilityNovaButton: document.getElementById("abilityNovaButton"),
  abilityNovaUpgrade: document.getElementById("abilityNovaUpgrade"),
  abilityNovaCooldownFill: document.getElementById("abilityNovaCooldownFill"),
  abilityNovaBadge: document.getElementById("abilityNovaBadge"),
  abilityNovaMeta: document.getElementById("abilityNovaMeta"),
  abilityFrenzyButton: document.getElementById("abilityFrenzyButton"),
  abilityFrenzyUpgrade: document.getElementById("abilityFrenzyUpgrade"),
  abilityFrenzyCooldownFill: document.getElementById("abilityFrenzyCooldownFill"),
  abilityFrenzyBadge: document.getElementById("abilityFrenzyBadge"),
  abilityFrenzyMeta: document.getElementById("abilityFrenzyMeta"),
  abilityMidasButton: document.getElementById("abilityMidasButton"),
  abilityMidasUpgrade: document.getElementById("abilityMidasUpgrade"),
  abilityMidasCooldownFill: document.getElementById("abilityMidasCooldownFill"),
  abilityMidasBadge: document.getElementById("abilityMidasBadge"),
  abilityMidasMeta: document.getElementById("abilityMidasMeta"),
  abilityExecuteButton: document.getElementById("abilityExecuteButton"),
  abilityExecuteUpgrade: document.getElementById("abilityExecuteUpgrade"),
  abilityExecuteCooldownFill: document.getElementById("abilityExecuteCooldownFill"),
  abilityExecuteBadge: document.getElementById("abilityExecuteBadge"),
  abilityExecuteMeta: document.getElementById("abilityExecuteMeta"),
  autoAbilitiesToggle: document.getElementById("autoAbilitiesToggle"),
  abilitiesHelpButton: document.getElementById("abilitiesHelpButton"),
  abilitiesHelpTitle: document.getElementById("abilitiesHelpTitle"),
  abilitiesHelpNova: document.getElementById("abilitiesHelpNova"),
  abilitiesHelpFrenzy: document.getElementById("abilitiesHelpFrenzy"),
  abilitiesHelpMidas: document.getElementById("abilitiesHelpMidas"),
  abilitiesHelpExecute: document.getElementById("abilitiesHelpExecute"),
  sfxToggle: document.getElementById("sfxToggle"),
  sfxVolume: document.getElementById("sfxVolume"),
  musicToggle: document.getElementById("musicToggle"),
  musicVolume: document.getElementById("musicVolume"),
  reduceMotionToggle: document.getElementById("reduceMotionToggle"),
  offlineToggle: document.getElementById("offlineToggle"),
  sfxLabel: document.getElementById("sfxLabel"),
  sfxVolumeLabel: document.getElementById("sfxVolumeLabel"),
  reduceMotionLabel: document.getElementById("reduceMotionLabel"),
  offlineToggleLabel: document.getElementById("offlineToggleLabel"),
  essenceLabelEl: document.getElementById("essenceLabel"),
  loreButtonLabel: document.getElementById("loreButtonLabel"),
  openLoreButton: document.getElementById("openLoreButton"),
  loreTitle: document.getElementById("loreTitle"),
  loreIntro: document.getElementById("loreIntro"),
  loreStory: document.getElementById("loreStory"),
  loreGoal: document.getElementById("loreGoal"),
  loreTips: document.getElementById("loreTips"),
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
      stats: { ...merged.stats, ...(parsed.stats || {}) },
      quests: { ...merged.quests, ...(parsed.quests || {}) },
      offline: { ...merged.offline, ...(parsed.offline || {}) },
      settings: { ...merged.settings, ...(parsed.settings || {}) },
      abilities: { ...merged.abilities, ...(parsed.abilities || {}) },
      achievements: Array.isArray(parsed.achievements) ? parsed.achievements : [],
      companions: Array.isArray(parsed.companions) ? parsed.companions : [],
      inventory: Array.isArray(parsed.inventory) ? parsed.inventory : [],
      enemies: Array.isArray(parsed.enemies) ? parsed.enemies : [],
      inventoryFilter: parsed.inventoryFilter || "all",
      automationEnabled: Boolean(parsed.automationEnabled),
      language: parsed.language === "en" ? "en" : "fr",
    };

    // Ensure settings
    loaded.settings.musicEnabled = loaded.settings.musicEnabled ?? false;
    loaded.settings.musicVolume = loaded.settings.musicVolume ?? 0.3;
    loaded.settings.comboEnabled = loaded.settings.comboEnabled ?? true;
    loaded.settings.offlineEnabled = loaded.settings.offlineEnabled ?? true;
    loaded.settings.autoAbilitiesEnabled = loaded.settings.autoAbilitiesEnabled ?? false;
    loaded.settings.companionsCollapsed = loaded.settings.companionsCollapsed ?? false;
    loaded.settings.loreSeen = loaded.settings.loreSeen ?? false;

    loaded.hasPrestigedOnce = Boolean(parsed.hasPrestigedOnce || ((loaded.prestige && loaded.prestige.count) || 0) >= 1);

    // Ensure prestige sub-fields have defaults
    loaded.prestige.essence = loaded.prestige.essence || 0;
    loaded.prestige.talents = loaded.prestige.talents || {};
    loaded.prestige.bossesDefeated = loaded.prestige.bossesDefeated || 0;

    // Ensure quests list is array
    if (!Array.isArray(loaded.quests.list)) loaded.quests.list = [];
    if (!Array.isArray(loaded.quests.completed)) loaded.quests.completed = [];

    if (!loaded.enemies.length && parsed.monster) {
      loaded.enemies = [parsed.monster];
    }

    migrateState(loaded);

    return loaded;
  } catch {
    return structuredClone(defaultState);
  }
}

function migrateState(nextState) {
  if (!nextState.abilities || typeof nextState.abilities !== "object") {
    nextState.abilities = structuredClone(defaultState.abilities);
  }
  const defs = GameCore.getAbilityDefs();
  Object.keys(defs).forEach((abilityId) => {
    const saved = nextState.abilities[abilityId] || {};
    nextState.abilities[abilityId] = {
      level: Math.max(0, Number(saved.level || 0)),
      cooldownEndsAt: Math.max(0, Number(saved.cooldownEndsAt || 0)),
      activeUntil: Math.max(0, Number(saved.activeUntil || 0)),
    };
  });

  if (!nextState.settings || typeof nextState.settings !== "object") {
    nextState.settings = structuredClone(defaultState.settings);
  }
  nextState.settings.offlineEnabled = nextState.settings.offlineEnabled !== false;
  nextState.settings.autoAbilitiesEnabled = Boolean(nextState.settings.autoAbilitiesEnabled);
  nextState.settings.companionsCollapsed = Boolean(nextState.settings.companionsCollapsed);
  nextState.hasPrestigedOnce = Boolean(nextState.hasPrestigedOnce || ((nextState.prestige && nextState.prestige.count) || 0) >= 1);
}



let saveQueued = false;

function scheduleSave() {
  saveQueued = true;
}


function saveState() {
  state.offline.lastSeenAt = Date.now();
  state.offline.snapshotDps = getDps();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function flushSave() {
  if (!saveQueued) return;
  saveState();
  saveQueued = false;
}

function getMonsterMaxHp(stage = state.stage) {
  return GameCore.getMonsterMaxHp(stage);
}

function getExtraEnemyCount() {
  return state.upgrades.enemyCountLevel;
}

function getTapDamage(nowMs = Date.now()) {
  const base = 1 + state.upgrades.tapLevel * SHOP_CONFIG.tap.basePower;
  const gear = getEquipmentBonuses().tap;
  const buffMult = GameCore.getActiveBuffMultipliers(state, nowMs).damageMult;
  return (base + gear) * getPrestigeDamageMultiplier() * buffMult;
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

function getDps(nowMs = Date.now()) {
  const companionDps = getCompanionTotalDps();
  const buffMult = GameCore.getActiveBuffMultipliers(state, nowMs).damageMult;
  return (getPlayerDps() + companionDps) * buffMult;
}

function getGoldMultiplier(nowMs = Date.now()) {
  const upgradeMult = 1 + state.upgrades.goldLevel * SHOP_CONFIG.gold.basePower;
  const gearMult = 1 + getEquipmentBonuses().gold;
  const buffMult = GameCore.getGoldMultiplierFromActiveBuffs(state, nowMs);
  return upgradeMult * gearMult * getPrestigeGoldMultiplier() * buffMult;
}

function getPrestigeDamageMultiplier() {
  const shardBonus = state.prestige.shards * 0.06;
  const essenceBonus = (state.prestige.essence || 0) * 0.01;
  const talentBonus = GameCore.getTalentBonus(state.prestige.talents, "damage");
  return 1 + shardBonus + essenceBonus + talentBonus;
}

function getPrestigeGoldMultiplier() {
  const shardBonus = state.prestige.shards * 0.05;
  const essenceBonus = (state.prestige.essence || 0) * 0.008;
  const talentBonus = GameCore.getTalentBonus(state.prestige.talents, "gold");
  return 1 + shardBonus + essenceBonus + talentBonus;
}

function getDropBonus() {
  const base = state.prestige.shards * 0.002;
  const talentBonus = GameCore.getTalentBonus(state.prestige.talents, "drop");
  return base + talentBonus;
}

function getBaseCritChance() {
  return 0.05 + GameCore.getTalentBonus(state.prestige.talents, "crit");
}

function getBaseCritMult() {
  return 3;
}

function getCompanionTalentBonus() {
  return 1 + GameCore.getTalentBonus(state.prestige.talents, "companion");
}

function getOfflineFactor() {
  return GameCore.OFFLINE_GOLD_FACTOR + GameCore.getTalentBonus(state.prestige.talents, "offline");
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
  return GameCore.getShopCost(type, state.upgrades[SHOP_CONFIG[type].key], SHOP_CONFIG);
}

function getCompanionDps(companion, playerDps = getPlayerDps()) {
  if (companion.isGolden) return playerDps * 20;
  var multiplier = companion.dpsMultiplier ?? 1;
  return playerDps * multiplier;
}



function getRandomCompanionMultiplier() {
  return Number((0.6 + Math.random() * 1.6).toFixed(2));
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function createEnemy(stage, isBoss = false) {
  return GameCore.createEnemy(stage, isBoss);
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

/* ---- COMBO SYSTEM ---- */
const ComboSystem = {
  count: 0,
  timer: null,

  add() {
    if (!state.settings.comboEnabled) return;
    this.count++;
    this.updateUI();

    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => this.reset(), 1200);
  },

  reset() {
    this.count = 0;
    this.updateUI();
  },

  getMultiplier() {
    if (!state.settings.comboEnabled || this.count < 5) return 1;
    // Max +25% damage at 50 combo
    const bonus = Math.min(0.25, (this.count * 0.005));
    return 1 + bonus;
  },

  updateUI() {
    const container = document.getElementById("comboContainer");
    if (!state.settings.comboEnabled) {
      container.classList.add("hidden");
      return;
    }

    if (this.count > 0) {
      container.classList.remove("hidden");
      document.getElementById("comboValue").textContent = `x${this.getMultiplier().toFixed(2)}`;

      const fill = document.getElementById("comboFill");
      fill.style.transition = "none";
      fill.style.width = "100%";
      // Trigger reflow
      void fill.offsetWidth;
      fill.style.transition = "width 1.2s linear";
      fill.style.width = "0%";
    } else {
      container.classList.add("hidden");
    }
  }
};

/* ---- QUESTS SYSTEM ---- */
function initDailyQuests() {
  const today = new Date().toISOString().split("T")[0];
  if (state.quests.dateKey !== today) {
    state.quests.dateKey = today;
    state.quests.list = GameCore.generateDailyQuests(today, 0);
    state.quests.completed = [];
    scheduleSave();
  }
}

function trackStat(type, amount = 1) {
  if (!state.stats) state.stats = {};
  state.stats[type] = (state.stats[type] || 0) + amount;

  // Check quests
  if (state.quests && state.quests.list) {
    const oldQuests = state.quests.list;
    state.quests.list = GameCore.updateQuestProgress(oldQuests, state.stats);

    // Check for completions
    state.quests.list.forEach((q, i) => {
      const oldQ = oldQuests[i];
      const becameDone = q.progress >= q.target && (!oldQ || oldQ.progress < oldQ.target);
      if (!becameDone || q.claimed) return;

      const res = GameCore.claimQuest(state.quests.list, q.id);
      if (!res.success) return;

      state.quests.list = res.newQuests;
      state.gold += res.reward.gold;
      state.prestige.essence = (state.prestige.essence || 0) + res.reward.essence;
      if (!state.quests.completed.includes(q.id)) state.quests.completed.push(q.id);
      showToast(`${t("questComplete")}: ${q.desc || q.type}`);
      showToast(t("questReward", { gold: res.reward.gold, essence: res.reward.essence }));
      AudioController.playUnlock();
      scheduleSave();
    });
  }

  // Check achievements
  const newUnlocks = GameCore.checkAchievements(state.stats, state.achievements);
  if (newUnlocks.length > 0) {
    newUnlocks.forEach((ach) => {
      state.achievements.push(ach.id);
      showToast(`${t("achievementUnlocked")} ${ach.badge}`);
      const reward = ACHIEVEMENT_REWARDS[ach.id];
      if (reward) {
        state.gold += reward.gold;
        state.prestige.essence = (state.prestige.essence || 0) + reward.essence;
        showToast(t("achievementReward", { gold: reward.gold, essence: reward.essence }));
      }
      AudioController.playUnlock();
      scheduleSave();
    });
  }
}

function createEnemiesForStage(stage) {
  return GameCore.createEnemiesForStage(stage, getExtraEnemyCount());
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
    state.prestige.bossesDefeated = (state.prestige.bossesDefeated || 0) + 1;
    trackStat("bosses", 1);
  }
  maybeDropLoot(Boolean(primary?.isBoss));
  state.stage += 1;
  state.highestStage = Math.max(state.highestStage, state.stage);
  state.enemies = createEnemiesForStage(state.stage);
  showEffect(`+${formatNumber(goldGain)}💰`);
  scheduleSave();
}

function maybeDropLoot(isBoss) {
  if (!isBoss) return;
  const slotDef = randomFrom(EQUIP_SLOTS);
  const item = GameCore.generateItem(slotDef.key, state.stage, true, RARITIES, EQUIP_POOLS);
  state.inventory.unshift(item);
  showEffect(`${t("lootFound")} ${item.emoji}${item.rarity.icon}`);
  scheduleSave();
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
  return GameCore.getKillGold(enemy, state.stage, getGoldMultiplier());
}

function rewardEnemyKills(killedEnemies) {
  if (!killedEnemies.length) return;
  const goldGain = killedEnemies.reduce((sum, enemy) => sum + getKillGold(enemy), 0);
  state.gold += goldGain;

  trackStat("kills", killedEnemies.length);
  killedEnemies.forEach((e) => {
    if (e.isSilverChest) trackStat("chests", 1);
    if (e.isBoss) trackStat("bosses", 1);
  });

  const foundChest = killedEnemies.some((enemy) => enemy.isSilverChest);
  if (foundChest) AudioController.playUnlock();
  else AudioController.playGold();

  showEffect(foundChest ? t("silverChestGold", { gold: formatNumber(goldGain) }) : `+${formatNumber(goldGain)}${randomFrom(FEEDBACK_EMOJIS)}`);
}

function attack(enemyId, amount, fromAuto = false) {
  const mainTarget = getEnemyById(enemyId) || state.enemies.find((enemy) => enemy.hp > 0);
  if (!mainTarget) return;

  // Crit roll for manual clicks
  let finalAmount = amount;
  let isCrit = false;

  if (!fromAuto) {
    trackStat("clicks", 1);
    ComboSystem.add(); // Feed combo

    // Apply Combo Multiplier to manual clicks
    finalAmount *= ComboSystem.getMultiplier();

    const crit = GameCore.rollCrit(Math.random, getBaseCritChance());
    if (crit.isCrit) {
      finalAmount *= getBaseCritMult();
      isCrit = true;
    }

    // Resume audio context if needed
    AudioController.resume();
  }

  const killedEnemies = [];
  if (applyDamage(mainTarget, finalAmount)) killedEnemies.push(mainTarget);

  rewardEnemyKills(killedEnemies);

  // FX & Audio
  if (!fromAuto) {
    if (isCrit) {
      spawnFloatingText(`${t("critText")} ${formatNumber(finalAmount)}`, true);
      AudioController.playCrit();
    } else {
      // Show combo count in floating text if high
      const combo = ComboSystem.count;
      const text = combo > 5 ? `${formatNumber(finalAmount)} (x${ComboSystem.getMultiplier().toFixed(2)})` : formatNumber(finalAmount);
      spawnFloatingText(text, false);
      AudioController.playHit();
    }
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
  return 10;
}

function doPrestige() {
  if (!canPrestige()) return;
  const cost = getPrestigeCost();
  if (state.prestige.shards < cost) return;

  // Use GameCore for the reset — preserves essence, talents, stats, settings
  const newState = GameCore.applyPrestige(state, cost);

  // Add a golden companion as reward
  const attackIntervalMs = Math.floor(800 + Math.random() * 1800);
  newState.companions.push({
    emoji: "🌟",
    dps: 0,
    attackIntervalMs,
    nextAttackAt: Date.now() + attackIntervalMs,
    isGolden: true,
  });

  // Regenerate enemies for the new stage
  newState.enemies = createEnemiesForStage(newState.stage);

  // Apply the new state
  Object.assign(state, newState);
  state.hasPrestigedOnce = true;

  scheduleSave();
  renderFull();
}

function buyTalent(talentKey) {
  const currentLevel = (state.prestige.talents[talentKey] || 0);
  const cost = GameCore.getTalentCost(talentKey, currentLevel);
  if (cost < 0) return; // maxed
  if ((state.prestige.essence || 0) < cost) return;
  state.prestige.essence -= cost;
  state.prestige.talents[talentKey] = currentLevel + 1;
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

function activateAbility(abilityId, nowMs = Date.now(), fromAuto = false) {
  const res = GameCore.activateAbility(state, abilityId, nowMs);
  if (!res.effect) {
    if (!fromAuto) {
      const remainingMs = GameCore.getCooldownRemainingMs(state.abilities[abilityId], nowMs);
      showToast(t("abilityCooldown", { seconds: Math.ceil(remainingMs / 1000) }));
    }
    return false;
  }

  state = res.newState;
  if (res.effect.type === "damage") {
    const baseDamage = Math.max(1, getTapDamage(nowMs));
    const damageAmount = baseDamage * res.effect.multiplier;
    const targets = res.effect.targets === "all"
      ? state.enemies.filter((enemy) => enemy.hp > 0)
      : [state.enemies.find((enemy) => enemy.hp > 0)].filter(Boolean);

    const killedEnemies = [];
    targets.forEach((enemy) => {
      if (applyDamage(enemy, damageAmount)) killedEnemies.push(enemy);
    });

    rewardEnemyKills(killedEnemies);
    spawnFloatingText(`NOVA 💥 ${formatNumber(damageAmount)}`, true);
    AudioController.playCrit();
  } else if (res.effect.type === "execute") {
    const primary = state.enemies.find((enemy) => enemy.isPrimary && enemy.hp > 0);
    const killedEnemies = [];
    if (primary) {
      const hpRatio = primary.maxHp > 0 ? (primary.hp / primary.maxHp) : 1;
      if (hpRatio <= res.effect.thresholdPct) {
        if (applyDamage(primary, primary.hp)) killedEnemies.push(primary);
        spawnFloatingText("EXECUTE ☠️", true);
      } else {
        const fallback = Math.max(1, getTapDamage(nowMs)) * res.effect.fallbackDamageMultiplier;
        if (applyDamage(primary, fallback)) killedEnemies.push(primary);
        spawnFloatingText(`EXECUTE ⚔️ ${formatNumber(fallback)}`, false);
      }
      rewardEnemyKills(killedEnemies);
    }
  }

  const abilityName = t(`${abilityId}Name`);
  if (fromAuto) {
    showToast(t("abilityAutoActivated", { name: abilityName }), "⚙️");
  } else {
    showToast(t("abilityActivated", { name: abilityName }), "✨");
  }

  const primaryAlive = state.enemies.some((enemy) => enemy.isPrimary && enemy.hp > 0);
  if (!primaryAlive) clearWave();
  else refillSecondaryEnemies();

  scheduleSave();
  renderCombat();
  return true;
}

function upgradeAbility(abilityId) {
  const nextState = GameCore.upgradeAbility(state, abilityId);
  if (nextState === state) return;
  state = nextState;
  scheduleSave();
  renderFull();
}

function getAbilityNameKey(abilityId) {
  return `${abilityId}Name`;
}

function getAbilityShopLabelKey(abilityId) {
  return `shop_ability_${abilityId}_name`;
}

function renderAbilityCard(abilityId, refs, now) {
  const abilityState = state.abilities[abilityId] || { level: 0, cooldownEndsAt: 0, activeUntil: 0 };
  const def = GameCore.getAbilityDefs()[abilityId];
  if (!def) return;
  const cooldownSec = GameCore.getAbilityCooldownSec(abilityId, abilityState.level, state);
  const remainingMs = GameCore.getCooldownRemainingMs(abilityState, now);
  const isReady = GameCore.isAbilityReady(abilityState, now);
  const ratio = Math.max(0, Math.min(1, remainingMs / (cooldownSec * 1000)));
  const upgradeCost = GameCore.getAbilityUpgradeCost(abilityId, abilityState.level);

  refs.button.disabled = !isReady;
  refs.button.textContent = t(getAbilityNameKey(abilityId));
  refs.fill.style.width = `${Math.round(ratio * 100)}%`;

  const isActiveBuff = def.kind === "buff" && (abilityState.activeUntil || 0) > now;
  if (isActiveBuff) {
    refs.badge.textContent = t("abilityActive", { seconds: Math.ceil((abilityState.activeUntil - now) / 1000) });
    refs.badge.classList.remove("ready");
    refs.badge.classList.add("active");
  } else {
    refs.badge.textContent = isReady ? t("abilityReady") : `${Math.ceil(remainingMs / 1000)}s`;
    refs.badge.classList.toggle("ready", isReady);
    refs.badge.classList.remove("active");
  }

  const levelLabel = t("abilityLevel", { level: abilityState.level });
  if (abilityId === "nova") {
    const power = GameCore.getAbilityDamageMultiplier("nova", abilityState.level, state).toFixed(1);
    refs.meta.textContent = t("abilityNovaMeta", { level: levelLabel, power, cooldown: cooldownSec });
  } else if (abilityId === "frenzy") {
    const power = GameCore.getAbilityBuffMultiplier("frenzy", abilityState.level).toFixed(1);
    const duration = GameCore.getAbilityDefs().frenzy.durationSec;
    refs.meta.textContent = t("abilityFrenzyMeta", { level: levelLabel, power, cooldown: cooldownSec, duration });
  } else if (abilityId === "midas") {
    const power = GameCore.getAbilityBuffMultiplier("midas", abilityState.level).toFixed(2);
    const duration = GameCore.getAbilityDefs().midas.durationSec;
    refs.meta.textContent = t("abilityMidasMeta", { level: levelLabel, power, cooldown: cooldownSec, duration });
  } else if (abilityId === "execute") {
    const threshold = Math.round(GameCore.getExecuteThresholdPct(abilityState.level) * 100);
    const power = GameCore.getExecuteFallbackDamageMultiplier(abilityState.level).toFixed(1);
    refs.meta.textContent = t("abilityExecuteMeta", { level: levelLabel, threshold, power, cooldown: cooldownSec });
  }

  if (refs.upgrade) {
    refs.upgrade.textContent = t("abilityUpgrade", { cost: formatNumber(upgradeCost) });
    refs.upgrade.disabled = !GameCore.canUpgradeAbility(state, abilityId);
  }
}

function renderAbilities() {
  if (!el.abilityNovaButton) return;
  const now = Date.now();
  el.abilitiesTitle.textContent = t("abilitiesTitle");
  if (el.abilitiesHelpTitle) el.abilitiesHelpTitle.textContent = t("abilitiesHelpTitle");
  if (el.abilitiesHelpNova) el.abilitiesHelpNova.textContent = t("abilitiesHelpNova");
  if (el.abilitiesHelpFrenzy) el.abilitiesHelpFrenzy.textContent = t("abilitiesHelpFrenzy");
  if (el.abilitiesHelpMidas) el.abilitiesHelpMidas.textContent = t("abilitiesHelpMidas");
  if (el.abilitiesHelpExecute) el.abilitiesHelpExecute.textContent = t("abilitiesHelpExecute");

  renderAbilityCard("midas", {
    button: el.abilityMidasButton,
    upgrade: el.abilityMidasUpgrade,
    fill: el.abilityMidasCooldownFill,
    badge: el.abilityMidasBadge,
    meta: el.abilityMidasMeta,
  }, now);

  renderAbilityCard("frenzy", {
    button: el.abilityFrenzyButton,
    upgrade: el.abilityFrenzyUpgrade,
    fill: el.abilityFrenzyCooldownFill,
    badge: el.abilityFrenzyBadge,
    meta: el.abilityFrenzyMeta,
  }, now);

  renderAbilityCard("execute", {
    button: el.abilityExecuteButton,
    upgrade: el.abilityExecuteUpgrade,
    fill: el.abilityExecuteCooldownFill,
    badge: el.abilityExecuteBadge,
    meta: el.abilityExecuteMeta,
  }, now);

  renderAbilityCard("nova", {
    button: el.abilityNovaButton,
    upgrade: el.abilityNovaUpgrade,
    fill: el.abilityNovaCooldownFill,
    badge: el.abilityNovaBadge,
    meta: el.abilityNovaMeta,
  }, now);

  const unlocked = GameCore.isAutoAbilitiesUnlocked(state);
  el.autoAbilitiesToggle.disabled = !unlocked;
  el.autoAbilitiesToggle.textContent = unlocked
    ? t("autoAbilities", { state: state.settings.autoAbilitiesEnabled ? t("on") : t("off") })
    : t("autoAbilitiesLocked");
}

function maybeAutoCastAbility(nowMs) {
  if (!state.automationEnabled || !state.settings.autoAbilitiesEnabled || !GameCore.isAutoAbilitiesUnlocked(state)) return;
  const primary = state.enemies.find((enemy) => enemy.isPrimary && enemy.hp > 0);
  for (const abilityId of GameCore.ABILITY_ORDER) {
    const abilityState = state.abilities[abilityId];
    if (!abilityState || !GameCore.isAbilityReady(abilityState, nowMs)) continue;

    if (abilityId === "midas" && (abilityState.activeUntil || 0) > nowMs) continue;
    if (abilityId === "frenzy" && (abilityState.activeUntil || 0) > nowMs) continue;

    if (abilityId === "execute") {
      if (!primary) continue;
      const threshold = GameCore.getExecuteThresholdPct(abilityState.level || 0);
      const ratio = primary.maxHp > 0 ? primary.hp / primary.maxHp : 1;
      if (ratio > threshold) continue;
    }

    activateAbility(abilityId, nowMs, true);
    break;
  }
}

function formatNumber(num) {
  return GameCore.formatNumber(num);
}

/* ---- FX Layer: floating damage numbers ---- */

function spawnFloatingText(text, isCrit) {
  if (state.settings.reduceMotion) return;
  const span = document.createElement("span");
  span.className = "fx-float" + (isCrit ? " crit" : "");
  span.textContent = text;
  // Random horizontal position near center
  span.style.left = (30 + Math.random() * 40) + "%";
  span.style.top = (30 + Math.random() * 20) + "%";
  el.fxLayer.appendChild(span);
  span.addEventListener("animationend", () => span.remove());
}

/* ---- WebAudio SFX ---- */

let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return null; }
  }
  return audioCtx;
}

function playTone(freq, duration, type = "square") {
  if (!state.settings.sfxEnabled) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = state.settings.sfxVolume * 0.15;
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}

function playHitSound() { playTone(440, 0.06); }
function playCritSound() { playTone(880, 0.1, "sawtooth"); playTone(1100, 0.08, "square"); }
function playLevelUpSound() { playTone(660, 0.08); playTone(880, 0.12); }

/* ---- Toast notifications ---- */

function showToast(text, badge = "") {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = (badge ? `<span class="toast-badge">${badge}</span>` : "") + text;
  el.toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}


/* ---- Offline gains ---- */

let pendingOffline = null;

function processOfflineGains() {
  if (!state.settings.offlineEnabled) return;
  if (!state.offline.lastSeenAt) return;
  const gains = GameCore.computeOfflineGains(state.offline, Date.now(), {
    OFFLINE_CAP_SECONDS: GameCore.OFFLINE_CAP_SECONDS,
    OFFLINE_GOLD_FACTOR: getOfflineFactor(),
  });
  if (gains.seconds >= 60 && gains.gold > 0) {
    pendingOffline = gains;
  }
  updateOfflineOpenButton();
}

function showOfflineModal() {
  if (!pendingOffline) return;
  const hours = Math.floor(pendingOffline.seconds / 3600);
  const minutes = Math.floor((pendingOffline.seconds % 3600) / 60);
  el.offlineTitle.textContent = t("offlineWelcome");
  el.offlineTimeText.textContent = t("offlineTime", { hours, minutes });
  el.offlineGoldText.textContent = t("offlineGold", { gold: formatNumber(pendingOffline.gold) });
  el.offlineClaim.textContent = t("offlineClaim");
  el.offlinePanel.classList.remove("hidden");
  updateOfflineOpenButton();
}

function claimOffline() {
  if (!pendingOffline) return;
  state.gold += pendingOffline.gold;
  pendingOffline = null;
  el.offlinePanel.classList.add("hidden");
  updateOfflineOpenButton();
  scheduleSave();
  renderFull();
}

function updateOfflineOpenButton() {
  if (!el.offlineOpenButton) return;
  if (!pendingOffline) {
    el.offlineOpenButton.classList.add("hidden");
    return;
  }
  el.offlineOpenButton.classList.remove("hidden");
  el.offlineOpenButton.textContent = `💤 ${t("offlineClaim")} ${formatNumber(pendingOffline.gold)}💰`;
}

function getVisiblePanelId() {
  const priority = ["offlinePanel", "abilitiesHelpPanel", "lorePanel", "settingsPanel", "questsPanel", "prestigePanel", "inventoryPanel", "shopPanel"];
  return priority.find((panelId) => {
    const panel = document.getElementById(panelId);
    return panel && !panel.classList.contains("hidden");
  });
}

function closeTopVisiblePanel() {
  const panelId = getVisiblePanelId();
  if (!panelId) return false;
  document.getElementById(panelId)?.classList.add("hidden");
  return true;
}

function setupPanelsDismissBehavior() {
  const panels = document.querySelectorAll(".panel");
  panels.forEach((panel) => {
    panel.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
      if (event.target === panel) panel.classList.add("hidden");
    });
    panel.addEventListener("click", (event) => {
      event.stopPropagation();
      if (event.target === panel) panel.classList.add("hidden");
    });
  });
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
  const cfg = SHOP_CONFIG[key];
  const level = state.upgrades[cfg.key];
  if (key === "tap") return `${t("current")}: ${getTapDamage().toFixed(1)} ${t("tapPerClick")}`;
  if (key === "dps") return `${t("current")}: ${getPlayerDps().toFixed(1)} ${t("autoDps")}`;
  if (key === "gold") return `${t("current")}: +${((getGoldMultiplier() - 1) * 100).toFixed(1)}% ${t("goldWord")}`;
  if (key === "companion") return `${t("current")}: ${getCompanionTotalDps().toFixed(1)} ${t("companionsDps")}`;
  if (key === "enemyCount") return `${t("current")}: ${level} / ${cfg.maxLevel}`;
  return "";
}

function isAutomationUnlocked() {
  return true;
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
  const upgradeEntries = Object.keys(SHOP_CONFIG)
    .map((key) => {
      const cfg = SHOP_CONFIG[key];
      const level = state.upgrades[cfg.key];
      if (cfg.maxLevel && level >= cfg.maxLevel) return null;
      return { key, cost: getShopCost(key) };
    })
    .filter(Boolean);

  const abilityEntries = GameCore.ABILITY_ORDER.map((abilityId) => {
    const currentLevel = state.abilities?.[abilityId]?.level || 0;
    return {
      abilityId,
      cost: GameCore.getAbilityUpgradeCost(abilityId, currentLevel),
    };
  });

  const entries = [...upgradeEntries, ...abilityEntries].sort((a, b) => a.cost - b.cost);

  if (!entries.length) return false;
  const cheapest = entries[0];
  if (state.gold < cheapest.cost) return false;
  if (cheapest.abilityId) {
    upgradeAbility(cheapest.abilityId);
  } else {
    buyUpgrade(cheapest.key);
  }
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

  const abilitiesTitle = document.createElement("h3");
  abilitiesTitle.className = "shop-subtitle";
  abilitiesTitle.textContent = t("shopAbilitiesTitle");
  el.shopItems.append(abilitiesTitle);

  GameCore.ABILITY_ORDER.forEach((abilityId) => {
    const abilityState = state.abilities[abilityId] || { level: 0 };
    const level = abilityState.level || 0;
    const cost = GameCore.getAbilityUpgradeCost(abilityId, level);
    const cooldownNow = GameCore.getAbilityCooldownSec(abilityId, level, state);
    const cooldownNext = GameCore.getAbilityCooldownSec(abilityId, level + 1, state);
    const row = document.createElement("div");
    row.className = "shop-item";
    const labelKey = getAbilityShopLabelKey(abilityId);
    let power;
    if (abilityId === "nova") {
      power = `x${GameCore.getAbilityDamageMultiplier("nova", level, state).toFixed(1)} → x${GameCore.getAbilityDamageMultiplier("nova", level + 1, state).toFixed(1)}`;
    } else if (abilityId === "frenzy") {
      power = `x${GameCore.getAbilityBuffMultiplier("frenzy", level).toFixed(1)} → x${GameCore.getAbilityBuffMultiplier("frenzy", level + 1).toFixed(1)}`;
    } else if (abilityId === "midas") {
      power = `x${GameCore.getAbilityBuffMultiplier("midas", level).toFixed(2)} → x${GameCore.getAbilityBuffMultiplier("midas", level + 1).toFixed(2)}`;
    } else {
      const nowThreshold = Math.round(GameCore.getExecuteThresholdPct(level) * 100);
      const nextThreshold = Math.round(GameCore.getExecuteThresholdPct(level + 1) * 100);
      power = `${nowThreshold}% → ${nextThreshold}% • x${GameCore.getExecuteFallbackDamageMultiplier(level).toFixed(1)} → x${GameCore.getExecuteFallbackDamageMultiplier(level + 1).toFixed(1)}`;
    }

    row.innerHTML = `
      <div class="item-head">
        <strong>${t(labelKey)}</strong>
        <button class="shop-buy" data-ability-upgrade="${abilityId}" ${state.gold < cost ? "disabled" : ""}>${t("buy")} ${formatNumber(cost)}💰</button>
      </div>
      <div class="item-meta">${t("level")} ${level}</div>
      <div class="item-meta">CD ${cooldownNow}s → ${cooldownNext}s</div>
      <div class="item-meta">${power}</div>
    `;
    el.shopItems.append(row);
  });
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
  el.companions.classList.toggle("hidden-list", state.settings.companionsCollapsed);
  if (!state.companions.length) {
    el.companionPower.textContent = t("noCompanions");
    return;
  }

  // Group companions by type/emoji to avoid clutter? 
  // User asked for "renderCompanions... afficher chaque companion (emoji + DPS)" and "animation CSS".
  // Let's render individual elements as per request.

  state.companions.forEach((companion, index) => {
    const div = document.createElement("div");
    div.className = "companion-item";
    if (companion.isGolden) div.classList.add("golden");
    div.id = `comp-${index}`;
    const dps = getCompanionDps(companion, getPlayerDps());
    div.title = `${formatNumber(dps)} DPS`;
    div.innerHTML = `<span>${companion.emoji}</span><small class="companion-dps">${formatNumber(dps)} DPS</small>`;

    el.companions.appendChild(div);
  });

  el.companionPower.textContent = t("companionPower", { value: formatNumber(getCompanionTotalDps()) });
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

  // Essence display
  el.essenceValue.textContent = formatNumber(state.prestige.essence || 0);
  const previewGain = GameCore.computeEssenceGain(state.highestStage, state.prestige.bossesDefeated || 0, state.prestige.count || 0);
  el.essenceGainPreview.textContent = t("essenceGainPreview", { value: previewGain });

  el.prestigeConfirm.disabled = !can || !canPay;
  if (!canPay) {
    el.prestigeConfirm.textContent = t("needPrestige", { cost, have: formatNumber(state.prestige.shards) });
  } else {
    el.prestigeConfirm.textContent = t("performPrestige", { cost });
  }

  el.prestigeButton.disabled = false;

  // Talent grid
  el.talentsTitle.textContent = t("talentsTitle");
  el.talentGrid.innerHTML = "";
  const talentKeys = Object.keys(GameCore.TALENTS);
  talentKeys.forEach((key) => {
    const def = GameCore.TALENTS[key];
    const lvl = state.prestige.talents[key] || 0;
    const talentCost = GameCore.getTalentCost(key, lvl);
    const isMaxed = talentCost < 0;
    const canBuy = !isMaxed && (state.prestige.essence || 0) >= talentCost;
    const card = document.createElement("div");
    card.className = "talent-card";
    card.innerHTML = `
      <span class="talent-name">${t("talent_" + key)}</span>
      <span class="talent-info">${t("level")} ${lvl}/${def.max} • +${(def.effect * 100).toFixed(0)}%/lvl</span>
      <button class="talent-buy ${isMaxed ? "maxed" : ""}" data-talent="${key}" ${(!canBuy && !isMaxed) ? "disabled" : ""} ${isMaxed ? "disabled" : ""}>
        ${isMaxed ? t("talentMaxed") : t("talentBuy", { cost: talentCost })}
      </button>
    `;
    el.talentGrid.appendChild(card);
  });
}


function getQuestStatValue(type) {
  if (!state.stats) return 0;
  return state.stats[type] || 0;
}

function renderQuests() {
  el.dailyQuestsList.innerHTML = "";
  if (!state.quests.list || !state.quests.list.length) {
    el.dailyQuestsList.innerHTML = '<div class="quest-item">No quests available</div>';
    return;
  }
  state.quests.list.forEach((q) => {
    const done = q.claimed;
    const progress = q.progress;
    const pct = Math.min(100, (progress / q.target) * 100);
    const row = document.createElement("div");
    row.className = "quest-item" + (done ? " completed" : "");
    row.innerHTML = `
      <div class="quest-header">
        <span>${t("quest_" + q.type, { target: q.target })}</span>
        <span>${done ? t("questClaimed") : `${Math.min(progress, q.target)}/${q.target}`}</span>
      </div>
      <div class="quest-progress-track"><div class="quest-progress-fill" style="width:${pct}%"></div></div>
      <div class="quest-reward">${t("questReward", { gold: q.rewardGold, essence: q.rewardEssence })}</div>
    `;
    el.dailyQuestsList.appendChild(row);
  });
}

function renderAchievements() {
  el.achievementsList.innerHTML = "";
  GameCore.ACHIEVEMENTS.forEach((ach) => {
    const unlocked = state.achievements.includes(ach.id);
    const row = document.createElement("div");
    row.className = "achievement-item" + (unlocked ? "" : " locked");
    row.innerHTML = `
      <span class="ach-badge">${ach.badge}</span>
      <div class="ach-info">
        <div class="ach-reward">${t("achievementReward", { gold: ACHIEVEMENT_REWARDS[ach.id]?.gold || 0, essence: ACHIEVEMENT_REWARDS[ach.id]?.essence || 0 })}</div>
        <div class="ach-name">${t("ach_" + ach.id)}</div>
        <div class="ach-desc">${ach.stat}: ${ach.threshold}</div>
      </div>
      <span>${unlocked ? "✅" : "🔒"}</span>
    `;
    el.achievementsList.appendChild(row);
  });
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
    btn.title = `${enemy.isSilverChest ? t("chestTitle") : t("enemyTitle")} • ${t("attackTitle", { damage: getTapDamage(Date.now()).toFixed(1) })}`;
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
  el.tapDamage.textContent = formatNumber(getTapDamage(Date.now()));
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
  el.questsButton.textContent = t("quests");
  el.settingsButton.textContent = t("settings");
  el.heroTitle.textContent = t("heroTitle");
  el.heroSubtitle.textContent = t("heroSubtitle");
  el.companionsToggle.textContent = state.settings.companionsCollapsed ? t("companionsShow") : t("companionsHide");
  el.shopTitle.textContent = t("shopTitle");
  el.shopGoldLabel.childNodes[0].textContent = `${t("shopGoldLabel")}: `;
  el.inventoryTitle.textContent = t("inventoryTitle");
  el.equippedTitle.textContent = t("equipped");
  el.backpackTitle.textContent = t("backpack");
  el.prestigeTitle.textContent = t("prestigeTitle");
  el.prestigeInfoText.textContent = t("prestigeInfo");
  el.prestigeCurrencyLabel.childNodes[0].textContent = `${t("prestigeCurrent")}: `;
  el.essenceLabelEl.childNodes[0].textContent = `${t("essenceLabel")}: `;
  el.highestStageLabel.childNodes[0].textContent = `${t("highestStage")}: `;
  el.prestigeDamageLabel.childNodes[0].textContent = `${t("damageMultiplier")}: `;
  el.prestigeGoldLabel.childNodes[0].textContent = `${t("goldMultiplier")}: `;
  el.prestigeDropLabel.childNodes[0].textContent = `${t("dropBonus")}: `;
  el.prestigeCostLabel.childNodes[0].textContent = `${t("prestigeCostLabel")}: `;
  el.languageLabel.textContent = t("settingsLanguage");
  el.settingsTitle.textContent = t("settingsTitle");
  el.sfxLabel.textContent = t("sfxLabel");
  el.sfxVolumeLabel.textContent = t("sfxVolumeLabel");
  el.reduceMotionLabel.textContent = t("reduceMotionLabel");
  el.offlineToggleLabel.textContent = t("offlineToggle");
  el.loreButtonLabel.textContent = t("loreButtonLabel");
  el.openLoreButton.textContent = t("loreButton");
  el.loreTitle.textContent = t("loreTitle");
  el.loreIntro.textContent = t("loreIntro");
  el.loreStory.textContent = t("loreStory");
  el.loreGoal.textContent = t("loreGoal");
  el.loreTips.textContent = t("loreTips");
  el.questsPanelTitle.textContent = t("questsTitle");
  el.dailyQuestsTitle.textContent = t("dailyQuests");
  el.achievementsTitleEl.textContent = t("achievementsTitle");
  document.title = t("pageTitle");
  document.documentElement.lang = state.language;
  el.langFr.classList.toggle("active", state.language === "fr");
  el.langEn.classList.toggle("active", state.language === "en");

  // Sync settings toggles
  el.sfxToggle.checked = state.settings.sfxEnabled;
  el.sfxVolume.value = Math.round(state.settings.sfxVolume * 100);
  el.musicToggle.checked = state.settings.musicEnabled;
  el.musicVolume.value = Math.round(state.settings.musicVolume * 100);
  el.reduceMotionToggle.checked = state.settings.reduceMotion;
  el.offlineToggle.checked = state.settings.offlineEnabled;
  document.body.classList.toggle("reduce-motion", state.settings.reduceMotion);

  renderWave();
  renderCompanions();
  renderShop();
  renderInventory();
  renderPrestige();
  renderQuests();
  renderAchievements();
  renderAbilities();
  updateOfflineOpenButton();

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
  el.tapDamage.textContent = formatNumber(getTapDamage(Date.now()));
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
  renderAbilities();
}

function renderFull() {
  render();
}


function bindEvents() {
  setupPanelsDismissBehavior();
  let lastPointerAttack = 0;

  const triggerMonsterAttack = (targetEl) => {
    const attackId = targetEl?.dataset?.attack;
    if (!attackId) return;
    attack(attackId, getTapDamage(Date.now()), false)
  };

  el.monsterField.addEventListener("pointerdown", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (getVisiblePanelId()) return;
    const attackTarget = target.closest("[data-attack]");
    if (!attackTarget) return;
    lastPointerAttack = Date.now();
    triggerMonsterAttack(attackTarget);
  });

  el.monsterField.addEventListener("click", (event) => {
    if (Date.now() - lastPointerAttack < 250) return;
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (getVisiblePanelId()) return;
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
  el.questsButton.addEventListener("click", () => {
    document.getElementById("questsPanel").classList.remove("hidden");
  });
  el.openLoreButton.addEventListener("click", () => {
    document.getElementById("lorePanel").classList.remove("hidden");
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
      handlePanelAction(event, "[data-ability-upgrade]", (actionTarget) => {
        const abilityId = actionTarget.dataset.abilityUpgrade;
        if (!abilityId) return;
        upgradeAbility(abilityId);
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

    el.talentGrid.addEventListener(eventType, (event) => {
      handlePanelAction(event, "[data-talent]", (actionTarget) => {
        const talentKey = actionTarget.dataset.talent;
        if (!talentKey) return;
        buyTalent(talentKey);
      });
    });

    document.addEventListener(eventType, (event) => {
      handlePanelAction(event, "[data-close]", (actionTarget) => {
        document.getElementById(actionTarget.dataset.close).classList.add("hidden");
      }, true);
    }, true);
  });

  el.prestigeConfirm.addEventListener("click", doPrestige);

  const toggleSettings = (key) => {
    state.settings[key] = !state.settings[key];
    if (key === "musicEnabled") AudioController.updateAmbiance();
    // if key === comboEnabled -> ComboSystem.updateUI() called implicitly via getter? No, updateUI checks settings.
    if (key === "comboEnabled") ComboSystem.updateUI();
    document.body.classList.toggle("reduce-motion", state.settings.reduceMotion);
    scheduleSave();
    renderFull();
  };

  el.sfxToggle.addEventListener("change", () => toggleSettings("sfxEnabled"));
  el.musicToggle.addEventListener("change", () => toggleSettings("musicEnabled"));
  el.reduceMotionToggle.addEventListener("change", () => toggleSettings("reduceMotion"));
  el.offlineToggle.addEventListener("change", () => toggleSettings("offlineEnabled"));
  el.offlineClaim?.addEventListener("click", claimOffline);
  el.offlineOpenButton?.addEventListener("click", showOfflineModal);

  el.sfxVolume.addEventListener("input", (e) => {
    state.settings.sfxVolume = Number(e.target.value) / 100;
    scheduleSave();
  });

  el.musicVolume.addEventListener("input", (e) => {
    state.settings.musicVolume = Number(e.target.value) / 100;
    AudioController.updateAmbiance();
    scheduleSave();
  });

  el.automationToggle.addEventListener("click", () => {
    if (!isAutomationUnlocked()) return;
    state.automationEnabled = !state.automationEnabled;
    scheduleSave();
    renderFull();
  });

  el.abilityNovaButton?.addEventListener("click", () => activateAbility("nova"));
  el.abilityNovaUpgrade?.addEventListener("click", () => upgradeAbility("nova"));
  el.abilityFrenzyButton?.addEventListener("click", () => activateAbility("frenzy"));
  el.abilityFrenzyUpgrade?.addEventListener("click", () => upgradeAbility("frenzy"));
  el.abilityMidasButton?.addEventListener("click", () => activateAbility("midas"));
  el.abilityMidasUpgrade?.addEventListener("click", () => upgradeAbility("midas"));
  el.abilityExecuteButton?.addEventListener("click", () => activateAbility("execute"));
  el.abilityExecuteUpgrade?.addEventListener("click", () => upgradeAbility("execute"));
  el.autoAbilitiesToggle?.addEventListener("click", () => {
    if (!GameCore.isAutoAbilitiesUnlocked(state)) return;
    state.settings.autoAbilitiesEnabled = !state.settings.autoAbilitiesEnabled;
    scheduleSave();
    renderAbilities();
  });

  el.companionsToggle?.addEventListener("click", () => {
    state.settings.companionsCollapsed = !state.settings.companionsCollapsed;
    scheduleSave();
    renderFull();
  });

  el.abilitiesHelpButton?.addEventListener("click", () => {
    document.getElementById("abilitiesHelpPanel")?.classList.remove("hidden");
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
    // Init audio on first interaction
    if (!AudioController.isInit) AudioController.init();
    AudioController.resume();

    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (getVisiblePanelId()) return;
    if (target.closest("button, .panel, .panel-content, a, input, select, textarea, [data-attack], [data-buy], [data-equip], [data-tab], [data-close]")) return;
    const primary = state.enemies.find((enemy) => enemy.isPrimary && enemy.hp > 0) || state.enemies.find((enemy) => enemy.hp > 0);
    if (!primary) return;
    attack(primary.id, getTapDamage(Date.now()), false)
  });

  document.addEventListener("keydown", (event) => {
    if (event.repeat) return;
    const key = event.key.toLowerCase();
    if (key === "escape") {
      if (closeTopVisiblePanel()) event.preventDefault();
      return;
    }

    const target = event.target;
    if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;

    if (key === "q") activateAbility("nova");
    if (key === "w") activateAbility("frenzy");
    if (key === "e") activateAbility("midas");
    if (key === "r") activateAbility("execute");
  });
}

function gameLoop() {
  const now = Date.now();
  runAutomation();
  maybeAutoCastAbility(now);
  const dps = getDps(now);
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

    const companionEl = document.getElementById(`comp-${index}`);
    if (companionEl) {
      companionEl.classList.add("attacking");
      setTimeout(() => companionEl.classList.remove("attacking"), 280);
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
initDailyQuests();
processOfflineGains();
renderFull();
if (!state.settings.loreSeen) {
  document.getElementById("lorePanel").classList.remove("hidden");
  state.settings.loreSeen = true;
  scheduleSave();
}
showOfflineModal();
window.addEventListener("beforeunload", saveState);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) saveState();
});
setInterval(gameLoop, 200);
setInterval(flushSave, 1000);

// End of script
