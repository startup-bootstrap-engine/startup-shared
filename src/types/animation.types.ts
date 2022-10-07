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

export interface IAnimationEffect {
  targetId: string;
  effectKey: string;
}

export enum AnimationSocketEvents {
  ShowAnimation = "ShowAnimation",
}

export enum AnimationEffectKeys {
  ItemConsumed = "ItemConsumed",
  SkillIncreased = "SkillIncreased",
}
