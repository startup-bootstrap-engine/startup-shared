import { IResource } from "./resource.types";

export interface IGuild extends IResource {
  name: string;
  tag: string;
  coatOfArms: string;
  guildLeader: string;
  members: string[];
  territoriesOwned?: Array<{
    map: string;
    lootShare: number;
    controlPoint: boolean;
  }>;
  guildSkills?: string;
}

export interface IGuildInfoRead {
  guildId: string | undefined;
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

export enum GuildSocketEvents {
  CreateGuild = "createGuild",
  GuildInfoOpen = "guildInfoOpen",
  CanCreateGuild = "canCreateGuild",
  GuildInfoRead = "guildInfoRead",
  CreateGuildValidate = "createGuildValidate",
  GuildAcceptInvite = "guildAcceptInvite",
  GuildInvite = "guildInvite",
}
