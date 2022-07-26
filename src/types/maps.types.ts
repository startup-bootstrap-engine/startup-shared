export enum MapLayers {
  Ground = 0,
  OverGround = 1,
  Decoration = 2,
  Character = 3,
  OverCharacter = 4,
  Roof = 5,
}

export interface IMapMetadataTileset {
  name: string;
}

export interface IMapMetaData {
  name: string;
  hash: string;
  layers: string[];
  tileWidth: number;
  tileHeight: number;
  tilesets: IMapMetadataTileset[];
  width: number;
  height: number;
}

export const MAP_LAYERS = ["ground", "over-ground", "decoration", "character", "over-character", "roof"];

export enum MapSocketEvents {
  ChangeMap = "ChangeMap",
}
