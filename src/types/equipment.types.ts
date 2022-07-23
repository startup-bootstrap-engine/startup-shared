import { ICharacter } from "./character.types";
import { IItem } from "./item.types";
import { IResource } from "./resource.types";

export interface IEquipementSet extends IResource {
  owner?: ICharacter | string;
  ownerRef?: string;
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
  totalEquippedAttack?: Promise<number>;
  totalEquippedDefense?: Promise<number>;
}
