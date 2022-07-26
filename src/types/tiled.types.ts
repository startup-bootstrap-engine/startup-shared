export interface ITiled {
  compressionlevel: number;
  height: number;
  infinite: boolean;
  layers: ITiledLayer[];
  nextlayerid: number;
  nextobjectid: number;
  orientation: string;
  renderorder: string;
  tiledversion: string;
  tileheight: number;
  tilesets: ITileset[];
  tilewidth: number;
  type: string;
  version: string;
  width: number;
}

export interface ITiledLayer {
  chunks: ITiledChunk[];
  height: number;
  id: number;
  name: string;
  opacity: number;
  properties: ILayerProperty[];
  startx: number;
  starty: number;
  type: string;
  visible: boolean;
  width: number;
  x: number;
  y: number;
  objects?: ITiledObject[];
}

export interface ITiledObject {
  height: number;
  id: number;
  name: string;
  properties: ITiledObjectProperty[];
  rotation: number;
  type: string;
  visible: boolean;
  width: number;
  x: number;
  y: number;
}

export interface ITiledObjectProperty {
  name: string;
  type: string;
  value: string;
}

export interface ITiledChunk {
  data: number[];
  height: number;
  width: number;
  x: number;
  y: number;
}

export interface ILayerProperty {
  name: string;
  type: string;
  value: string;
}

export interface ITileset {
  columns: number;
  firstgid: number;
  image: string;
  imageheight: number;
  imagewidth: number;
  margin: number;
  name: string;
  spacing: number;
  tilecount: number;
  tileheight: number;
  tiles: ITile[];
  tilewidth: number;
  wangsets: IWangset[];
}

export interface ITile {
  id: number;
  properties: ITileProperty[];
  animation?: ITileAnimation[];
}

export interface ITileAnimation {
  duration: number;
  tileid: number;
}

export interface ITileProperty {
  name: string;
  type: Type;
  value: boolean;
}

export enum Type {
  Bool = "bool",
}

export interface IWangset {
  colors: IColor[];
  name: string;
  tile: number;
  type: string;
  wangtiles: IWangTile[];
}

export interface IColor {
  color: string;
  name: string;
  probability: number;
  tile: number;
}

export interface IWangTile {
  tileid: number;
  wangid: number[];
}

export interface IGetTileXYResult {
  x: number;
  y: number;
}

export interface ITiledTile {
  id: number;
  properties: ITileProperty[];
}

export const TiledLayerNames = {
  0: "ground",
  1: "over-ground",
  2: "decoration",
  3: "character",
  4: "over-character",
  5: "roof",
};
