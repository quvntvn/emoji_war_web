const STORAGE_KEY = "emojiWarSave_v1";

const MONSTERS = ["👾", "🐉", "🕷️", "🦂", "🐺", "🦍", "🐍", "💀"];
const HEROES = ["🧙", "🥷", "🧑‍🚀", "🤖", "🦊", "🧝", "🦸", "🧛"];
const FEEDBACK_EMOJIS = ["💥", "✨"];

const SHOP_CONFIG = {
  tap: { name: "👆 Tap Mastery", baseCost: 15, basePower: 1, key: "tapLevel" },
  dps: { name: "⚙️ Auto DPS", baseCost: 25, basePower: 1, key: "dpsLevel" },
  gold: { name: "💰 Gold Gain", baseCost: 40, basePower: 0.1, key: "goldLevel" },
  companion: { name: "👥 Summon Companion", baseCost: 70, key: "companionLevel" },
};

const EQUIP_SLOTS = [
  { key: "weapon", label: "⚔️ Weapon" },
  { key: "shield", label: "🛡️ Shield" },
  { key: "boots", label: "👢 Boots" },
  { key: "ring", label: "💍 Ring" },
  { key: "gloves", label: "🧤 Gloves" },
];

const EQUIP_POOLS = {
  weapon: ["🗡️", "⚔️", "🔨", "🪓", "🏹"],
  shield: ["🛡️", "🪖", "🧿"],
  boots: ["👢", "🥾", "🩴"],
  ring: ["💍", "📿", "💠"],
  gloves: ["🧤", "🥊", "🧱"],
};

const RARITIES = [
  { icon: "⚪️", name: "Common", mult: 1 },
  { icon: "🟢", name: "Uncommon", mult: 1.35 },
  { icon: "🔵", name: "Rare", mult: 1.8 },
  { icon: "🟣", name: "Epic", mult: 2.45 },
  { icon: "🟠", name: "Legendary", mult: 3.3 },
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
  monster: {
    emoji: MONSTERS[0],
    hp: 10,
    maxHp: 10,
    isBoss: false,
  },
  upgrades: {
    tapLevel: 0,
    dpsLevel: 0,
    goldLevel: 0,
    companionLevel: 0,
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
  prestige: {
    shards: 0,
    count: 0,
  },
};

let state = loadState();

const el = {
  stage: document.getElementById("stageValue"),
  gold: document.getElementById("goldValue"),
  dps: document.getElementById("dpsValue"),
  score: document.getElementById("scoreValue"),
  monsterType: document.getElementById("monsterType"),
  monsterStage: document.getElementById("monsterStage"),
  monsterBtn: document.getElementById("monsterButton"),
  monsterEmoji: document.getElementById("monsterEmoji"),
  hpFill: document.getElementById("hpFill"),
  hpText: document.getElementById("monsterHpText"),
  effects: document.getElementById("combatEffects"),
  hero: document.querySelector(".hero"),
  companions: document.getElementById("companionList"),
  shopItems: document.getElementById("shopItems"),
  inventoryItems: document.getElementById("inventoryItems"),
  equipmentSlots: document.getElementById("equipmentSlots"),
  prestigeCurrency: document.getElementById("prestigeCurrency"),
  highestStage: document.getElementById("highestStage"),
  prestigeDamageBonus: document.getElementById("prestigeDamageBonus"),
  prestigeGoldBonus: document.getElementById("prestigeGoldBonus"),
  prestigeDropBonus: document.getElementById("prestigeDropBonus"),
  prestigeConfirm: document.getElementById("prestigeConfirm"),
  prestigeButton: document.getElementById("prestigeButton"),
};

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultState);
  try {
    const parsed = JSON.parse(raw);
    const merged = structuredClone(defaultState);
    return {
      ...merged,
      ...parsed,
      upgrades: { ...merged.upgrades, ...parsed.upgrades },
      equipment: { ...merged.equipment, ...parsed.equipment },
      prestige: { ...merged.prestige, ...parsed.prestige },
      companions: Array.isArray(parsed.companions) ? parsed.companions : [],
      inventory: Array.isArray(parsed.inventory) ? parsed.inventory : [],
      monster: { ...merged.monster, ...parsed.monster },
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getMonsterMaxHp(stage = state.stage) {
  return Math.max(1, Math.floor(10 * Math.pow(1.15, stage - 1)));
}

function getTapDamage() {
  const base = 1 + state.upgrades.tapLevel * SHOP_CONFIG.tap.basePower;
  const gear = getEquipmentBonuses().tap;
  return (base + gear) * getPrestigeDamageMultiplier();
}

function getDps() {
  const upgradeDps = state.upgrades.dpsLevel * SHOP_CONFIG.dps.basePower;
  const companionDps = state.companions.reduce((sum, c) => sum + c.dps, 0);
  const gear = getEquipmentBonuses().dps;
  return (upgradeDps + companionDps + gear) * getPrestigeDamageMultiplier();
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
  return Math.floor(cfg.baseCost * Math.pow(1.18, lvl));
}

function getCompanionDps() {
  const base = 1 + state.stage * 0.05;
  return Number(base.toFixed(2));
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function createMonsterForStage(stage) {
  const isBoss = stage % 10 === 0;
  const maxHp = Math.floor(getMonsterMaxHp(stage) * (isBoss ? 4.5 : 1));
  return {
    emoji: randomFrom(MONSTERS),
    hp: maxHp,
    maxHp,
    isBoss,
  };
}

function killMonster() {
  const baseGold = Math.floor(6 * Math.pow(1.13, state.stage));
  const goldGain = Math.floor(baseGold * getGoldMultiplier() * (state.monster.isBoss ? 1.8 : 1));
  state.gold += goldGain;
  state.score += Math.floor(state.stage * (state.monster.isBoss ? 20 : 8));
  maybeDropLoot();
  state.stage += 1;
  state.highestStage = Math.max(state.highestStage, state.stage);
  state.monster = createMonsterForStage(state.stage);
  showEffect(`+${formatNumber(goldGain)}💰`);
  saveState();
}

function maybeDropLoot() {
  const baseChance = state.monster.isBoss ? 1 : 0.2;
  const chance = Math.min(1, baseChance + getDropBonus());
  if (Math.random() <= chance) {
    const slotDef = randomFrom(EQUIP_SLOTS);
    const item = generateItem(slotDef.key, state.stage, state.monster.isBoss);
    state.inventory.unshift(item);
    showEffect(`Loot ${item.emoji}${item.rarity.icon}`);
    saveState();
  }
}

function generateItem(slotKey, stage, isBoss) {
  const rarityRoll = Math.random();
  let rarityIndex = 0;
  const table = isBoss
    ? [0.2, 0.45, 0.72, 0.9, 1]
    : [0.5, 0.78, 0.93, 0.985, 1];
  while (rarityRoll > table[rarityIndex]) rarityIndex += 1;
  const rarity = RARITIES[rarityIndex];
  const power = (1 + stage * 0.08) * rarity.mult;
  return {
    id: `${Date.now()}_${Math.random()}`,
    slot: slotKey,
    slotLabel: EQUIP_SLOTS.find((s) => s.key === slotKey).label,
    emoji: randomFrom(EQUIP_POOLS[slotKey]),
    rarity: { ...rarity, index: rarityIndex },
    stats: {
      tap: Number((power * 0.35).toFixed(2)),
      dps: Number((power * 0.22).toFixed(2)),
      gold: Number((power * 0.012).toFixed(3)),
    },
  };
}

function attack(amount, fromAuto = false) {
  if (state.monster.hp <= 0) return;
  state.monster.hp = Math.max(0, state.monster.hp - amount);
  if (!fromAuto) {
    el.monsterBtn.classList.add("hit");
    setTimeout(() => el.monsterBtn.classList.remove("hit"), 90);
    showEffect(randomFrom(FEEDBACK_EMOJIS));
  }
  if (state.monster.hp <= 0) killMonster();
  render();
}

function buyUpgrade(type) {
  const cost = getShopCost(type);
  if (state.gold < cost) return;
  state.gold -= cost;
  state.upgrades[SHOP_CONFIG[type].key] += 1;

  if (type === "companion") {
    const companion = {
      emoji: randomFrom(COMPANION_POOL),
      dps: getCompanionDps(),
    };
    state.companions.push(companion);
  }

  saveState();
  render();
}

function equipItem(itemId) {
  const idx = state.inventory.findIndex((it) => it.id === itemId);
  if (idx === -1) return;
  const item = state.inventory[idx];
  const prev = state.equipment[item.slot];
  state.equipment[item.slot] = item;
  state.inventory.splice(idx, 1);
  if (prev) state.inventory.unshift(prev);
  saveState();
  render();
}

function canPrestige() {
  return state.highestStage >= 50;
}

function doPrestige() {
  if (!canPrestige()) return;
  const gained = Math.floor(state.highestStage / 10);
  if (gained <= 0) return;
  state.prestige.shards += gained;
  state.prestige.count += 1;

  state.stage = 1;
  state.gold = 0;
  state.score = 0;
  state.monster = createMonsterForStage(1);
  state.upgrades = { tapLevel: 0, dpsLevel: 0, goldLevel: 0, companionLevel: 0 };
  state.companions = [];
  state.inventory = [];
  state.equipment = { weapon: null, shield: null, boots: null, ring: null, gloves: null };

  saveState();
  render();
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

function renderShop() {
  const entries = ["tap", "dps", "gold", "companion"];
  el.shopItems.innerHTML = "";
  for (const key of entries) {
    const cfg = SHOP_CONFIG[key];
    const cost = getShopCost(key);
    const level = state.upgrades[cfg.key];
    const row = document.createElement("div");
    row.className = "shop-item";
    row.innerHTML = `
      <div class="item-head">
        <strong>${cfg.name}</strong>
        <button class="shop-buy" data-buy="${key}" ${state.gold < cost ? "disabled" : ""}>Buy ${formatNumber(cost)}💰</button>
      </div>
      <div class="item-meta">Level ${level}${key === "companion" ? ` • Total ${state.companions.length}` : ""}</div>
    `;
    el.shopItems.append(row);
  }
}

function renderInventory() {
  el.equipmentSlots.innerHTML = "";
  for (const slot of EQUIP_SLOTS) {
    const item = state.equipment[slot.key];
    const row = document.createElement("div");
    row.className = "slot";
    row.innerHTML = item
      ? `<strong>${slot.label}: <span class="rarity-${item.rarity.index}">${item.rarity.icon} ${item.emoji} ${item.rarity.name}</span></strong>
         <div class="item-meta">+${item.stats.tap} tap • +${item.stats.dps} dps • +${(item.stats.gold * 100).toFixed(1)}% gold</div>`
      : `<strong>${slot.label}: Empty</strong>`;
    el.equipmentSlots.append(row);
  }

  el.inventoryItems.innerHTML = "";
  if (!state.inventory.length) {
    el.inventoryItems.innerHTML = `<div class="inventory-item">No items yet. Defeat monsters and bosses!</div>`;
    return;
  }

  state.inventory.slice(0, 40).forEach((item) => {
    const row = document.createElement("div");
    row.className = "inventory-item";
    row.innerHTML = `
      <div class="item-head">
        <strong class="rarity-${item.rarity.index}">${item.rarity.icon} ${item.emoji} ${item.rarity.name}</strong>
        <button class="inv-equip" data-equip="${item.id}">Equip ${item.slotLabel}</button>
      </div>
      <div class="item-meta">+${item.stats.tap} tap • +${item.stats.dps} dps • +${(item.stats.gold * 100).toFixed(1)}% gold</div>
    `;
    el.inventoryItems.append(row);
  });
}

function renderCompanions() {
  el.companions.innerHTML = "";
  if (!state.companions.length) {
    el.companions.textContent = "No companions yet. Buy one in the shop!";
    return;
  }
  state.companions.forEach((c) => {
    const span = document.createElement("span");
    span.className = "companion";
    span.textContent = c.emoji;
    span.title = `+${c.dps} DPS`;
    el.companions.append(span);
  });
}

function renderPrestige() {
  const can = canPrestige();
  el.prestigeCurrency.textContent = formatNumber(state.prestige.shards);
  el.highestStage.textContent = state.highestStage;
  el.prestigeDamageBonus.textContent = `${getPrestigeDamageMultiplier().toFixed(2)}x`;
  el.prestigeGoldBonus.textContent = `${getPrestigeGoldMultiplier().toFixed(2)}x`;
  el.prestigeDropBonus.textContent = `${(getDropBonus() * 100).toFixed(1)}%`;
  el.prestigeConfirm.disabled = !can;
  el.prestigeConfirm.textContent = can
    ? `Perform Prestige (+${Math.floor(state.highestStage / 10)}🔮)`
    : "Reach Stage 50 to unlock";
  el.prestigeButton.disabled = !can;
}

function render() {
  const tapDamage = getTapDamage();
  const dps = getDps();

  el.hero.textContent = state.hero;
  el.stage.textContent = state.stage;
  el.gold.textContent = formatNumber(state.gold);
  el.dps.textContent = formatNumber(dps);
  el.score.textContent = formatNumber(state.score);

  el.monsterType.textContent = state.monster.isBoss ? "👑 Boss" : "Normal";
  el.monsterStage.textContent = `Stage ${state.stage}`;
  el.monsterEmoji.textContent = state.monster.emoji;
  el.hpText.textContent = `${formatNumber(state.monster.hp)} / ${formatNumber(state.monster.maxHp)}`;
  el.hpFill.style.width = `${(state.monster.hp / state.monster.maxHp) * 100}%`;
  el.monsterBtn.title = `Tap for ${tapDamage.toFixed(1)} damage`;

  renderCompanions();
  renderShop();
  renderInventory();
  renderPrestige();
}

function bindEvents() {
  el.monsterBtn.addEventListener("click", () => attack(getTapDamage(), false));

  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById(btn.dataset.close).classList.add("hidden");
    });
  });

  document.getElementById("shopButton").addEventListener("click", () => {
    document.getElementById("shopPanel").classList.remove("hidden");
  });
  document.getElementById("inventoryButton").addEventListener("click", () => {
    document.getElementById("inventoryPanel").classList.remove("hidden");
  });
  document.getElementById("prestigeButton").addEventListener("click", () => {
    document.getElementById("prestigePanel").classList.remove("hidden");
  });

  el.shopItems.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const key = target.dataset.buy;
    if (!key) return;
    buyUpgrade(key);
  });

  el.inventoryItems.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const itemId = target.dataset.equip;
    if (!itemId) return;
    equipItem(itemId);
  });

  el.prestigeConfirm.addEventListener("click", doPrestige);
}

function gameLoop() {
  const dps = getDps();
  if (dps > 0) attack(dps / 5, true);
}

if (!state.monster || !state.monster.maxHp) {
  state.monster = createMonsterForStage(state.stage);
}

bindEvents();
render();
setInterval(gameLoop, 200);
setInterval(saveState, 7000);
