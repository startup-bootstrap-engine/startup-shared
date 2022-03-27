import { AnimationDirection } from "./animation.types";
import { IEntityBasicInfo } from "./entity.types";
import { MapLayers } from "./maps.types";
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
  scene: string;
  channelId: string;
  layer: MapLayers;
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

//@ts-ignore
export enum CharacterSocketEvents {
  CharacterCreate = "CharacterCreate",
  CharacterPositionUpdate = "CharacterPositionUpdate",
  CharacterPositionUpdateConfirm = "CharacterPositionUpdateConfirm",
  CharacterLogout = "CharacterLogout",
  CharacterPrivateMessage = "CharacterPrivateMessage",
  CharacterPing = "CharacterPing",
  CharacterForceDisconnect = "CharacterForceDisconnect",
}

export interface ICharacterPing {
  // just to tell the server you're still alive
  id: string;
}

export interface ICharacterPositionUpdateConfirm {
  id: string;
  direction: string;
  isValid: boolean;
}

export type Events = CharacterSocketEvents;

export interface ICharacterPositionUpdate {
  id: string;
  x: number;
  y: number;
  newX: number;
  newY: number;
  otherEntitiesInView: IEntitiesInView;
}

export interface IEntitiesInView {
  [id: string]: IEntityBasicInfo;
}

export interface ICharacterLogout {
  id: string;
}

export interface ICameraCoordinates {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ICharacterForceDisconnect {
  reason: string;
}
