import { EntityAttackType } from "./entity.types";
import { ItemSubType } from "./item.types";
import { IResource } from "./resource.types";

export enum SkillSocketEvents {
  ExperienceGain = "ExperienceGain",
  SkillGain = "SkillGain",
  ReadInfo = "ReadInfo",
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
  isBuffed?: boolean;
  buffedLevel?: number;
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
  melee: ISkillDetails;
  club: ISkillDetails;
  sword: ISkillDetails;
  axe: ISkillDetails;
  ranged: ISkillDetails;
  shield: ISkillDetails;
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

export enum CombatSkill {
  Melee = "melee",
  Sword = "sword",
  Dagger = "dagger",
  Axe = "axe",
  Ranged = "ranged",
  Shield = "shield",
  Club = "club",
}

export enum BasicAttribute {
  Strength = "strength",
  Resistance = "resistance",
  Dexterity = "dexterity",
  Magic = "magic",
  MagicResistance = "magicResistance",
}

export const BASIC_ATTRIBUTES: BasicAttribute[] = [
  BasicAttribute.Strength,
  BasicAttribute.Resistance,
  BasicAttribute.Dexterity,
  BasicAttribute.Magic,
];

export const COMBAT_SKILLS = [
  EntityAttackType.None,
  ItemSubType.Sword,
  ItemSubType.Dagger,
  ItemSubType.Axe,
  ItemSubType.Ranged,
  ItemSubType.Spear,
  ItemSubType.Shield,
  ItemSubType.Mace,
];

export const SKILLS_MAP = new Map<ItemSubType | string, string>([
  [EntityAttackType.None, CombatSkill.First],
  [ItemSubType.Sword, CombatSkill.Sword],
  [ItemSubType.Dagger, CombatSkill.Dagger],
  [ItemSubType.Axe, CombatSkill.Axe],
  [ItemSubType.Ranged, CombatSkill.Distance],
  [ItemSubType.Spear, CombatSkill.Distance],
  [ItemSubType.Shield, CombatSkill.Shielding],
  [ItemSubType.Mace, CombatSkill.Club],
  [ItemSubType.Magic, BasicAttribute.Magic],
  [BasicAttribute.Strength, BasicAttribute.Strength],
  [BasicAttribute.Resistance, BasicAttribute.Resistance],
  [BasicAttribute.Dexterity, BasicAttribute.Dexterity],
  [BasicAttribute.Magic, BasicAttribute.Magic],
  [BasicAttribute.MagicResistance, BasicAttribute.MagicResistance],
]);

export interface IDecreaseSPResult {
  skillType: string;
  skillName: string;
  skillLevel: number;
  skillPoints: number;
  spToNextLevel: number;
}

export interface IIncreaseSPResult {
  skillLevelUp: boolean;
  skillLevel: number;
  skillName: string;
  skillPoints?: number;
  skillPointsToNextLevel?: number;
}

export interface IIncreaseXPResult {
  level: number;
  previousLevel: number;
  exp: number;
}

export interface IBasicAttributesBonusAndPenalties {
  strength: number;
  resistance: number;
  dexterity: number;
  magic: number;
  magicResistance: number;
}

export interface ICombatSkillsBonusAndPenalties {
  first: number;
  sword: number;
  dagger: number;
  axe: number;
  distance: number;
  shielding: number;
  club: number;
}

export interface ICraftingGatheringSkillsBonusAndPenalties {}
