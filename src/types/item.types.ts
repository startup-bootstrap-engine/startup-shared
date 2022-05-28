import { ICharacter } from "./character.types";
import { MapLayers } from "./maps.types";
import { IResource } from "./resource.types";

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
  Body = "Body",
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
  attack?: string;
  defense?: string;
  weight: number;
  isEquipable: boolean; // can we add it to our equipment slots?
  equipSlotType?: ItemSlotType; // for equippables only
  isStackable: boolean;
  maxStackSize: number; //if isStackable only
  isUsable: boolean;
  usableEffect?: string; // if isUsable only. This is a key that we'll use to check which effect event to trigger.
  isStorable: boolean; // if false, we cannot add it to a container/inventory
  x?: number; //x,y, scene for items on the map only
  y?: number;
  scene?: number;
  layer?: MapLayers;
  isSolid: boolean;
  isItemContainer?: boolean;
  itemContainer?: string; // is isContainer, then this is the container reference.
}

export interface IItemContainer extends IResource {
  owner: string;
  name: string;
  slotQty: number;
  items?: IItem[];
  allowedItemTypes?: ItemType[];
}

export enum ItemSocketEvents {
  Update = "Update",
  Look = "Look",
  Equip = "Equip",
  Unequip = "Unequip",
  Pickup = "Pickup",
  Drop = "Drop",
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
