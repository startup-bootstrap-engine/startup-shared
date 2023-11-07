import type { CharacterClass } from "./character.types";

export type TopCharacterEntry = {
  name: string;
  level: number;
};

export type CharacterRankingClass = {
  class: CharacterClass;
  topPlayers: TopCharacterEntry[];
};

export type CharacterRankingSkill = {
  skill: string;
  top10: TopSkillEntry[];
};

export type TopSkillEntry = {
  name: string;
  skill: string;
  level: number;
};

export interface ILeaderboardLevelRankingResponse {
  levelRank: Set<TopCharacterEntry>;
}

export interface ILeaderboardClassRankingResponse {
  classRank?: Record<string, CharacterRankingClass>;
}

export interface ILeaderboardSkillRankingResponse {
  skillRank: CharacterRankingSkill[];
}

export enum LeaderboardSocketEvents {
  GetLevelRanking = "LeaderboardGetLevelRanking",
  GetClassRanking = "LeaderboardGetClassRanking",
  GetSkillRanking = "LeaderboardGetSkillRanking",
}
