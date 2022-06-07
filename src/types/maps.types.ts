export interface IMap {
  JSONKey: string;
  imageKey: string;
  layers: string[];
  tileWidth: number;
  tileHeight: number;
  imagePath: string;
  jsonPath: string;
  zipPath: string;
  tilesetName: string;
}

export enum MapLayers {
  Ground = 0,
  OverGround = 1,
  Character = 2,
  OverCharacter = 3,
}
