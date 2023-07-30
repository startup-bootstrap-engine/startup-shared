import { CharacterClass } from "./character.types";

export interface IPartyManagementFromClient {
  targetId?: string;
  leaderId?: string;
}

export enum PartySocketEvents {
  InviteOrCreate = "inviteOrCreate",
  PartyInvite = "partyInvite",
  AcceptInvite = "acceptInvite",
  LeaveParty = "leaveParty",
  PartyInfoRead = "partyInfoRead",
  PartyInfoOpen = "partyInfoOpen",
  TransferLeadership = "transferLeadership",
  Create = "create",
  Invite = "invite",
}

export interface ICharacterPartyChange {
  leader: {
    name: string;
  };
  members: Array<{
    name: string;
  }>;
  maxSize: number;
  benefits?: Array<{
    benefit: string;
    value: number;
  }>;
}

export enum CharacterPartyBenefits {
  Experience = "experience",
  DropRatio = "drop-ratio",
  Skill = "skill",
  Distribution = "distribution",
}

export interface ICharacterPartyShared {
  id?: string;
  leader: {
    _id: string;
    class: CharacterClass;
    name: string;
  };
  members: {
    _id: string;
    class: CharacterClass;
    name: string;
  }[];
  maxSize: number;
  size?: number;
  benefits?: {
    benefit: CharacterPartyBenefits;
    value: number;
  }[];
}

// Different classes members + leader
export enum CharacterPartyEXPBonus {
  One = 20,
  Two = 30,
  Three = 40,
  Four = 50,
  Five = 60,
}

// number os total members + leader
export enum CharacterPartyDropBonus {
  None = 0,
  Two = 6,
  Three = 9,
  Four = 12,
  Five = 15,
}

// number os total members + leader
export enum CharacterPartySkillBonus {
  None = 0,
  Two = 4,
  Three = 6,
  Four = 8,
  Five = 10,
}

// number os total members + leader
export enum CharacterPartyDistributionBonus {
  None = 1,
  Two = 0.5,
  Three = 0.33,
  Four = 0.25,
  Five = 0.2,
}
