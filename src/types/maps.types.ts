export enum MapLayers {
  Ground = 0,
  OverGround = 1,
  Decoration = 2,
  Character = 3,
  OverCharacter = 4,
  Roof = 5,
}

export const TiledLayerNames = {
  0: "ground",
  1: "over-ground",
  2: "decoration",
  3: "character",
  4: "over-character",
  5: "roof",
};

export const MAP_OBJECT_LAYERS = ["NPCs", "Transitions", "Items", "Roofs"];

export const MAP_LAYERS = ["ground", "over-ground", "decoration", "character", "over-character", "roof"];

export const MAP_LAYERS_TO_ID = {
  ground: 0,
  "over-ground": 1,
  decoration: 2,
  character: 3,
  "over-character": 4,
  roof: 5,
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

export enum MapLighteningType {
  Static = "Static",
  Dynamic = "Dynamic",
}

export interface IMapMetaData {
  key: string;
  name: string;
  version: number;
  layers: string[];
  tileWidth: number;
  tileHeight: number;
  tilesets: IMapMetadataTileset[];
  width: number;
  height: number;
  lightening?: {
    type: MapLighteningType;
    value?: number;
  };
}

export enum MapSocketEvents {
  ChangeMap = "ChangeMap",
  NonPVPZone = "NonPVPZone",
  SameMapTeleport = "SameMapTeleport",
}

export interface IMapDestination {
  map: string;
  gridX: number;
  gridY: number;
}

export enum PeriodOfDay {
  Morning = "Morning",
  Afternoon = "Afternoon",
  Night = "Night",
}

export const WEATHER_OF_DAY = ["Standard", "Raining", "Clouding"];
export interface IControlTime {
  time: string;
  period: string;
  weather: string;
}

export enum WeatherSocketEvents {
  TimeWeatherControl = "TimeWeatherControl",
}
