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

type TopSkillEntry = {
  name: string;
  skill: string;
  level: number;
};

export enum LeaderboardSocketEvents {
  GetInfo = "LeaderboardGetAllRankings",
}

export interface ILeaderboardRankingResponse {
  levelRank: Set<TopCharacterEntry>;
  classRank: Record<string, CharacterRankingClass>;
  skillRank: CharacterRankingSkill[];
}
