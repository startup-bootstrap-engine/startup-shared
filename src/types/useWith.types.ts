import { EntityType } from "./entity.types";
import { MapLayers } from "./maps.types";

/** REQUEST INTERFACES **/
interface IPosition {
  x: number;
  y: number;
}

export interface IUseWithItem {
  originItemId: string;
  targetItemId: string;
}

export interface IUseWithTile {
  originItemId: string;
  targetTile: {
    x: number;
    y: number;
    map: string;
    layer: MapLayers;
  };
}

export interface IUseWithEntity {
  itemId: string;
  entityId: string;
  entityType: EntityType;
}

export interface IUseWithSeed {
  map: string;
  isFertileGround: boolean;
  coordinates: IPosition;
  itemKey: string;
  isEntity: boolean;
}

export interface IUseWithTileValidation {
  status: boolean;
}

/** SOCKET EVENTS **/

export enum UseWithSocketEvents {
  UseWithItem = "UseWithItem",
  UseWithTile = "UseWithTile",
  UseWithEntity = "UseWithEntity",
  UseWithTileValidation = "UseWithTileValidation",
  UseWithSeed = "UseWithSeed",
}
