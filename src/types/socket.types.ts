export enum SocketTypes {
  TCP = "TCP",
  UDP = "UDP",
}
export interface ISocket {
  init: (socketType?: SocketTypes) => Promise<void> | void;
  onConnect?: (callback) => void;
  emitToUser<T>(channel: string, eventName: string, data?: T, reliable?: boolean);
  emitToAllUsers<T>(eventName: string, data?: T): void;
}
