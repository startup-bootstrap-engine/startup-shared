export enum MapLayers {
  Ground = 0,
  OverGround = 1,
  Decoration = 1.1,
  Character = 2,
  OverCharacter = 3,
  Roof = 4,
}

export const TiledLayerNames = {
  0: "ground",
  1: "over-ground",
  1.1: "decoration",
  2: "character",
  3: "over-character",
  4: "roof",
};

export const MAP_OBJECT_LAYERS = ["NPCs", "Transitions", "Items", "Roofs"];

export const MAP_LAYERS = ["ground", "over-ground", "decoration", "character", "over-character", "roof"];

export const MAP_LAYERS_TO_ID = {
  ground: 0,
  "over-ground": 1,
  decoration: 1.1,
  character: 2,
  "over-character": 3,
  roof: 4,
};

export const MAP_REQUIRED_LAYERS = [
  "Roofs",
  "roof",
  "over-character",
  "NPCs",
  "Transitions",
  "character",
  "Items",
  "decoration",
  "over-ground",
  "ground",
];

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

export enum MapSocketEvents {
  ChangeMap = "ChangeMap",
}
