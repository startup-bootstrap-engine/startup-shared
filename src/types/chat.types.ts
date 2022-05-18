export enum ChatMessageType {
  Global = "Global",
  Private = "Private",
}

export interface IChatMessage {
  charId: string;
  menssage: string;
  type: ChatMessageType;
}
