import { EntityAttackType } from "./entity.types";
import { ItemSubType } from "./item.types";
import { IResource } from "./resource.types";

export enum SkillSocketEvents {
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
  blacksmithing: ISkillDetails;

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
  Character = "Character",
}

export enum CombatSkill {
  First = "first",
  Sword = "sword",
  Dagger = "dagger",
  Axe = "axe",
  Distance = "distance",
  Shielding = "shielding",
  Club = "club",
}

export enum CraftingSkill {
  Fishing = "fishing",
  Mining = "mining",
  Lumberjacking = "lumberjacking",
  Cooking = "cooking",
  Alchemy = "alchemy",
  Blacksmithing = "blacksmithing",
}

export enum BasicAttribute {
  Strength = "strength",
  Resistance = "resistance",
  Dexterity = "dexterity",
  Magic = "magic",
  MagicResistance = "magicResistance",
}

export enum CharacterAttributes {
  Speed = "baseSpeed",
  MaxMana = "maxMana",
  MaxHealth = "maxHealth",
  AttackIntervalSpeed = "attackIntervalSpeed",
  Defense = "defense",
}

export type CharacterTrait = CraftingSkill | CombatSkill | BasicAttribute | CharacterAttributes;

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
  [ItemSubType.Staff, BasicAttribute.Magic],
  [BasicAttribute.Strength, BasicAttribute.Strength],
  [BasicAttribute.Resistance, BasicAttribute.Resistance],
  [BasicAttribute.Dexterity, BasicAttribute.Dexterity],
  [BasicAttribute.Magic, BasicAttribute.Magic],
  [BasicAttribute.MagicResistance, BasicAttribute.MagicResistance],
  [CraftingSkill.Fishing, CraftingSkill.Fishing],
  [CraftingSkill.Cooking, CraftingSkill.Cooking],
  [CraftingSkill.Alchemy, CraftingSkill.Alchemy],
  [CraftingSkill.Lumberjacking, CraftingSkill.Lumberjacking],
  [CraftingSkill.Mining, CraftingSkill.Mining],
  [CraftingSkill.Blacksmithing, CraftingSkill.Blacksmithing],
]);

export const CHARACTER_ATTRIBUTES: CharacterAttributes[] = [
  CharacterAttributes.Speed,
  CharacterAttributes.MaxMana,
  CharacterAttributes.MaxHealth,
  CharacterAttributes.AttackIntervalSpeed,
];

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

export interface IDecreaseSPResult {
  skillType: string;
  skillName: string;
  skillLevel: number;
  skillPoints: number;
  spToNextLevel: number;
}

export interface IIncreaseSPResult {
  skillLevelUp: boolean;
  skillLevelBefore: number;
  skillLevelAfter: number;
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
  stamina: number;
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

export interface ICraftingSkillsBonusAndPenalties {
  fishing: number;
  mining: number;
  lumberjacking: number;
  cooking: number;
  alchemy: number;
  blacksmithing: number;
}
