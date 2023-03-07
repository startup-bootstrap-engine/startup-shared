import { Types } from "mongoose";
import { AnimationDirection } from "./animation.types";
import { EntityAttackType, EntityType } from "./entity.types";
import { IEquipmentSet } from "./equipment.types";
import { IItem } from "./item.types";
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
  initialX: number;
  initialY: number;
  direction: AnimationDirection;
  class: CharacterClass;
  textureKey: string;
  totalWeightCapacity: number;
  isOnline: boolean;
  layer: MapLayers;
  scene: string;
  initialScene: string;
  channelId: string;
  otherEntitiesInView: any;
  speed: number;
  baseSpeed: number;
  weight: number;
  maxWeight: number;
  movementIntervalMs: number;
  baseMovementIntervalMs: number;
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
  attackIntervalSpeed: number;
  equipment?: IEquipmentSet | string;
  inventory: Promise<IItem | string>;
  type: string;
  isAlive: boolean;
}

export enum CharacterClass {
  None = "None",
  Warrior = "Warrior",
  Berserker = "Berserker",
  Druid = "Druid",
  Sorcerer = "Sorcerer",
  Rogue = "Rogue",
  Hunter = "Hunter",
}

export enum CharacterGender {
  Male = "Male",
  Female = "Female",
}

//@ts-ignore
export enum CharacterSocketEvents {
  CharacterRefresh = "CharacterRefresh",
  CharacterCreate = "CharacterCreate",
  CharacterPositionUpdate = "CharacterPositionUpdate",
  CharacterPositionUpdateAll = "CharacterPositionUpdateAll",
  CharacterPositionUpdateConfirm = "CharacterPositionUpdateConfirm",
  CharacterLogout = "CharacterLogout",
  CharacterPrivateMessage = "CharacterPrivateMessage",
  CharacterPing = "CharacterPing",
  CharacterForceDisconnect = "CharacterForceDisconnect",
  CharacterSyncPosition = "CharacterSyncPosition",
  Login = "Login",
  ItemConsumed = "ItemConsumed",
  AttributeChanged = "AttributeChanged",
}

export enum CharacterFactions {
  LifeBringer = "Life Bringer",
  ShadowWalker = "Shadow Walker",
}

export enum LifeBringerRaces {
  Human = "Human",
  Elf = "Elf",
  Dwarf = "Dwarf",
}

export enum ShadowWalkerRaces {
  Human = "Human",
  Orc = "Orc",
  Minotaur = "Minotaur",
}

export interface ICharacterPing {
  // tell the server you're still alive
  id: string;
}

export interface ICharacterSyncPosition {
  id: string;
  position: {
    originX: number;
    originY: number;
    direction: AnimationDirection;
  };
}

export interface ICharacterPositionUpdateConfirm {
  id: string;
  isValid: boolean;
  position: {
    originX: number;
    originY: number;
    direction: AnimationDirection;
  };
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
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  textureKey: string;
}
export interface ICharacterPositionUpdateFromClient {
  originX: number;
  originY: number;
  newX: number;
  newY: number;
  direction: AnimationDirection;
}
export interface ICharacterPositionUpdateFromServer {
  id: string; // will be validated server side
  x: number;
  y: number;
  newX: number;
  newY: number;
  name: string;
  direction: AnimationDirection;
  isMoving: boolean;
  layer: MapLayers;
  channelId: string;
  speed: number;
  movementIntervalMs: number;
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  textureKey: string;
}

export interface IAllCharacterPositionUpdateFromServer {
  nearbyCharacters: ICharacterPositionUpdateFromServer[];
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

export interface ICharacterTexture {
  textureDisplayName: string;
  textureKey: string;
  faction: string;
  race: string;
}

export interface ICharacterAttributeChanged {
  targetId: string;
  health?: number;
  mana?: number;
  speed?: number;
  maxMana?: number;
  maxHealth?: number;
}

export interface IAppliedBuffsEffect {
  _id: Types.ObjectId;
  key: string;
  value: number;
}
