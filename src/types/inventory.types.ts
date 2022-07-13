import { IItemContainer } from "./itemContainer.types";

export enum InventorySocketEvents {
  ContainerOpen = "InventoryOpen",
  ContainerRead = "InventoryRead",
  ContainerTransfer = "ContainerTransfer",
}

interface IStringIndex {
  [key: string]: any;
}
export const InventorySocketEventsDisplayLabels: IStringIndex = {
  [InventorySocketEvents.ContainerOpen]: "Open",
  [InventorySocketEvents.ContainerRead]: "Read",
  [InventorySocketEvents.ContainerTransfer]: "Transfer",
};

export interface IInventoryContainerOpen {
  inventoryId: string;
}

export interface IInventoryRead {
  inventory: IItemContainer;
}
