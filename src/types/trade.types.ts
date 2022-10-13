export enum CharacterTradeSocketEvents {
  TradeWithNPC = "TradeWithNPC",
}

export interface ITradeItem {
  itemId: string;
  qty: number;
}

export interface ICharacterNPCTrade {
  npcId: string;
  buy?: ITradeItem[];
  sell?: ITradeItem[];
}
