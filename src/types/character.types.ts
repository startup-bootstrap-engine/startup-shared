import { AnimationDirection } from "./animation.types";
import { ICameraCoordinates } from "./player.types";
import { IResource } from "./resource.types";
import { IUser } from "./user.types";

export interface ICharacter extends IResource {
  _id: string;
  name: string;
  owner: IUser;
  health: number;
  mana: number;
  x: number;
  y: number;
  direction: AnimationDirection;
  class: CharacterClass;
  gender: CharacterGender;
  totalWeightCapacity: number;
  isOnline: boolean;
  cameraCoordinates: ICameraCoordinates;
  otherPlayersInView: string[];
  scene: string;
  channelId: string;
}

export enum CharacterClass {
  None = "None",
  Warrior = "Warrior",
  Berserker = "Berserker",
  Cleric = "Cleric",
  Sorcerer = "Sorcerer",
  Rogue = "Rogue",
  Hunter = "Hunter",
  Assassin = "Assassin",
}

export enum CharacterGender {
  Male = "Male",
  Female = "Female",
}
