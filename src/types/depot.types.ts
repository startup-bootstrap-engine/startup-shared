/** REQUEST INTERFACES **/

export interface IDepotContainerOpen {
  npcId: string;
}

/** SOCKET EVENTS **/

export enum DepotSocketEvents {
  OpenContainer = "OpenContainer",
}
