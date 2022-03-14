import { AnimationDirection } from "./animation.types";
import { CharacterClass, CharacterGender } from "./character.types";
import { MapLayers } from "./maps.types";
import { IResource } from "./resource.types";

export interface INPC extends IResource {
  name: string;
  x: number;
  y: number;
  direction: AnimationDirection;
  scene: string;
  class: CharacterClass;
  gender: CharacterGender;
  layer: MapLayers;
  maxRangeInGridCells?: number;
  movementType: NPCMovementType;
  alignment: NPCAlignment;
  targetObject?: string;
  fixedPathOrientation?: FixedPathOrientation;
  fixedPath?: {
    endGridX: number;
    endGridY: number;
  };
  key: string;
  textureKey: string;
  pm2InstanceManager: number;
  socketTransmissionZone: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
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
}

export enum NPCSocketEvents {
  NPCPositionUpdate = "NPCPositionUpdate",
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
}
