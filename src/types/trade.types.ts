import { IItem } from "./item.types";

export enum CharacterTradeSocketEvents {
  TradeWithNPC = "TradeWithNPC", // this perform the trade itself
  TradeWithMarketplace = "TradeWithMarketplace", // this perform the trade with a marketplace
  TradeInit = "TradeInit", // this is called to populate all trading modals on the client
  MarketplaceTradeInit = "MarketplaceTradeInit", // this is called to populate all trading modals on the client
}

export enum TradingEntity {
  NPC = "NPC",
  Marketplace = "Marketplace",
}

export type TradeTransactionType = "buy" | "sell";

export interface ITraderItem {
  // this is present on NPC model and lists which items are available for trading in a particular NPC.
  key: string;
}

export interface ITradeRequestItem {
  // Request coming from the client
  key: string;
  qty: number;
}

export interface ITradeResponseItem extends IItem {
  price: number;
  qty?: number; // only used when selling (qty would be how much items are available to be sold by the player)
}

export interface ICharacterNPCTradeRequest {
  // CLIENT request to the SERVER when hitting the "Confirm" modal button
  npcId: string;
  type: TradeTransactionType;
  items: ITradeRequestItem[];
}

export interface ICharacterMarketplaceTradeRequest {
  // CLIENT request to the SERVER when hitting the "Confirm" modal button
  marketplaceId: string;
  type: TradeTransactionType;
  items: ITradeRequestItem[];
}

export interface ICharacterNPCTradeInit {
  // When selecting the "Buy items..." or "Sell items..." context menu option
  npcId: string;
  type: TradeTransactionType;
}

export interface ICharacterMarketplaceTradeInit {
  // When selecting the "Buy items..." or "Sell items..." context menu option
  marketplaceId: string;
  type: TradeTransactionType;
}

export interface ICharacterNPCTradeInitBuyResponse {
  npcId: string;
  type: TradeTransactionType;
  traderItems: ITradeResponseItem[];
  characterAvailableGold: number;
}

export interface ICharacterMarketplaceTradeInitBuyResponse {
  marketplaceId: string;
  type: TradeTransactionType;
  items: ITradeResponseItem[];
  characterAvailableGold: number;
}

export interface ICharacterNPCTradeInitSellResponse {
  npcId: string;
  type: TradeTransactionType;
  characterItems: ITradeResponseItem[];
  characterAvailableGold: number;
}

export interface ICharacterMarketplaceTradeInitSellResponse {
  marketplaceId: string;
  type: TradeTransactionType;
  characterItems: ITradeResponseItem[];
  characterAvailableGold: number;
}
