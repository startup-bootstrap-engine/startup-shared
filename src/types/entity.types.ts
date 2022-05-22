export enum EntityType {
  Character = "Character",
  NPC = "NPC",
}

export enum EntityAttackType {
  Melee = "Melee",
  Ranged = "Ranged",
  None = "None",
}

export interface IEntitiesInView {
  [id: string]: IEntityInViewBasicInfo;
}

export interface IEntityInViewBasicInfo {
  id: string;
  type?: EntityType;
  name?: string;
  x?: number;
  y?: number;
  direction?: string;
}
