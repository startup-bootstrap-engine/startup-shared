export enum MapLayers {
  Ground = 0,
  OverGround = 1,
  Character = 2,
  OverCharacter = 3,
  Roof = 4,
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
}

export const MAP_LAYERS = ["ground", "over-ground", "character", "over-character", "roof"];
