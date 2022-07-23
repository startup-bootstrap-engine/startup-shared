import { ICharacter } from "./character.types";
import { IEquipementSet } from "./equipment.types";
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
  Axe = "Axe",
  Boot = "Boot",
  Bow = "Bow",
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
}

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
}

export interface IItemsInView {
  [id: string]: IItemInViewBasicInfo;
}

export interface IItemInViewBasicInfo {
  id: string;
  x?: number;
  y?: number;
}

export const ActionsByItemType = {
  Equipment: [ItemSocketEvents.Equip, ItemSocketEvents.GetItemInfo, ItemSocketEvents.Drop],
  Consumable: [ItemSocketEvents.Use, ItemSocketEvents.GetItemInfo, ItemSocketEvents.Drop],
  CraftMaterial: [, ItemSocketEvents.GetItemInfo, ItemSocketEvents.Drop],
  Other: [ItemSocketEvents.GetItemInfo],
  EquipmenSetItems: [ItemSocketEvents.Unequip, ItemSocketEvents.GetItemInfo],
  EquipmenSetContainer: [ItemSocketEvents.Look, ItemSocketEvents.Unequip, ItemSocketEvents.GetItemInfo],
};

export interface IPayloadProps {
  item: IItem | null;
  actionType: ItemSocketEvents | string;
}

export interface IEquipItemPayload {
  itemId: string;
  targetSlot: ItemSlotType;
}

export interface IUnequipItemPayload {
  itemId: string;
}

export interface IEquipmentAndInventoryUpdatePayload {
  equipment: IEquipementSet;
  inventory: IItemContainer;
}
