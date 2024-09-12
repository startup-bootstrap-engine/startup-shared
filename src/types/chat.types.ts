import { ICharacter } from "./character.types";
import { IResource } from "./resource.types";

export enum ChatMessageType {
  Global = "Global",
  Private = "Private",
  Guild = "Guild",
}

export enum ChatSocketEvents {
  GlobalChatMessageCreate = "GlobalChatMessageCreate",
  GlobalChatMessageRead = "GlobalChatMessageRead",
  PrivateChatMessageRead = "PrivateChatMessageRead",
  PrivateChatMessageCreate = "PrivateChatMessageCreate",
  PrivateChatMessageFindCharacter = "PrivateChatMessageFindCharacter",
  PrivateChatMessageGetUnseenMessageCharacters = "PrivateChatMessageGetUnseenMessageCharacters",
  TradeChatMessageCreate = "TradeChatMessageCreate",
  TradeChatMessageRead = "TradeChatMessageRead",
  GuildChatMessageRead = "GuildChatMessageRead",
  GuildChatMessageCreate = "GuildChatMessageCreate",
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
  status: ChatMessageStatus;
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
  status: ChatMessageStatus;
}

export enum ChatMessageStatus {
  Unseen = "Unseen",
  Seen = "Seen",
}

export interface IPrivateChatMessageReadPayload {
  receiverId: string;
}

export interface IPrivateChatMessageReadResponse {
  messages: IPrivateChatMessage[];
}

export interface IPrivateChatFindCharacterResponse {
  characters: ICharacter[];
}

export interface ITradeChatMessage extends IResource {
  emitter: {
    _id: string;
    name: string;
  };
  message: string;
}

export interface ITradeChatMessageCreatePayload {
  emitter: {
    _id: string;
    name: string;
  };
  message: string;
  limit: number;
}
