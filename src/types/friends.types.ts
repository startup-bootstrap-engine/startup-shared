export enum FriendsSocketEvents {
  SendFriendRequest = "SendFriendRequest",
  AcceptFriendRequest = "AcceptFriendRequest",
  RejectFriendRequest = "RejectFriendRequest",
}

export interface IFriendRequestActionCreatePayload {
  characterId: string;
}

export interface IFriendRequestActionReadPayload {
  characterId?: string;
  error?: string;
}
