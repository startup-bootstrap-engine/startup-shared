import { CharacterTrait } from "./skills.types";

export type BuffDurationType = "temporary" | "permanent";

export type BuffType = "skill" | "characterAttribute";

export interface ICharacterBuff {
  _id?: string; // it will receive an id when assigned on CharacterBuffTracker
  type: BuffType;
  trait: CharacterTrait; // A trait is a generic character characteristic, like a CombatSkill, CraftingSkill, BasicAttribute, Attribute, etc.
  buffPercentage: number;
  prevTraitValue?: number;
  durationType: BuffDurationType;
  options?: {
    messages?: {
      skipMessages?: boolean;
      activation?: string;
      deactivation?: string;
    };
  };
}
