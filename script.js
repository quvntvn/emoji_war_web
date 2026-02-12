const STORAGE_KEY = "emojiWarSave_v1";

const MONSTERS = ["👾", "🐉", "🕷️", "🦂", "🐺", "🦍", "🐍", "💀"];
const HEROES = ["🧙", "🥷", "🧑‍🚀", "🤖", "🦊", "🧝", "🦸", "🧛"];
const FEEDBACK_EMOJIS = ["💥", "✨"];

const SHOP_CONFIG = {
  tap: { name: "👆 Tap Mastery", baseCost: 15, basePower: 1, key: "tapLevel", bonusText: "+1 dégâts par clic" },
  dps: { name: "⚙️ Auto DPS", baseCost: 25, basePower: 1, key: "dpsLevel", bonusText: "+1 DPS auto" },
  gold: { name: "💰 Gold Gain", baseCost: 40, basePower: 0.1, key: "goldLevel", bonusText: "+10% or" },
  companion: { name: "👥 Summon Companion", baseCost: 70, key: "companionLevel", bonusText: "+1 allié (DPS augmenté)" },
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
  enemies: [],
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
  inventoryFilter: "all",
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
  monsterField: document.getElementById("monsterField"),
  hpFill: document.getElementById("hpFill"),
  hpText: document.getElementById("monsterHpText"),
  effects: document.getElementById("combatEffects"),
  hero: document.querySelector(".hero"),
  companions: document.getElementById("companionList"),
  companionPower: document.getElementById("companionPower"),
  shopItems: document.getElementById("shopItems"),
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
};

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

function getMonsterMaxHp(stage = state.stage) {
  return Math.max(1, Math.floor(10 * Math.pow(1.15, stage - 1)));
}

function getEnemyCount(stage = state.stage) {
  return Math.min(20, Math.max(1, 2 + Math.floor(stage / 3)));
}

function getTapDamage() {
  const base = 1 + state.upgrades.tapLevel * SHOP_CONFIG.tap.basePower;
  const gear = getEquipmentBonuses().tap;
  return (base + gear) * getPrestigeDamageMultiplier();
}

function getCompanionTotalDps() {
  return state.companions.reduce((sum, c) => sum + c.dps, 0);
}

function getDps() {
  const upgradeDps = state.upgrades.dpsLevel * SHOP_CONFIG.dps.basePower;
  const companionDps = getCompanionTotalDps();
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
  const base = 2 + state.stage * 0.12;
  return Number(base.toFixed(2));
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function createEnemy(stage, isBoss = false) {
  const maxHp = Math.floor(getMonsterMaxHp(stage) * (isBoss ? 4.5 : 1));
  return {
    id: `${Date.now()}_${Math.random()}`,
    emoji: randomFrom(MONSTERS),
    hp: maxHp,
    maxHp,
    isBoss,
  };
}

function createEnemiesForStage(stage) {
  const bossWave = stage % 10 === 0;
  let count = getEnemyCount(stage);
  if (bossWave) {
    count = Math.max(3, count);
    if (count % 2 === 0) count = Math.min(19, count - 1);
  }

  const enemies = Array.from({ length: count }, () => createEnemy(stage, false));
  if (bossWave) {
    const middle = Math.floor(count / 2);
    enemies[middle] = createEnemy(stage, true);
  }
  return enemies;
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
  const wave = getWaveInfo();
  const baseGold = Math.floor(6 * Math.pow(1.13, state.stage));
  const countMult = Math.max(1, 0.45 + wave.total * 0.55);
  const bossMult = wave.hasBoss ? 2 : 1;
  const goldGain = Math.floor(baseGold * countMult * getGoldMultiplier() * bossMult);

  state.gold += goldGain;
  state.score += Math.floor(state.stage * (wave.hasBoss ? 30 : 10) * countMult);
  maybeDropLoot(wave.hasBoss);
  state.stage += 1;
  state.highestStage = Math.max(state.highestStage, state.stage);
  state.enemies = createEnemiesForStage(state.stage);
  showEffect(`+${formatNumber(goldGain)}💰`);
  saveState();
}

function maybeDropLoot(hasBoss) {
  const baseChance = hasBoss ? 1 : 0.2;
  const chance = Math.min(1, baseChance + getDropBonus());
  if (Math.random() <= chance) {
    const slotDef = randomFrom(EQUIP_SLOTS);
    const item = generateItem(slotDef.key, state.stage, hasBoss);
    state.inventory.unshift(item);
    showEffect(`Loot ${item.emoji}${item.rarity.icon}`);
    saveState();
  }
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
  const wave = getWaveInfo();
  if (!wave.alive.length) return;

  wave.alive.forEach((enemy) => {
    enemy.hp = Math.max(0, enemy.hp - amount);
  });

  if (!fromAuto) {
    showEffect(randomFrom(FEEDBACK_EMOJIS));
  }

  if (!getWaveInfo().alive.length) clearWave();
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

function getPrestigeGain() {
  return Math.floor(state.highestStage / 10);
}

function getPrestigeCost() {
  return 50 + state.prestige.count * 10;
}

function doPrestige() {
  if (!canPrestige()) return;
  const gained = getPrestigeGain();
  if (gained <= 0) return;

  const cost = getPrestigeCost();
  if (state.prestige.shards < cost) return;

  state.prestige.shards = state.prestige.shards - cost + gained;
  state.prestige.count += 1;

  state.stage = 1;
  state.gold = 0;
  state.score = 0;
  state.enemies = createEnemiesForStage(1);
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
      <div class="item-meta">Gain: ${cfg.bonusText}</div>
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
  const tabs = [{ key: "all", label: "Tous" }, ...EQUIP_SLOTS.map((slot) => ({ key: slot.key, label: slot.label }))];
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
      ? `<strong>${slot.label}: <span class="rarity-${item.rarity.index}">${item.rarity.icon} ${item.emoji} ${item.rarity.name}</span></strong>
         <div class="item-meta">+${item.stats.tap} tap • +${item.stats.dps} dps • +${(item.stats.gold * 100).toFixed(1)}% gold</div>`
      : `<strong>${slot.label}: Empty</strong>`;
    el.equipmentSlots.append(row);
  }

  renderInventoryTabs();

  el.inventoryItems.innerHTML = "";
  if (!state.inventory.length) {
    el.inventoryItems.innerHTML = `<div class="inventory-item">No items yet. Defeat monsters and bosses!</div>`;
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
        <strong class="rarity-${item.rarity.index}">${item.rarity.icon} ${item.emoji} ${item.rarity.name}</strong>
        <button class="inv-equip" data-equip="${item.id}">Equip ${item.slotLabel}</button>
      </div>
      <div class="item-meta">+${item.stats.tap} tap • +${item.stats.dps} dps • +${(item.stats.gold * 100).toFixed(1)}% gold</div>
    `;
    el.inventoryItems.append(row);
  });

  if (!sortedItems.length) {
    el.inventoryItems.innerHTML = `<div class="inventory-item">No item in this tab yet.</div>`;
  }
}

function renderCompanions() {
  el.companions.innerHTML = "";
  if (!state.companions.length) {
    el.companions.textContent = "No companions yet. Buy one in the shop!";
    el.companionPower.textContent = "Companion power: 0 DPS";
    return;
  }

  const totalDps = state.companions.reduce((sum, companion) => sum + companion.dps, 0);
  el.companionPower.textContent = `Companion power: ${totalDps.toFixed(1)} DPS`;

  state.companions.forEach((companion) => {
    const span = document.createElement("span");
    span.className = "companion";
    span.textContent = `${companion.emoji} ${companion.dps.toFixed(1)}`;
    span.title = `+${companion.dps} DPS`;
    el.companions.append(span);
  });
}

function renderPrestige() {
  const can = canPrestige();
  const gain = getPrestigeGain();
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
    el.prestigeConfirm.textContent = "Reach Stage 50 to unlock";
  } else if (!canPay) {
    el.prestigeConfirm.textContent = `Need ${cost}🔮 (you have ${formatNumber(state.prestige.shards)})`;
  } else {
    el.prestigeConfirm.textContent = `Perform Prestige (Cost ${cost}🔮, Gain +${gain}🔮)`;
  }

  el.prestigeButton.disabled = !can;
}

function renderWave() {
  const wave = getWaveInfo();
  el.monsterType.textContent = wave.hasBoss ? "👑 Boss au milieu" : "Enemy Wave";
  el.monsterStage.textContent = `Stage ${state.stage} • ${wave.alive.length}/${wave.total} ennemis`;
  el.hpText.textContent = `${formatNumber(wave.hp)} / ${formatNumber(Math.max(1, wave.maxHp))}`;
  el.hpFill.style.width = `${(wave.hp / Math.max(1, wave.maxHp)) * 100}%`;

  el.monsterField.innerHTML = "";
  state.enemies.forEach((enemy) => {
    if (enemy.hp <= 0) return;

    const btn = document.createElement("button");
    btn.className = `monster-button small ${enemy.isBoss ? "boss" : ""}`;
    btn.type = "button";
    btn.dataset.attack = "all";
    btn.title = `Attaque de zone: ${getTapDamage().toFixed(1)} dégâts à tous les ennemis`;
    btn.innerHTML = `
      <span class="monster-emoji">${enemy.emoji}</span>
      <span class="enemy-hp">${formatNumber(enemy.hp)}</span>
    `;
    el.monsterField.append(btn);
  });
}

function render() {
  const dps = getDps();

  el.hero.textContent = state.hero;
  el.stage.textContent = state.stage;
  el.gold.textContent = formatNumber(state.gold);
  el.dps.textContent = formatNumber(dps);
  el.score.textContent = formatNumber(state.score);

  renderWave();
  renderCompanions();
  renderShop();
  renderInventory();
  renderPrestige();
}

function bindEvents() {
  el.monsterField.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const attackTarget = target.closest("[data-attack]");
    if (!attackTarget) return;
    attack(getTapDamage(), false);
  });

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

  el.inventoryTabs.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const tabKey = target.dataset.tab;
    if (!tabKey) return;
    state.inventoryFilter = tabKey;
    renderInventory();
    saveState();
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

if (!Array.isArray(state.enemies) || !state.enemies.length) {
  state.enemies = createEnemiesForStage(state.stage);
}

bindEvents();
render();
setInterval(gameLoop, 200);
setInterval(saveState, 7000);
