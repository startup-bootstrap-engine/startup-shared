import { IResource } from "./resource.types";

export interface ISkill extends IResource {
  owner: string;
  level: number;
  xpGainRate: number;
  experience: number;
  stamina: number;
  magic: number;
  strength: number;
  resistence: number;
  dexterity: number;
  first: number;
  club: number;
  sword: number;
  axe: number;
  distance: number;
  shielding: number;
  fishing: number;
  mining: number;
  lumberjacking: number;
  cooking: number;
  alchemy: number;
  magicResistance: number;
}
