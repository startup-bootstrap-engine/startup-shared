/** REQUEST INTERFACES **/

export interface IUseWithItem {
  originItemId: string;
  targetItemId: string;
}

export interface IUseWithTile {
  originItemId: string;
  targetTile: {
    x: number;
    y: number;
    layer: string;
  };
}

/** SOCKET EVENTS **/

export enum UseWithSocketEvents {
  UseWithItem = "UseWithItem",
  UseWithTile = "UseWithTile",
}
