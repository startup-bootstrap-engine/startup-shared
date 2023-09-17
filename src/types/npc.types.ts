import { AnimationDirection } from "./animation.types";
import { CharacterClass, CharacterGender, ICharacter } from "./character.types";
import { EntityAttackType } from "./entity.types";

import { MapLayers } from "./maps.types";
import { IResource } from "./resource.types";
import { ISkill } from "./skills.types";
import { ITraderItem } from "./trade.types";

export interface INPC extends IResource {
  tiledId?: number;
  key: string;
  textureKey: string;
  name: string;
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  alignment: NPCAlignment;
  targetType: NPCTargetType;
  targetCharacter?: ICharacter | null;
  x: number;
  y: number;
  initialX: number;
  initialY: number;
  direction: AnimationDirection;
  scene: string;
  class: CharacterClass;
  gender: CharacterGender;
  layer: MapLayers;
  attackType: EntityAttackType;
  originalMovementType: NPCMovementType;
  currentMovementType: NPCMovementType;
  maxRangeInGridCells?: number;
  maxRangedDistanceInGridCells?: number;
  pathOrientation?: NPCPathOrientation;
  fixedPath?: {
    endGridX: number;
    endGridY: number;
  };
  pm2InstanceManager: number;
  speed: number;
  dialogText: string;
  skills: ISkill | string;
  spawnIntervalMin: number;
  nextSpawnTime: Date;
  fleeOnLowHealth: boolean;
  experience?: number;
  xpToRelease?: { charId: number; xp: number }[];
  loots?: INPCLoot[];
  hasQuest?: boolean;
  hasDepot?: boolean;
  baseHealth?: number;
  healthRandomizerDice?: number;
  skillRandomizerDice?: number;
  skillsToBeRandomized?: string[];
  isTrader?: boolean;
  traderItem?: ITraderItem;
}

export enum NPCTargetType {
  Default = "Default",
  Talking = "Talking",
}

export enum NPCAlignment {
  Friendly = "Friendly",
  Neutral = "Neutral",
  Hostile = "Hostile",
}

export enum NPCPathOrientation {
  Forward = "Forward",
  Backward = "Backward",
}

export enum NPCMovementType {
  Random = "Random",
  FixedPath = "FixedPath",
  Stopped = "Stopped",
  MoveAway = "MoveAway",
  MoveTowards = "MoveTowards",
}

export enum NPCSocketEvents {
  NPCDataUpdate = "NPCDataUpdate",
  NPCPositionCreate = "NPCPositionCreate",
  NPCPositionUpdate = "NPCPositionUpdate",
  NPCPositionRequest = "NPCPositionRequest",
  NPCTalkToNPC = "NPCTalkToNPC",
  NPCStartDialogNPC = "NPCStartDialogNPC",
  NPCStopDialogNPC = "NPCStopDialogNPC",
  NPCAttributeChanged = "NPCAttributeChanged",
}

export interface INPCAttributeChanged {
  targetId: string;
  health?: number;
  mana?: number;
  speed?: number;
  maxMana?: number;
  maxHealth?: number;
  attackIntervalSpeed?: number;
  textureKey?: string;
  isGiantForm?: boolean;
}

export interface INPCPositionRequestPayload {
  type: "create" | "update";
  id: string;
}

export interface INPCPositionCreatePayload {
  id: string;
  name: string;
  x: number;
  y: number;
  direction: string;
  key: string;
  layer: MapLayers;
  textureKey: string;
  scene: string;
  speed: number;
  alignment: NPCAlignment;
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  hasQuest: boolean;
  hasDepot?: boolean;
  isTrader?: boolean;
  traderItems?: ITraderItem[];
  isGiantForm?: boolean;
}
export interface INPCPositionUpdatePayload {
  id: string;
  x: number;
  y: number;
  direction: string;
  alignment: NPCAlignment;
}

export enum NPCSubtype {
  Animal = "Animal",
  Bird = "Bird",
  Insect = "Insect",
  Undead = "Undead",
  Magical = "Magical",
  Humanoid = "Humanoid",
  Dragon = "Dragon",
  Elemental = "Elemental",
}

export interface INPCDataUpdatePayload {
  [key: string]: any;
}

export interface INPCGetInfoEmitterClient {
  npcId: string;
}

export interface INPCGetInfoEmitterServer extends INPC {}

export interface INPCStartDialog {
  npcId: string;
  dialogText: string;
}

export interface INPCStopDialog {
  npcId: string;
}

export interface INPCLoot {
  itemBlueprintKey: string;
  chance: number;
  quantityRange?: number[];
  raidKey?: string;
}
