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

export interface ISendFriendRequestReadPayload {
  friendRequests?: ICharacter[];
  error?: string;
}
