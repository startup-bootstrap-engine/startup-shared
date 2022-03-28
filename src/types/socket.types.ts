export enum SocketTypes {
  TCP = "TCP",
  UDP = "UDP",
}
export interface ISocket {
  init: (socketType?: SocketTypes) => Promise<void> | void;
  onConnect?: (callback) => void;
  emitToUser<T>(channel: string, eventName: string, data?: T);
  emitToAllUsers<T>(eventName: string, data?: T): void;
}

export interface ISocketTransmissionZone {
  x: number;
  y: number;
  width: number;
  height: number;
}
