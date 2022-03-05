import { AnimationDirection } from "./animation.types";
import { CharacterClass, CharacterGender } from "./character.types";

export interface INPC {
  name: string;
  x: number;
  y: number;
  direction: AnimationDirection;
  scene: string;
  class: CharacterClass;
  gender: CharacterGender;
  texture: string;
}
