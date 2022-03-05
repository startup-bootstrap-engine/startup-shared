import { AnimationDirection } from "./animation.types";
import { CharacterClass, CharacterGender } from "./character.types";

export interface INPC {
  name: string;
  x: string;
  y: string;
  direction: AnimationDirection;
  scene: string;
  class: CharacterClass;
  gender: CharacterGender;
  texture: string;
}
