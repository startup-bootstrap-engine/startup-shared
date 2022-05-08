export enum BattleSocketEvents {
  InitTargeting = "InitTargeting",
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
  totalDamage: number;
  postDamageTargetHP: number;
}

export interface IBattleCharacterDeath {
  charId: string;
}
