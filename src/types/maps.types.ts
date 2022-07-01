export enum MapLayers {
  Ground = 0,
  OverGround = 1,
  Character = 2,
  OverCharacter = 3,
}

interface IMapMetadataTileset {
  name: string;
  imagePath: string;
}

export interface IMapMetaData {
  hash: string;
  layers: string[];
  tileWidth: number;
  tileHeight: number;
  tilesets: IMapMetadataTileset[];
}

export const MAP_LAYERS = ["ground", "over-ground", "character", "over-character"];
