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
