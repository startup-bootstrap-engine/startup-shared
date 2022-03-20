export interface IEntityBasicInfo {
  id: string;
  type?: EntityType;
  name?: string;
  x?: number;
  y?: number;
  direction?: string;
}

export enum EntityType {
  Player = "Player",
  NPC = "Npc",
}
