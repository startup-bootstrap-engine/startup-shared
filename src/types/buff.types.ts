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
      skipAllMessages?: boolean;
      skipActivationMessage?: boolean;
      skipDeactivationMessage?: boolean;
      activation?: string;
      deactivation?: string;
    };
  };
}

export interface ICharacterPermanentBuff extends ICharacterBuff {
  durationType: "permanent";
}

export interface ICharacterTemporaryBuff extends ICharacterBuff {
  durationType: "temporary";
  durationSeconds: number;
}

export interface ICharacterItemBuff extends ICharacterPermanentBuff {
  itemId: string;
}
