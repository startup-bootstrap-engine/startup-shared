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
  type: ItemType;
  name: string;
  description: string; // custom item description
  fullDescription: string; //virtual mongoose field, that is dynamically generated based on item attack, defense, weight, etc.
  key: string;
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
  itemId: string;
  x: number;
  y: number;
  scene: number;
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
