import { CharacterTrait } from "./skills.types";

export enum CharacterBuffType {
  Skill = "skill",
  CharacterAttribute = "characterAttribute",
}

export enum CharacterBuffDurationType {
  Permanent = "permanent",
  Temporary = "temporary",
}

export interface ICharacterBuff {
  _id?: string;
  type: CharacterBuffType;
  trait: CharacterTrait; // A trait is a generic character characteristic, like a CombatSkill, CraftingSkill, BasicAttribute, Attribute, etc.
  buffPercentage: number;
  absoluteChange?: number;
  durationType: CharacterBuffDurationType;
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
  durationType: CharacterBuffDurationType.Permanent;
}

export interface ICharacterTemporaryBuff extends ICharacterBuff {
  durationType: CharacterBuffDurationType.Temporary;
  durationSeconds: number;
}

export interface ICharacterItemBuff extends ICharacterPermanentBuff {
  itemId: string;
  itemKey: string;
}
