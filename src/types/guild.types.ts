export type IGuild = {
  id: string;
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
};

export type IGuildInfoRead = {
  guildId: string | undefined;
};

export type IGuildCanCreate = {
  isCreatable: boolean;
};

export type IGuildForm = {
  guildName: string;
  guildTag: string;
  guildCoatOfArms: string;
};

export type IGuildValidate = {
  characterId: string | undefined;
};

export enum GuildSocketEvents {
  CreateGuild = "createGuild",
  GuildInfoOpen = "guildInfoOpen",
  CanCreateGuild = "canCreateGuild",
  GuildInfoRead = "guildInfoRead",
  CreateGuildValidate = "createGuildValidate",
}
