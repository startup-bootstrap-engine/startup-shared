import { EntityType } from "./entity.types";

export interface IRawSpell {
  key: string;
  name: string;
  description: string;
  magicWords: string;
  manaCost: number;
  minMagicLevelRequired: number;
  requiredItem?: string;
}

export interface ISpellRead {
  magicLevel: number;
  spells: IRawSpell[];
}

export interface ISpellCast {
  magicWords: string;
  targetId?: string;
  targetType?: EntityType;
}

export enum SpellSocketEvents {
  LearnedSpellsRead = "LearnedSpellsRead",
  CastSpell = "CastSpell",
  IdentifyTarget = "IdentifyTarget",
  SpellDetails = "SpellDetails",
  LearnedSpells = "LearnedSpells"
}

export enum SpellsBlueprint {
  SelfHealingSpell = "self-healing-spell",
  FoodCreationSpell = "food-creation-spell",
  ArrowCreationSpell = "arrow-creation-spell",
  BoltCreationSpell = "bolt-creation-spell",
  BlankRuneCreationSpell = "blank-rune-creation-spell",
  SelfHasteSpell = "self-haste-spell",
  FireRuneCreationSpell = "fire-rune-creation-spell",
  HealRuneCreationSpell = "healing-rune-creation-spell",
  PoisonRuneCreationSpell = "poison-rune-creation-spell",
  DarkRuneCreationSpell = "dark-rune-creation-spell",
  GreaterHealingSpell = "greater-healing-spell",
  EnergyBoltRuneCreationSpell = "energy-bolt-rune-creation-spell",
  FireBoltRuneCreationSpell = "fire-bolt-rune-creation-spell",
  FireBoltCreationSpell = "fire-bolt-creation-spell",
  PoisonArrowCreationSpell = "poison-arrow-creation-spell",
  CorruptionRuneCreationSpell = "corruption-rune-creation-spell",
  SpellDivineProtection = "spell-divine-protection",
  SpellPhysicalShield = "spell-physical-shield",
  SpellEagleEyes = "spell-eagle-eyes",
  ThunderRuneCreationSpell = "thunder-rune-creation-spell",
  WarriorStunTarget = "warrior-stun-target",
  RogueStealth = "rogue-stealth-spell",
  BerserkerBloodthirst = "berserker-bloodthirst",
  RogueExecution = "rogue-execution",
  ManaRegenSpell = "auto-mana-regen",
  HealthRegenSell = "auto-health-regen",
  ManaShield = "mana-shield",
  FortifyDefense = "fortify-defense",
  BerserkerExecution = "berserker-execution",
  HunterQuickFire = "hunter-quick-fire",
  BerserkerFrenzy = "berserker-frenzy",
  DruidShapeshift = "druid-shapeshift",
  BerserkerRage = "berserker-rage",
  Focus = "focus",
  PowerStrike = "power-strike",
  CurseOfWeakness = "curse-of-weakness",
  EntanglingRoots = "entangling-roots",
}

export declare enum SpellCastingType {
  SelfCasting = "self-casting",
  RangedCasting = "ranged-casting"
}

export enum MagicsBlueprint {
  Rune = "rune",
  DarkRune = "dark-rune",
  FireRune = "fire-rune",
  HealRune = "heal-rune",
  PoisonRune = "poison-rune",
  ThunderRune = "thunder-rune",
  EnergyBoltRune = "energy-bolt-rune",
  FireBoltRune = "fire-bolt-rune",
  CorruptionRune = "corruption-rune",
}

export declare enum CharacterClass {
  None = "None",
  Warrior = "Warrior",
  Berserker = "Berserker",
  Druid = "Druid",
  Sorcerer = "Sorcerer",
  Rogue = "Rogue",
  Hunter = "Hunter"
}

export declare enum CombatSkill {
  First = "first",
  Sword = "sword",
  Dagger = "dagger",
  Axe = "axe",
  Distance = "distance",
  Shielding = "shielding",
  Club = "club"
}
export declare enum CraftingSkill {
  Fishing = "fishing",
  Mining = "mining",
  Lumberjacking = "lumberjacking",
  Cooking = "cooking",
  Alchemy = "alchemy",
  Blacksmithing = "blacksmithing"
}
export declare enum BasicAttribute {
  Strength = "strength",
  Resistance = "resistance",
  Dexterity = "dexterity",
  Magic = "magic",
  MagicResistance = "magicResistance"
}
export declare enum CharacterAttributes {
  Speed = "baseSpeed",
  MaxMana = "maxMana",
  MaxHealth = "maxHealth",
  AttackIntervalSpeed = "attackIntervalSpeed",
  Defense = "defense"
}

export interface ISpell {
  key: SpellsBlueprint;
  name: string;
  description: string;
  castingType: SpellCastingType;
  magicWords: string;
  manaCost: number;
  // castingAnimationKey: string;
  // targetHitAnimationKey: string;
  // projectileAnimationKey: string;
  minLevelRequired: number;
  minMagicLevelRequired: number;
  cooldown: number;
  requiredItem?: MagicsBlueprint;
  characterClass?: CharacterClass[];
  attribute?: BasicAttribute | CombatSkill | CraftingSkill | CharacterAttributes;
  maxDistanceGrid?: number;
  // usableEffect: (
  //   character: ICharacter,
  //   target?: ICharacter | INPC
  // ) => Promise<boolean> | Promise<void> | void | boolean;
}
