import { IItemContainer } from "./itemContainer.types";

export interface IInventoryContainerOpen {
  inventoryId: string;
}

export interface IInventoryRead {
  inventory: IItemContainer;
}
