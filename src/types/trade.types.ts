export enum CharacterTradeSocketEvents {
  TradeWithNPC = "TradeWithNPC",
}

export type TradeTransactionType = "buy" | "sell";

export interface ITradeItem {
  key: string;
  name?: string; // Only available on trade response
  qty: number;
  price: number;
}

export interface ICharacterNPCTradeRequest {
  npcId: string;
  type: TradeTransactionType;
  items: ITradeItem[];
}
