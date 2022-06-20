import { ICharacter } from "./character.types";
import { IItem } from "./item.types";
import { IItemContainer } from "./itemContainer.types";
import { IResource } from "./resource.types";

export interface IEquipementSet extends IResource {
    owner?: ICharacter | string;
    head?: IItem | string;
    neck?: IItem | string;
    leftHand?: IItem | string;
    rightHand?: IItem | string;
    ring?: IItem | string;
    legs?: IItem | string;
    boot?: IItem | string;
    armor?: IItem | string;
    acessory?: IItem | string;
    inventory: IItemContainer | string;
}