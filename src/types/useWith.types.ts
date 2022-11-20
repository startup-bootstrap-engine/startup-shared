import { ICharacter } from "./character.types";
import { EntityType } from "./entity.types";
import { IItem } from "./item.types";
import { MapLayers } from "./maps.types";

export interface IUseWithTileEffect {
  (item: IItem, targetTile: IUseWithTargetTile, character: ICharacter): Promise<void> | void;
}

export interface IUseWithItemEffect {
  (targetItem: IItem, originItem: IItem, character: ICharacter): Promise<void> | void;
}

export interface IItemUseWithEntity extends IItem {
  useWithItemEffect?: IUseWithItemEffect;
  useWithTileEffect?: IUseWithTileEffect;
}

export interface IValidUseWithResponse {
  originItem: IItem;
  targetItem?: IItem;
  useWithItemEffect?: IUseWithItemEffect;
  useWithTileEffect?: IUseWithTileEffect;
}

export interface IMagicItemUseWithEntity extends IItem {
  power: number;
  animationKey: string;
  projectileAnimationKey: string;
  minMagicLevelRequired: number;
}

export interface IUseWithTargetTile {
  x: number;
  y: number;
  map: string;
  layer: MapLayers;
}

export interface IUseWithItem {
  originItemId: string;
  targetItemId: string;
}

export interface IUseWithTile {
  originItemId: string;
  targetTile: IUseWithTargetTile;
}

export interface IUseWithEntity {
  itemId: string;
  entityId: string;
  entityType: EntityType;
}

/** SOCKET EVENTS **/

export enum UseWithSocketEvents {
  UseWithItem = "UseWithItem",
  UseWithTile = "UseWithTile",
  UseWithEntity = "UseWithEntity",
}
