import { SOCKET_TRANSMISSION_ZONE_HEIGHT, SOCKET_TRANSMISSION_ZONE_WIDTH } from "../constants/socket.constants";
import { GRID_HEIGHT, GRID_WIDTH } from "../constants/world.constants";
import { ISocketTransmissionZone } from "../types/socket.types";

export const calculateSocketTransmissionZone = (
  entityX: number,
  entityY: number,
  entityWidth: number = GRID_WIDTH,
  entityHeight: number = GRID_HEIGHT,
  zoneWidth: number = SOCKET_TRANSMISSION_ZONE_WIDTH,
  zoneHeight: number = SOCKET_TRANSMISSION_ZONE_HEIGHT
): ISocketTransmissionZone => {
  // example: if zone width is 60 grid cells, we'd have 30 grid cells on each side of the entity as a zone
  return {
    x: entityX - zoneWidth / 2 + entityWidth / 2,
    y: entityY - zoneHeight / 2 + entityHeight / 2,
    width: entityX + zoneWidth / 2 - entityWidth / 2,
    height: entityY + zoneHeight / 2 - entityHeight / 2,
  };
};
