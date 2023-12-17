import { CharacterClass, CharacterRaces } from "./character.types";
import { EntityType } from "./entity.types";
import { SpellCastingType } from "./item.types";
import { UserAccountTypes } from "./premiumAccount.types";
import { BasicAttribute, CharacterAttributes, CombatSkill, CraftingSkill } from "./skills.types";

export interface IRawSpell {
  key: string;
  name: string;
  description: string;
  magicWords: string;
  manaCost: number;
  minMagicLevelRequired: number;
  requiredItem?: string;
  texturePath?: string;
  atlasIMG?: any;
  atlasJSON?: any;
}

export interface ISpellRead {
  magicLevel: number;
  spells: IRawSpell[];
}

export interface ILearnedSpellsRead {
  magicLevel: number;
  learnedSpells: ISpell[];
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
  LearnedSpells = "LearnedSpells",
  SpellCooldownsRead = "SpellCooldownsRead",
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
  SpellPolymorph = "spell-polymorph",
  PickPocket = "pick-pocket",
  DruidSilence = "druid-silence",
  ManaDrain = "mana-drain",
  FrostArrowCreation = "frost-arrow-creation",
  CrimsonArrowCreation = "crimson-arrow-creation",
  EmeraldArrowCreation = "emerald-arrow-creation",
  FireBolt = "fire-bolt",
  FrostBolt = "frost-bolt",
  CorruptionBolt = "corruption-bolt",
  VineGrasp = "vine-grasp",
  MagicShuriken = "magic-shuriken",
  SorcererVeilofUndeath = "veil-of-undeath",
  Teleport = "teleport",
  DwarfStoneform = "dwarf-stone-form",
  ElvenArrow = "elven-arrow",
  ChefsDelight = "chefs-delight",
  OrcDispelMagic = "dispel-magic",
  MinotaurBullStrength = "minotaur-bull-strength",
  FireStorm = "fire-storm",
  MassHealing = "mass-healing",
  FocusSwift = "focus-swift",
  Blizzard = "blizzard",
  Arrowstorm = "arrowstorm",
  OrcArrowStorm = "orc-arrowstorm",
  WildfireVolley = "wildfire-volley",
  NaturesRevenge = "natures-revenge",
  BleedingEdge = "bleeding-edge",
  ArcaneExplosion = "arcane-explosion",
  VampiricStorm = "vampiric-storm",
  CorruptionWave = "corruption-wave",
  CleavingStomp = "cleaving-stomp",
  ShieldBash = "shield-bash",
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
  WildwoodTeleport = "wildwood-teleport",
  DungeonIlyaTeleport = "dungeon-ilya-teleport",
  DwarfMinesTeleport = "dwarf-mines-teleport",
  FrostIslandCavesTeleport = "frost-island-caves-teleport",
  FrozenCastleDungeonTeleport = "frozen-castle-dungeon-teleport",
  FrozenIslandTeleport = "frozen-island-teleport",
  MinotaursIslandTeleport = "minotaurs-island-teleport",
  RavenfallSanctuaryTeleport = "ravenfall-sanctuary-teleport",
  ShadowlandsSewerTeleport = "shadowlands-sewer-teleport",
  ShadowlandsTeleport = "shadowlands-teleport",
  TrollsCavesTeleport = "trolls-caves-teleport",
  WildwoodDungeonTeleport = "wildwood-dungeon-teleport",
}

export interface ISpell {
  key: SpellsBlueprint;
  name: string;
  description: string;
  textureAtlas?: string;
  texturePath?: string;
  castingType: SpellCastingType;
  magicWords: string;
  manaCost: number;
  castingAnimationKey: string;
  targetHitAnimationKey: string;
  projectileAnimationKey: string;
  onlyPremiumAccountType: UserAccountTypes[];
  minLevelRequired: number;
  minMagicLevelRequired: number;
  cooldown: number;
  requiredItem?: string;
  characterClass?: CharacterClass[];
  characterRace?: CharacterRaces[];
  attribute?: BasicAttribute | CombatSkill | CraftingSkill | CharacterAttributes;
  maxDistanceGrid?: number;
  usableEffect: (character, target?) => Promise<boolean> | Promise<void> | void | boolean;
  canSelfTarget?: boolean;
}
