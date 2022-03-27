import { GRID_HEIGHT, GRID_WIDTH } from "../constants/world.constants";
import { AnimationDirection } from "../types/animation.types";

export const ToGridX = (x: number): number => Math.round(x / GRID_WIDTH);
export const ToGridY = (y: number): number => Math.round(y / GRID_HEIGHT);

export const FromGridX = (gridX: number): number => Math.round(gridX * GRID_WIDTH);
export const FromGridY = (gridY: number): number => Math.round(gridY * GRID_HEIGHT);

interface INewCalculatedPosition {
  x: number;
  y: number;
}

export const calculateNewPositionXY = (
  x: number,
  y: number,
  moveToDirection: AnimationDirection
): INewCalculatedPosition => {
  switch (moveToDirection) {
    case "down":
      return {
        x,
        y: y + GRID_HEIGHT,
      };
    case "up":
      return {
        x,
        y: y - GRID_HEIGHT,
      };
    case "left":
      return {
        x: x - GRID_WIDTH,
        y,
      };
    case "right":
      return {
        x: x + GRID_WIDTH,
        y,
      };
  }
};
