import { IResource } from "./resource.types";

export enum SkillSocketEvents {
  ExperienceGain = "ExperienceGain",
  SkillGain = "SkillGain",
}

export enum SkillEventType {
  LevelUp = "LevelUp",
  SkillLevelUp = "SkillLevelUp",
}

export interface ISkillEventFromServer {
  characterId: string;
  targetId: string;
  targetType: "Character" | "NPC";
  eventType: SkillEventType;
  exp?: number;
  level?: number;
  skill?: string;
}

export interface ISkillDetails {
  type: SkillType;
  level: number;
  skillPoints: number;
  skillPointsToNextLevel: number;
}

export interface ISkill extends IResource {
  owner: string;
  level: number;
  xpGainRate: number;
  experience: number;
  xpToNextLevel: number; // virtual field

  // Basic attributes
  stamina: ISkillDetails;
  magic: ISkillDetails;
  magicResistance: ISkillDetails;
  strength: ISkillDetails;
  resistance: ISkillDetails;
  dexterity: ISkillDetails;

  // Combat skills
  first: ISkillDetails;
  club: ISkillDetails;
  sword: ISkillDetails;
  axe: ISkillDetails;
  distance: ISkillDetails;
  shielding: ISkillDetails;
  dagger: ISkillDetails;

  // Crafting skills
  fishing: ISkillDetails;
  mining: ISkillDetails;
  lumberjacking: ISkillDetails;
  cooking: ISkillDetails;
  alchemy: ISkillDetails;

  // Magic skills (will be introduced later!)
  // ice: ISkillDetails;
  // fire: ISkillDetails;
  // earth: ISkillDetails;
  // air: ISkillDetails;
  // water: ISkillDetails;
}

export enum SkillType {
  BasicAttributes = "BasicAttributes",
  Combat = "Combat",
  Crafting = "Crafting",
  Gathering = "Gathering",
  Magic = "Magic",
  Misc = "Misc",
}
