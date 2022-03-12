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
  fixedPath?: {
    startGridX: number;
    startGridY: number;
    endGridX: number;
    endGridY: number;
  };
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
