import { IItem } from "./item.types";
import { IRawSpell } from "./spell.types";

export enum ShortcutType {
  Spell,
  Item,
  None,
}

export interface IShortcut {
  type: ShortcutType;
  payload: IRawSpell | IItem | null;
}
