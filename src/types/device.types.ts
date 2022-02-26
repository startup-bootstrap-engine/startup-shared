import { Languages } from "./translation.types";

interface IDeviceDetailedInfo {
  isVirtual: boolean;
  manufacturer: string;
  model: string;
  operatingSystem: string;
  osVersion: string;
  platform: string;
}

export interface IDeviceInfo {
  info: IDeviceDetailedInfo | null;
  screenOrientation: "landscape" | "portrait" | null;
  isAssetScreen: boolean | null;
  language: Languages | null;
}

export enum DeviceInfoActionTypes {
  updateDeviceInfo = "updateDeviceInfo",
}

export interface IDispatchUpdateDeviceInfo {
  type: DeviceInfoActionTypes.updateDeviceInfo;
  payload: IDeviceInfo;
}

export type DeviceAction = IDispatchUpdateDeviceInfo;
