export enum CharacterTradeSocketEvents {
  TradeWithNPC = "TradeWithNPC",
}

export type TradeTransactionType = "buy" | "sell";

export interface ITradeItem {
  itemId: string;
  qty: number;
  price: number;
}

export interface ICharacterNPCTrade {
  npcId: string;
  type: TradeTransactionType;
  items: ITradeItem[];
}
