import { IEntityBasicInfo } from "./entity.types";

//@ts-ignore
export enum PlayerSocketEvents {
  PlayerCreate = "PlayerCreate",
  PlayerPositionUpdate = "PlayerPositionUpdate",
  PlayerPositionUpdateConfirm = "PlayerPositionUpdateConfirm",
  PlayerLogout = "PlayerLogout",
  PlayerPrivateMessage = "PlayerPrivateMessage",
  PlayerPing = "PlayerPing",
  PlayerForceDisconnect = "PlayerForceDisconnect",
}

export interface IPlayerPing {
  // just to tell the server you're still alive
  id: string;
}

export interface IPlayerPositionUpdateConfirm {
  id: string;
  direction: string;
  isValid: boolean;
}

export type Events = PlayerSocketEvents;

export interface IConnectedPlayer {
  id: string;
  name: string;
  x: number;
  y: number;
  channelId: string;
  direction?: string;
  isMoving?: boolean;
  cameraCoordinates: ICameraCoordinates;
  otherEntitiesInView: IEntityBasicInfo[];
}

export interface IConnectedPlayers {
  [id: string]: IConnectedPlayer;
}

export interface PlayerLogoutPayload {
  id: string;
}

export interface ICameraCoordinates {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface IPlayerForceDisconnect {
  reason: string;
}
