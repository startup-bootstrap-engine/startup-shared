export enum UISocketEvents {
  ShowMessage = "ShowMessage",
}

export type UIMessageType = "info" | "warning" | "error";

export interface IUIShowMessage {
  message: string;
  type: UIMessageType;
}
