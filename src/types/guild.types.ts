import { IResource } from "./resource.types";

export interface IGuildInfo extends IResource {
  name: string;
  tag: string;
  coatOfArms: string;
  guildLeader: string;
  members: IGuildMember[];
  territoriesOwned?: Array<{
    map: string;
    lootShare: number;
    controlPoint: boolean;
  }>;
  guildSkills: IGuildSkillsInfo[];
  guidLevel: number;
  upgradeTokens: number;
}

export interface IGuildMember {
  _id: string;
  name: string;
  class: string;
}

export interface IGuildSkillsInfo {
  name: string;
  level: number;
  xp: number;
}

export interface IGuildInfoRead {
  guildId: string | undefined;
  characterId?: string;
}

export interface IGuildCanCreate {
  isCreatable: boolean;
}

export interface IGuildForm {
  guildName: string;
  guildTag: string;
  guildCoatOfArms: string;
}

export interface IGuildValidate {
  characterId: string | undefined;
}

export interface IGuildManagementFromClient {
  guildId?: string;
  targetId?: string;
  leaderId?: string;
}

export interface IGuildDelete {
  id: string;
}

export interface IGuildPayload {
  id: string;
  tag: string;
  coatOfArms: string;
}

export interface IGuildLeave {
  guildId: string;
  memberId: string;
}

export interface IGuildUpdateSkillByTokens {
  skill: string;
}

export enum GuildSocketEvents {
  CreateGuild = "createGuild",
  GuildInfoOpen = "guildInfoOpen",
  CanCreateGuild = "canCreateGuild",
  GuildInfoRead = "guildInfoRead",
  CreateGuildValidate = "createGuildValidate",
  GuildAcceptInvite = "guildAcceptInvite",
  GuildInvite = "guildInvite",
  GuildDelete = "guildDelete",
  GuildInfoDelete = "guildInfoDelete",
  GuildMemberLeave = "guildMemberLeave",
  GuildUpdateSkillByTokens = "guildUpdateSkillByTokens",
}
