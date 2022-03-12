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
  fixedPath?: {
    endGridX: number;
    endGridY: number;
  };
}

export enum NPCMovementType {
  Random = "Random",
  FixedPath = "FixedPath",
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
}
