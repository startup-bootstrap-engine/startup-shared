import { ICharacter } from "./character.types";
import { IItem } from "./item.types";
import { IResource } from "./resource.types";

export interface IEquipmentSet extends IResource {
  owner?: ICharacter | string;
  head?: IItem | string;
  neck?: IItem | string;
  leftHand?: IItem | string;
  rightHand?: IItem | string;
  ring?: IItem | string;
  legs?: IItem | string;
  boot?: IItem | string;
  armor?: IItem | string;
  accessory?: IItem | string;
  inventory?: IItem | string;
}

export enum EquipmentSocketEvents {
  Unequip = "Unequip",
  ContainerOpen = "EquipmentOpen",
  ContainerRead = "EquipmentRead",
  GetEquipmentInfo = "GetEquipmentInfo",
  ReadEquipmentInfo = "ReadEquipmentInfo",
  EquipmentUpdate = "EquipmentUpdate",
}

export interface IEquipmentRead {
  equipment: IEquipmentSet;
}

interface IStringIndex {
  [key: string]: any;
}
export const EquipmentSocketEventsDisplayLabels: IStringIndex = {
  [EquipmentSocketEvents.Unequip]: "Unequip",
  [EquipmentSocketEvents.GetEquipmentInfo]: "Look",
  [EquipmentSocketEvents.ReadEquipmentInfo]: "Inspect",
  [EquipmentSocketEvents.ContainerOpen]: "Open",
  [EquipmentSocketEvents.ContainerRead]: "Read",
};
