import { ICharacter } from "./character.types";

export interface IQuest {
  id: string;
  npcId: string;
  title: string;
  description: string;
  rewards: IQuestReward[];
  objectives: IQuestObjectiveKill[] | IQuestObjectiveInteraction[];
}

export interface IQuestReward {
  id: string;
  itemKeys: string[];
  spellKeys: string[];
  qty: number;
}

interface IQuestObjective {
  id: string;
  type: QuestType;
  status: QuestStatus;
}

export interface IQuestObjectiveKill extends IQuestObjective {
  killCount: number;
  killCountTarget: number;
  creatureKeys: string[];
}

export interface IQuestObjectiveInteraction extends IQuestObjective {
  targetNPCkey: string;
}

export interface IQuestRecord {
  id: string;
  character: ICharacter | string;
  objective: IQuestObjectiveKill | IQuestObjectiveInteraction | string;
}

export enum QuestType {
  Kill = "Kill",
  Interaction = "Interaction",
}

export enum QuestStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed",
}

/** REQUEST INTERFACES **/

export interface IGetQuests {
  npcId: string;
  status: QuestStatus;
}

export interface IQuestsResponse {
  npcId: string;
  quests: IQuest[];
}

export interface IChooseQuest {
  npcId: string;
  questId: string;
}

/** SOCKET EVENTS **/

export enum QuestSocketEvents {
  Started = "Started",
  Completed = "Completed",
  GetQuests = "GetQuests",
  ChooseQuest = "ChooseQuest",
}

export interface IQuestEventFromServer {
  characterId: string;
  npcId: string;
  questId: string;
}
