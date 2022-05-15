import { EntityType } from "./entity.types";

export enum BattleSocketEvents {
  InitTargeting = "InitTargeting",
  StopTargeting = "StopTargeting", // client => server
  CancelTargeting = "CancelTargeting", // server => client (triggered when errors occur)
  CharacterEvent = "CharacterEvent",
  CharacterDeath = "CharacterDeath",
  NPCEvent = "NPCEvent",
  NPCDeath = "NPCDeath",
}

export enum BattleEventType {
  Miss = "Miss",
  Block = "Block",
  Hit = "Hit",
}

export interface IBattleEventFromServer {
  targetId: string;
  targetType: "Character" | "NPC";
  eventType: BattleEventType;
  totalDamage?: number;
  postDamageTargetHP?: number;
}

export interface IBattleCharacterDeath {
  charId: string;
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
