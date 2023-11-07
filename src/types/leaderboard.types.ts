import type { CharacterClass } from "./character.types";

export type IRankingTopCharacterEntry = {
  name: string;
  level: number;
};

export type IRankingCharacterClass = {
  class: CharacterClass;
  topPlayers: IRankingTopCharacterEntry[];
};

export type IRankingCharacterSkill = {
  skill: string;
  top10: IRankingTopSkillEntry[];
};

export type IRankingTopSkillEntry = {
  name: string;
  skill: string;
  level: number;
};

export interface ILeaderboardLevelRankingResponse {
  levelRank: IRankingTopCharacterEntry[];
}

export interface ILeaderboardClassRankingResponse {
  classRank?: Record<string, IRankingCharacterClass>;
}

export interface ILeaderboardSkillRankingResponse {
  skillRank: IRankingCharacterSkill[];
}

export enum LeaderboardSocketEvents {
  GetLevelRanking = "LeaderboardGetLevelRanking",
  GetClassRanking = "LeaderboardGetClassRanking",
  GetSkillRanking = "LeaderboardGetSkillRanking",
}
