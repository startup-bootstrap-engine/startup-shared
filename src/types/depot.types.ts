/** REQUEST INTERFACES **/

export interface IDepotContainerOpen {
  npcId: string;
}

export interface IDepotContainerWithdraw {
  itemId: string;
  npcId: string;
  toContainerId: string;
}

export interface IDepotDepositItem {
  itemId: string;
  npcId: string;
  fromContainerId?: string;
}

/** SOCKET EVENTS **/

export enum DepotSocketEvents {
  OpenContainer = "OpenContainer",
  Deposit = "Deposit",
  Withdraw = "Withdraw",
}
