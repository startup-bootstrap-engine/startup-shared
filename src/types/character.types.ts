import { AnimationDirection } from "./animation.types";
import { EntityAttackType, EntityType, IEntityBasicInfo } from "./entity.types";
import { MapLayers } from "./maps.types";
import { IResource } from "./resource.types";
import { ISkill } from "./skills.types";
import { IUser } from "./user.types";

export interface ICharacter extends IResource {
  name: string;
  owner: IUser;
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  x: number;
  y: number;
  direction: AnimationDirection;
  class: CharacterClass;
  gender: CharacterGender;
  totalWeightCapacity: number;
  isOnline: boolean;
  layer: MapLayers;
  scene: string;
  channelId: string;
  speed: number;
  movementIntervalMs: number;
  lastMovement: Date;
  isBanned: boolean;
  penalty: number;
  banRemovalDate: Date;
  hasPermanentBan: Date;
  skills: ISkill;
  target?: {
    id: string;
    type: EntityType;
  } | null;
  attackType: EntityAttackType;
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

export interface ICharacterCreateFromClient {
  id: string; // will be validated server side
  channelId: string;
}

export interface ICharacterCreateFromServer {
  id: string; // will be validated server side
  channelId: string;
  name: string;
  x: number;
  y: number;
  direction: AnimationDirection;
  layer: MapLayers;
  speed: number;
  movementIntervalMs: number;
}
export interface ICharacterPositionUpdateFromClient {
  id: string; // will be validated server side
  x: number;
  y: number;
  newX: number;
  newY: number;
  direction: AnimationDirection;
  otherEntitiesInView: IEntitiesInView;
}
export interface ICharacterPositionUpdateFromServer {
  id: string; // will be validated server side
  x: number;
  y: number;
  newX: number;
  newY: number;
  otherEntitiesInView: IEntitiesInView;

  name: string;
  direction: AnimationDirection;
  isMoving: boolean;
  layer: MapLayers;
  channelId: string;
  speed: number;
  movementIntervalMs: number;
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
