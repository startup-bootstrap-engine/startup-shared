export enum CharacterTradeSocketEvents {
  TradeWithNPC = "TradeWithNPC",
}

export type TradeTransactionType = "buy" | "sell";

export interface ITraderItem { // this is present on NPC model and lists which items are available for trading in a particular NPC.
  key: string;
  price: string;
}

export interface ITradeRequestItem {
  // Request coming from the client
  key: string;
  qty: number;
}

export interface ITradeResponseItem {
  key: string;
  itemId: string;
  qty?: number; // only used when selling (qty would be how much items are available to be sold by the player)
  price: number;
  texturePath: string;
  name: string;
}

export interface ICharacterNPCTradeRequest {
  // CLIENT request to the SERVER when hitting the "Confirm" modal button
  npcId: string;
  type: TradeTransactionType;
  items: ITradeRequestItem[];
}

export interface ICharacterNPCTradeInit {
  // When selecting the "Buy items..." or "Sell items..." context menu option
  npcId: string;
  type: TradeTransactionType;
}

export interface ICharacterNPCTradeInitBuyResponse {
  npcId: string;
  type: TradeTransactionType;
  traderItems: ITradeResponseItem[];
  characterAvailableGold: number;
}

export interface ICharacterNPCTradeInitSellResponse {
  npcId: string;
  type: TradeTransactionType;
  characterItems: ITradeResponseItem[];
  characterAvailableGold: number;
}
