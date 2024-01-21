import { ICharacter } from "./character.types";

export enum FriendsSocketEvents {
  SendFriendRequest = "SendFriendRequest",
  ReceiveFriendRequest = "ReceiveFriendRequest",
  AcceptFriendRequest = "AcceptFriendRequest",
  RemoveFriend = "RemoveFriend",
}

export interface IFriendActionCreatePayload {
  characterId: string;
}

export interface IFriendsNetworkAcceptFriendRequestPayload {
  friends: ICharacter[];
  friendRequests: ICharacter[];
}

export interface IFriendsNetworkRemoveFriendPayload {
  friends: ICharacter[];
}

export interface ISendFriendRequestReadPayload {
  friendRequests?: ICharacter[];
  error?: string;
}
