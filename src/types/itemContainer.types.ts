import { IItem, ItemType } from "./item.types";
import { IResource } from "./resource.types";

interface IItemContainerSlots {
  [slot: number]: IItem;
}

export interface IItemContainer extends IResource {
  owner: string;
  isOwnerRestricted: boolean;
  parentItem: string;
  name?: string;
  slotQty: number;
  slots: IItemContainerSlots;
  allowedItemTypes?: ItemType[];
  isEmpty: boolean;
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
}

export interface IItemDrop {
  itemId: string;
  x: number;
  y: number;
  scene: string;
  fromContainerId: string;
  toPosition: {
    x: number;
    y: number;
    scene: string;
  };
}

export interface IItemContainerRead {
  itemContainer: IItemContainer;
}

export interface IItemContainerProps {
  openedContainers: Set<string>;
  containersData: { [key: string]: IItemContainer };
  onMouseOverElement: (element: any) => void;
}
