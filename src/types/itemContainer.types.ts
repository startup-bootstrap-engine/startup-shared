import { IItem, ItemType } from "./item.types";
import { IResource } from "./resource.types";

interface IItemContainerSlots {
  [slot: number]: IItem;
}

export interface IItemContainer extends IResource {
  owner?: string;
  isOwnerRestricted?: boolean;
  parentItem: string | IItem;
  name?: string;
  slotQty: number;
  slots: IItemContainerSlots;
  allowedItemTypes?: ItemType[];
  isEmpty: boolean;
  totalItemsQty?: number;
  itemIds?: string[];
  emptySlotsQty?: number;
  firstAvailableSlot?: IItem | null;
  firstAvailableSlotId?: number | null;
}

export enum ItemContainerType {
  Inventory = "Inventory",
  Equipment = "Equipment",
  Loot = "Loot",
  MapContainer = "MapContainer",
}

export interface IItemContainerOpen {
  itemId: string;
}

export interface IItemTransfer {
  itemId: string;
  fromContainerId: string;
  toContainerId: string;
}

export interface IItemPickup {
  itemId: string;
  x: number;
  y: number;
  scene: string;
  toContainerId: string;
  fromContainerId?: string;
}

export interface IItemDrop {
  itemId: string;
  x: number;
  y: number;
  scene: string;
  fromContainerId: string;
  source: "inventory" | "equipment";
  toPosition: {
    x: number;
    y: number;
    scene: string;
  };
}

export interface IItemContainerRead {
  itemContainer: IItemContainer;
  type: ItemContainerType;
}

export interface IItemContainerProps {
  openedContainers: Set<string>;
  containersData: { [key: string]: IItemContainer };
  onMouseOverElement: (element: any) => void;
}
