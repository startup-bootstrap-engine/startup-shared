import { ICharacter } from "./character.types";
import { EntityAttackType } from "./entity.types";
import { IEquipmentSet } from "./equipment.types";
import { IItemContainer } from "./itemContainer.types";
import { MapLayers } from "./maps.types";
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
}

export enum ItemType {
  Weapon = "Weapon",
  Armor = "Armor",
  Accessory = "Accessory",
  Jewelry = "Jewelry",
  Consumable = "Consumable",
  CraftMaterial = "CraftMaterial",
  Quest = "Quest",
  Information = "Information",
  Tool = "Tool",
  Container = "Container",
  Other = "Other",
}

export enum ItemSubType {
  Accessory = "Accessory",
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
  Look = "Look",
  Equip = "Equip",
  Unequip = "Unequip",
  Pickup = "Pickup",
  Drop = "Drop",
  Use = "Use",
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
  textureKey: string;
  textureAtlas: string;
  texturePath: string;
  type: ItemType;
  subType: ItemSubType;
  name: string;
  x: number;
  y: number;
  scene: string;
  layer: MapLayers;
  stackQty: number;
  isStackable: boolean;
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
  CraftMaterial: [ItemSocketEvents.Use, ItemSocketEvents.GetItemInfo, ItemSocketEvents.Drop],
  Tool: [ItemSocketEvents.Use, ItemSocketEvents.GetItemInfo, ItemSocketEvents.Drop],
  Other: [ItemSocketEvents.Use, ItemSocketEvents.GetItemInfo, ItemSocketEvents.ReadItemInfo],
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
  CraftMaterial: [ItemSocketEvents.GetItemInfo, ItemSocketEvents.Pickup],
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
  CraftMaterial: [ItemSocketEvents.GetItemInfo, ItemSocketEvents.Pickup],
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

export interface ITraderItem {
  itemId: string;
  qty: number;
}

export interface IBuySellItems {
  buy: ITraderItem[];
  sell: ITraderItem[];
}

export interface IUseItemPayload {
  itemId: string;
}
