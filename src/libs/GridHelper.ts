import { GRID_HEIGHT, GRID_WIDTH } from "../constants/world.constants";

export const ToGridX = (x: number): number => Math.floor(x / GRID_WIDTH);
export const ToGridY = (y: number): number => Math.floor(y / GRID_HEIGHT);

export const FromGridX = (gridX: number): number => gridX * GRID_WIDTH;
export const FromGridY = (gridY: number): number => gridY * GRID_HEIGHT;
