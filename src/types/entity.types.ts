export enum EntityType {
  Character = "Character",
  NPC = "NPC",
}

export enum EntityAttackType {
  Melee = "Melee",
  Ranged = "Ranged",
  None = "None",
  MeleeRanged = "MeleeRanged",
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
