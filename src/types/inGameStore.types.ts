export enum InGameStoreItemBuyEvents {
  BuyItem = "buyItem",
  ReadItems = "readItems",
}

export interface InGameStoreBuyPayload {
  itemId: string;
  coinType: "social-crystal" | "gold-coin";
  price: number;
}
