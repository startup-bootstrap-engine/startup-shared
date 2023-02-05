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
}

export enum SpellSocketEvents {
  LearnedSpellsRead = "LearnedSpellsRead",
  CastSpell = "CastSpell",
}
