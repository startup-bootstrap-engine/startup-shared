import { IResource } from "./resource.types";
export enum ChatMessageType {
  Global = "Global",
  Private = "Private",
}

export interface IChatMessage extends IResource {
  emitter: {
    _id: string;
    name: string;
  };
  message: string;
  type: ChatMessageType;
}

export enum ChatSocketEvents {
  GlobalChatMessage = "GlobalChatMessage",
  PrivateChatMessage = "PrivateChatMessage",
}
