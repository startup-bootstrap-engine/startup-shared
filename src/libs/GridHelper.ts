import { GRID_HEIGHT, GRID_WIDTH } from "../constants/world.constants";

export const ToGridX = (x: number): number => Math.round(x / GRID_WIDTH);
export const ToGridY = (y: number): number => Math.round(y / GRID_HEIGHT);

export const FromGridX = (gridX: number): number => Math.round(gridX * GRID_WIDTH);
export const FromGridY = (gridY: number): number => Math.round(gridY * GRID_HEIGHT);
