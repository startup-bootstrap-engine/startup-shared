import { AnimationDirection } from "./animation.types";
import { CharacterClass, CharacterGender, ICharacter } from "./character.types";
import { MapLayers } from "./maps.types";
import { IResource } from "./resource.types";

export interface INPC extends IResource {
  key: string;
  textureKey: string;
  name: string;
  x: number;
  y: number;
  health: number;
  mana: number;
  direction: AnimationDirection;
  scene: string;
  class: CharacterClass;
  gender: CharacterGender;
  layer: MapLayers;
  maxRangeInGridCells?: number;
  originalMovementType: NPCMovementType;
  currentMovementType: NPCMovementType;
  alignment: NPCAlignment;
  targetType: NPCTargetType;
  targetCharacter?: ICharacter | null;
  fixedPathOrientation?: FixedPathOrientation;
  fixedPath?: {
    endGridX: number;
    endGridY: number;
  };
  pm2InstanceManager: number;
  speed: number;
}

export enum NPCTargetType {
  Default = "Default",
  Talking = "Talking",
}

export enum NPCAlignment {
  Friendly = "Friendly",
  Neutral = "Neutral",
  Hostile = "Hostile",
}

export enum FixedPathOrientation {
  Forward = "Forward",
  Backward = "Backward",
}

export enum NPCMovementType {
  Random = "Random",
  FixedPath = "FixedPath",
  Stopped = "Stopped",
  MoveAway = "MoveAway",
  MoveTowards = "MoveTowards",
}

export enum NPCSocketEvents {
  NPCDataUpdate = "NPCDataUpdate",
  NPCPositionUpdate = "NPCPositionUpdate",
  NPCTalkToNPC = "NPCTalkToNPC",
  NPCStartDialogNPC = "NPCStartDialogNPC",
  NPCStopDialogNPC = "NPCStopDialogNPC",
}

export interface INPCPositionUpdatePayload {
  id: string;
  name: string;
  x: number;
  y: number;
  direction: string;
  key: string;
  layer: MapLayers;
  textureKey: string;
  scene: string;
  speed: number;
}

export interface INPCDataUpdatePayload {
  [key: string]: any;
}

export interface INPCGetInfoEmitterClient {
  npcId: string;
}

export interface INPCGetInfoEmitterServer extends INPC {}

export interface INPCStartDialog {
  npcId: string;
  dialogText: string;
}

export interface INPCStopDialog {
  npcId: string;
}
