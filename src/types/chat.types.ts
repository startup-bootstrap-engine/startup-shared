import { IResource } from "./resource.types";
export enum ChatMessageType {
  Global = "Global",
  Private = "Private",
}

interface ICharacter {
  _id: string;
  name: string;
}

export interface IChatMessage extends IResource {
  emitter: ICharacter;
  message: string;
  type: ChatMessageType;
}

export enum ChatSocketEvents {
  GlobalChatMessage = "GlobalChatMessage",
  PrivateChatMessage = "PrivateChatMessage",
}
