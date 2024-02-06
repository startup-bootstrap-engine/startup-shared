import { AnimationEffectKeys } from "./animation.types";
import { ICharacterPermanentBuff } from "./buff.types";
import { ICharacter } from "./character.types";
import { EntityAttackType } from "./entity.types";
import { IEquipmentSet } from "./equipment.types";
import { IItemContainer } from "./itemContainer.types";
import { MapLayers } from "./maps.types";
import { UserAccountTypes } from "./premiumAccount.types";
import { IResource } from "./resource.types";

export interface IItem extends IResource {
  tiledId?: number;
  owner?: ICharacter | string;
  type: ItemType;
  subType: ItemSubType;

  name: string;
  description: string; // custom item description
  fullDescription: string; //virtual mongoose field, that is dynamically generated based on item attack, defense, weight, etc.
  key: string;
  textureAtlas: string;
  texturePath: string;
  textureKey: string;
  attack?: number;
  defense?: number;
  weight: number;
  rarity: string;
  allowedEquipSlotType: ItemSlotType[];
  isEquipable: boolean; // can we add it to our equipment slots?
  isStackable: boolean;
  isTwoHanded: boolean;
  hasUseWith: boolean;
  maxStackSize: number; //if isStackable only
  stackQty?: number;
  isUsable: boolean;
  usableEffect?: string; // if isUsable only. This is a key that we'll use to check which effect event to trigger.
  isStorable: boolean; // if false, we cannot add it to a container/inventory
  x?: number; //x,y, scene for items on the map only
  y?: number;
  scene?: string;
  layer?: MapLayers;
  isSolid: boolean;
  isItemContainer: boolean;
  itemContainer?: string | IItemContainer; // is isContainer, then this is the container reference.
  generateContainerSlots?: number;
  decayTime?: Date;
  maxRange?: number;
  requiredAmmoKeys?: string[];
  rangeType?: EntityAttackType;
  minRequirements?: MinRequirements;
  entityEffects?: string[];
  entityEffectChance?: number;
  usableEffectDescription?: string;
  equippedBuffDescription?: string;
  canBePurchasedOnlyByPremiumPlans?: UserAccountTypes[];
}

export enum ItemType {
  Weapon = "Weapon",
  Armor = "Armor",
  Accessory = "Accessory",
  Jewelry = "Jewelry",
  Consumable = "Consumable",
  Quest = "Quest",
  Information = "Information",
  Tool = "Tool",
  Container = "Container",
  Other = "Other",
  CraftingResource = "CraftingResource",
  Plant = "Plant",
}

export enum ItemRarities {
  Common = "Common",
  Uncommon = "Uncommon",
  Rare = "Rare",
  Epic = "Epic",
  Legendary = "Legendary",
}

export enum ItemSubType {
  Accessory = "Accessory",
  CraftingResource = "CraftingResource",
  Armor = "Armor",
  Legs = "Legs",
  Axe = "Axe",
  Boot = "Boot",
  Ranged = "Ranged",
  Food = "Food",
  Glove = "Glove",
  Helmet = "Helmet",
  Magic = "Magic",
  Potion = "Potion",
  Shield = "Shield",
  Spear = "Spear",
  Staff = "Staff",
  Sword = "Sword",
  Other = "Other",
  DeadBody = "DeadBody",
  Dagger = "Dagger",
  Mace = "Mace",
  Tool = "Tool",
  Book = "Book",
  Plant = "Plant",
  Seed = "Seed",
}

export enum ItemSlotType {
  Head = "Head",
  Neck = "Neck",
  Torso = "Torso",
  LeftHand = "LeftHand",
  RightHand = "RightHand",
  Waist = "Waist",
  Legs = "Legs",
  Feet = "Feet",
  Ring = "Ring",
  Accessory = "Accessory",
  Inventory = "Inventory",
}

export enum ItemSocketEvents {
  Update = "Update",
  UpdateAll = "UpdateAll",
  Look = "Look",
  Equip = "Equip",
  Unequip = "Unequip",
  Pickup = "Pickup",
  Drop = "Drop",
  Move = "Move",
  Use = "Use",
  UseWith = "Use with...",
  GetItemInfo = "GetItemInfo",
  ReadItemInfo = "ReadItemInfo",
  ContainerOpen = "ContainerOpen",
  ContainerRead = "ContainerRead",
  ContainerTransfer = "ContainerTransfer",
  EquipmentAndInventoryUpdate = "EquipmentAndInventoryUpdate",
  RangedAttack = "RangedAttack",
  Buy = "Buy",
  Sell = "Sell",
  InventoryOpen = "InventoryOpen",
  LoadCraftBook = "LoadCraftBook",
  CraftableItems = "CraftableItems",
  CraftItem = "CraftItem",
}

interface IStringIndex {
  [key: string]: any;
}
export const ItemSocketEventsDisplayLabels: IStringIndex = {
  [ItemSocketEvents.GetItemInfo]: "Look",
  [ItemSocketEvents.ContainerTransfer]: "Transfer",
  [ItemSocketEvents.Equip]: "Equip",
  [ItemSocketEvents.Unequip]: "Unequip",
  [ItemSocketEvents.Pickup]: "Pickup",
  [ItemSocketEvents.Drop]: "Drop",
  [ItemSocketEvents.Use]: "Use",
  [ItemSocketEvents.ContainerOpen]: "Open",
  [ItemSocketEvents.ContainerRead]: "Read",
  [ItemSocketEvents.UseWith]: "Use with...",
};

export interface IGetItemInfo {
  id: string;
  fields: string[];
}

export interface IReadItemInfo {
  id: string;
  information: string;
}

export interface IItemUpdate {
  id: string;
  textureAtlas: string;
  texturePath: string;
  type: ItemType;
  subType: ItemSubType;
  name: string;
  x: number;
  y: number;
  scene?: string;
  layer: MapLayers;
  stackQty: number;
  isStackable?: boolean;
  isDeadBodyLootable?: boolean;
  lastWatering?: Date;
}

export interface IItemUpdateAll {
  items: IItemUpdate[];
}

export interface IItemsInView {
  [id: string]: IItemInViewBasicInfo;
}

export interface IItemInViewBasicInfo {
  id: string;
  x?: number;
  y?: number;
}

export const ActionsForInventory = {
  Equipment: [ItemSocketEvents.Equip, ItemSocketEvents.GetItemInfo, ItemSocketEvents.Drop],
  Consumable: [ItemSocketEvents.Use, ItemSocketEvents.GetItemInfo, ItemSocketEvents.Drop],
  CraftingResource: [ItemSocketEvents.UseWith, ItemSocketEvents.GetItemInfo, ItemSocketEvents.Drop],
  Tool: [ItemSocketEvents.UseWith, ItemSocketEvents.GetItemInfo, ItemSocketEvents.Drop],
  Other: [ItemSocketEvents.GetItemInfo, ItemSocketEvents.Drop],
  Container: [
    ItemSocketEvents.Equip,
    ItemSocketEvents.GetItemInfo,
    ItemSocketEvents.Drop,
    ItemSocketEvents.ContainerOpen,
  ],
};

export const ActionsForLoot = {
  Equipment: [ItemSocketEvents.Equip, ItemSocketEvents.GetItemInfo, ItemSocketEvents.Pickup],
  Consumable: [ItemSocketEvents.GetItemInfo, ItemSocketEvents.Pickup],
  CraftingResource: [ItemSocketEvents.GetItemInfo, ItemSocketEvents.Pickup],
  Tool: [ItemSocketEvents.GetItemInfo, ItemSocketEvents.Pickup],
  Other: [ItemSocketEvents.GetItemInfo, ItemSocketEvents.Pickup],
};

export const ActionsForEquipmentSet = {
  Equipment: [ItemSocketEvents.GetItemInfo, ItemSocketEvents.Drop, ItemSocketEvents.Unequip],
  Container: [ItemSocketEvents.GetItemInfo, ItemSocketEvents.Drop, ItemSocketEvents.ContainerOpen],
};

export const ActionsForMapContainer = {
  Equipment: [ItemSocketEvents.Equip, ItemSocketEvents.GetItemInfo, ItemSocketEvents.Pickup],
  Consumable: [ItemSocketEvents.GetItemInfo, ItemSocketEvents.Pickup],
  CraftingResource: [ItemSocketEvents.GetItemInfo, ItemSocketEvents.Pickup],
  Tool: [ItemSocketEvents.GetItemInfo, ItemSocketEvents.Pickup],
  Other: [ItemSocketEvents.GetItemInfo, ItemSocketEvents.Pickup],
};

export interface IPayloadProps {
  item: IItem | null;
  actionType: ItemSocketEvents | string;
}

export interface IEquipItemPayload {
  itemId: string;
  itemContainerId: string;
}

export interface IUnequipItemPayload {
  itemId: string;
}

export interface IEquipmentAndInventoryUpdatePayload {
  equipment?: IEquipmentSet;
  inventory?: IItemContainer;
  openEquipmentSetOnUpdate?: boolean;
  openInventoryOnUpdate?: boolean;
}

export type Direction = "down" | "up" | "left" | "right" | "down_right" | "down_left" | "up_right" | "up_left";

export interface IRangedAttack {
  attackerId: string;
  targetId: string;
  direction: Direction;
  ammoKey?: string;
  type?: string;
}

export interface IUseItemPayload {
  itemId: string;
}

export enum SpellCastingType {
  SelfCasting = "self-casting",
  RangedCasting = "ranged-casting",
}

export interface ILoadCraftBookPayload {
  itemSubType: string;
}

export interface ICraftItemPayload {
  itemKey: string;
  itemSubType?: string;
}

export interface ICraftableItemIngredient {
  key: string;
  name: string;
  qty: number;
  texturePath: string;
}

export interface ICraftableItem extends IItem {
  canCraft: boolean;
  ingredients: ICraftableItemIngredient[];
  minCraftingRequirements?: [string, number];
  levelIsOk?: boolean;
}

export enum RangeTypes {
  UltraShort = 3,
  Short = 5,
  Medium = 6,
  High = 7,
}

export interface IBaseItemBlueprint {
  key: string;
  type: ItemType;
  subType: ItemSubType;
  textureAtlas: string;
  texturePath: string;
  name: string;
  description: string;
  weight: number;
  basePrice?: number;
  canSell?: boolean;
  maxStackSize?: number;
  isTraining?: boolean;
  minRequirements?: MinRequirements;
  usableEffectDescription?: string;
  equippedBuffDescription?: string;
  canBePurchasedOnlyByPremiumPlans?: UserAccountTypes[];
  isOnPremiumStore?: boolean;
}

export interface IBaseItemContainerBlueprint extends IBaseItemBlueprint {
  isItemContainer?: boolean;
  generateContainerSlots?: number;
  allowedEquipSlotType?: ItemSlotType[];
}

export interface MinRequirements {
  level: number;
  skill: {
    name: string;
    level: number;
  };
}

export interface IEquippableItemBlueprint extends IBaseItemBlueprint {
  defense?: number;
  attack?: number;
  allowedEquipSlotType: ItemSlotType[];
  usableEffect?: (character: any) => void | Promise<void>;
  equippedBuff?: ICharacterPermanentBuff | ICharacterPermanentBuff[];
  isMageGear?: Boolean;
}

export interface IEquippableRangedAmmoBlueprint extends IBaseItemBlueprint {
  type: ItemType.Weapon;
  subType: ItemSubType.Ranged;
  attack: number;
  allowedEquipSlotType: [ItemSlotType.Accessory];
  maxStackSize: number;
  entityEffects?: string[];
  entityEffectChance?: number;
}

export interface IEquippableArmorBlueprint extends Omit<IEquippableItemBlueprint, "attack"> {}

export interface IEquippableWeaponBlueprint extends IEquippableItemBlueprint {
  type: ItemType.Weapon;
  attack: number;
  defense: number;
  rangeType: EntityAttackType;
  isTwoHanded?: boolean;
  entityEffects?: string[];
  entityEffectChance?: number;
}

export interface IEquippableRangedWeaponTwoHandedBlueprint extends Omit<IEquippableWeaponBlueprint, "defense"> {
  rangeType: EntityAttackType.Ranged;
  subType: ItemSubType.Ranged;
  maxRange: RangeTypes;
  requiredAmmoKeys: string[];
  attack: number;
  isTwoHanded: true;
  allowedEquipSlotType: [ItemSlotType.LeftHand, ItemSlotType.RightHand];
}
export interface IEquippableRangedWeaponOneHandedBlueprint extends Omit<IEquippableWeaponBlueprint, "defense"> {
  rangeType: EntityAttackType.Ranged;
  subType: ItemSubType.Ranged;
  maxRange: RangeTypes;

  attack: number;
  allowedEquipSlotType: [ItemSlotType.LeftHand, ItemSlotType.RightHand];
}

export interface ICraftableItemBlueprint extends IBaseItemBlueprint {
  type: ItemType.Consumable | ItemType.CraftingResource;
  maxStackSize?: number;
  usableEffect?: (character) => void | Promise<void>;
  usableEffectKey?: string;
}

export interface IToolItemBlueprint extends IBaseItemBlueprint {
  attack?: number;
  defense?: number;
  allowedEquipSlotType: [ItemSlotType.LeftHand, ItemSlotType.RightHand];
  rangeType: EntityAttackType;
  hasUseWith: true;
  useWithMaxDistanceGrid: RangeTypes;
  canSell: false;
  usableEffect?: (character, targetItem, itemCraftable, skillIncrease, originItem) => void | Promise<void>;
  useWithTileEffect?: (
    originItem,
    targetTile,
    targetname: string,
    character,
    itemCraftable,
    skillIncrease
  ) => Promise<void>;
}
export interface IUseWithItemBlueprint extends IBaseItemBlueprint {
  rangeType: EntityAttackType;
  hasUseWith: true;
  useWithMaxDistanceGrid: RangeTypes;
  canSell: boolean;
  usableEffect?: (character, targetItem, itemCraftable, skillIncrease, originItem) => void | Promise<void>;
  useWithTileEffect?: (
    originItem,
    targetTile,
    targetname: string,
    character,
    itemCraftable,
    skillIncrease
  ) => Promise<void>;
}

export interface IConsumableItemBlueprint extends ICraftableItemBlueprint {
  type: ItemType.Consumable;
  usableEffect?: (character) => void | Promise<void>;
  usableEffectKey: string;
}

export enum MagicPower {
  UltraLow = 0.5,
  Low = 1.5,
  Medium = 2.5,
  High = 4.5,
  UltraHigh = 5,
  Fatal = 7,
}

export interface IRuneItemBlueprint extends IBaseItemBlueprint {
  hasUseWith: true;
  canUseOnNonPVPZone: boolean;
  maxStackSize: number;

  useWithMaxDistanceGrid: RangeTypes;
  power: MagicPower;
  animationKey: AnimationEffectKeys;
  projectileAnimationKey: AnimationEffectKeys;
  minMagicLevelRequired: number;

  usableEffect?: (caster, target) => void | Promise<void> | Promise<number>;
  usableEntityEffect?: (caster, target) => void | Promise<void> | Promise<number>;

  usableEffectKey: string;

  hasAutoTarget?: boolean;
  hasSelfAutoTarget?: boolean;
  canTargetNPC?: boolean;
}

export interface IEquippableStaffBlueprint extends IEquippableWeaponBlueprint {
  projectileAnimationKey: AnimationEffectKeys;
  maxRange: RangeTypes;
}

export interface IRefillableItem extends IBaseItemBlueprint {
  isRefillable: true;
  refillResourceKey: string;
  remainingUses: number;
  initialRemainingUses: number;
  hasUseWith: true;
  rangeType?: EntityAttackType;
  useWithMaxDistanceGrid: RangeTypes;
  animationKey: AnimationEffectKeys;
  projectileAnimationKey: AnimationEffectKeys;
  allowedEquipSlotType: [ItemSlotType.LeftHand, ItemSlotType.RightHand];
  usableEffect?: (character, targetItem, skillIncrease, originItem) => void | Promise<void> | Promise<number>;
  usableEntityEffect?: (caster: any, target: any) => void | Promise<void> | Promise<number>;
  useWithTileEffect?: (
    originItem,
    targetTile,
    targetname: string,
    character,
    itemCraftable,
    skillIncrease
  ) => Promise<void>;
  hasAutoTarget?: boolean;
  usableEffectDescription: string;
}
