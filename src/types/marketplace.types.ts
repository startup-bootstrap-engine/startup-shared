import { IItem } from "./item.types";

export interface IMarketplaceItem {
  _id: string;
  price: number;
  item: IItem;
  owner: string;
}

export interface IGetMarketplaceItemsOptions {
  name?: string;
  orderBy?: string;
  order?: string;
  owner?: string;
  mainLevel?: [number | undefined, number | undefined];
  secondaryLevel?: [number | undefined, number | undefined];
  price?: [number | undefined, number | undefined];
  itemType?: string;
  itemRarity?: string;
  limit?: number;
  page?: number;
}

export enum MarketplaceSocketEvents {
  AvailableMoneyNotification = "MarketplaceAvailableMoneyNotification",
  GetItems = "MarketplaceGetItems",
  RefreshItems = "MarketplaceRefreshItems",
  AddItem = "MarketplaceAddItem",
  RemoveItem = "MarketplaceRemoveItem",
  BuyItem = "MarketplaceBuyItem",
  WithdrawMoney = "MarketplaceWithdrawMoney",
  GetAvailableMoney = "MarketplaceGetAvailableMoney",
}

export interface IMarketplaceAvailableMoneyNotification {
  moneyAvailable: number;
}

export interface IMarketplaceGetItems {
  npcId: string;
  options: IGetMarketplaceItemsOptions
}

export interface IMarketplaceGetItemsResponse {
  items: IMarketplaceItem[];
  moneyAvailable: number;
  totalItems: number;
}

export interface IMarketplaceAddItem {
  npcId: string;
  marketplaceItem: {
    price: number;
    itemId: string
  };
}

export interface IMarketplaceRemoveItem {
  npcId: string;
  marketplaceItemId: string;
}

export interface IMarketplaceBuyItem {
  npcId: string;
  marketplaceItemId: string;
}

export interface IMarketplaceWithdrawMoney {
  npcId: string;
}