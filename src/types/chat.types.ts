import { IResource } from "./resource.types";

export enum ChatMessageType {
  Global = "Global",
  Private = "Private",
}

export enum ChatSocketEvents {
  GlobalChatMessageCreate = "GlobalChatMessageCreate",
  GlobalChatMessageRead = "GlobalChatMessageRead",
  PrivateChatMessageRead = "PrivateChatMessageRead",
  PrivateChatMessageCreate = "PrivateChatMessageCreate",
}

export interface IChatMessage extends IResource {
  emitter: {
    _id: string;
    name: string;
  };
  message: string;
  type: ChatMessageType;
}

export interface IChatMessageCreatePayload {
  emitter: {
    _id: string;
    name: string;
  };
  message: string;
  type: ChatMessageType;
  limit: number;
}

export interface IChatMessageReadPayload {
  messages: IChatMessage[];
}

export interface IPrivateChatMessage extends IResource {
  emitter: {
    _id: string;
    name: string;
  };
  message: string;
  receiver: {
    _id: string;
    name: string;
  };
}

export interface IPrivateChatMessageCreatePayload {
  emitter: {
    _id: string;
    name: string;
  };
  receiver: {
    _id: string;
    name: string;
  };
  message: string;
  limit: number;
}
