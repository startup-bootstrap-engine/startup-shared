import { EntityType } from "./entity.types";

export enum BattleSocketEvents {
  InitTargeting = "InitTargeting",
  StopTargeting = "StopTargeting", // client => server
  CancelTargeting = "CancelTargeting", // server => client (triggered when errors occur)
  BattleEvent = "BattleEvent",
  BattleDeath = "BattleDeath",
}

export enum BattleEventType {
  Miss = "Miss",
  Block = "Block",
  Hit = "Hit",
  LevelUp = "LevelUp",
}

export interface IBattleEventFromServer {
  targetId: string;
  targetType: "Character" | "NPC";
  eventType: BattleEventType;
  totalDamage?: number;
  postDamageTargetHP?: number;
  level?: number;
  skill?: string;
}

export interface IBattleDeath {
  id: string;
  type: "Character" | "NPC";
}

export interface IBattleInitTargeting {
  targetId: string;
  type: EntityType;
}

export interface IBattleCancelTargeting {
  targetId: string;
  type: EntityType;
  reason?: string;
}
