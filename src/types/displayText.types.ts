export interface IDisplayTextEvent {
  value: string | number;
  targetId: string;
  prefix?: string;
  color?: string;
  fontSize?: number;
}

export enum DisplayTextSocketEvents {
  DisplayText = "DisplayText",
}