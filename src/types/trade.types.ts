export enum CharacterTradeSocketEvents {
  TradeWithNPC = "TradeWithNPC",
}

export type TradeTransactionType = "buy" | "sell";

export interface ITradeRequestItem {
  key: string;
  qty: number;
}

export interface ITransactionItem {
  key: string;
  itemId: string;
  qty?: number;
  price: number;
  texturePath: string;
  name: string;
}

export interface ICharacterNPCTradeRequest {
  // when hitting the "Confirm" modal button
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
  traderItems: ITransactionItem[];
  characterAvailableGold: number;
}

export interface ICharacterNPCTradeInitSellResponse {
  npcId: string;
  type: TradeTransactionType;
  characterItems: ITransactionItem[];
  characterAvailableGold: number;
}
