import { IResource } from './resource.types';
export enum ChatMessageType {
  Global = "Global",
  Private = "Private",
}

export interface IChatMessage extends IResource{
  charId: string;
  message: string;
  type: ChatMessageType;
}
