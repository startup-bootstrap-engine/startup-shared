export interface IViewElement {
  id: string;
  x: number;
  y: number;
  scene: string;
  direction?: string;
}

export enum ViewSocketEvents {
  Destroy = "Destroy",
}

export interface IViewDestroyElementPayload {
  type: "npcs" | "items" | "characters";
  id: string;
}
