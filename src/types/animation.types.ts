export interface IEntityAnimation {
  movement: IEntityMovementAnimation;
  death: IEntityDeathAnimation;
}

export type AnimationDirection = "down" | "up" | "left" | "right";

export interface IEntityDeathAnimation {
  [direction: string]: {
    frames: number[];
  };
}
export interface IEntityMovementAnimation {
  [direction: string]: {
    walking: number[];
    standing: number | number[];
  };
}
