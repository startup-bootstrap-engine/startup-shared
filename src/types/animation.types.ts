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
  targetId?: string;
  targetX?: number;
  targetY?: number;
  effectKey: string;
}

export interface IProjectileAnimationEffect {
  sourceId: string;
  targetId: string;
  projectileEffectKey: string;
  effectKey?: string;
}

export enum AnimationSocketEvents {
  ShowAnimation = "ShowAnimation",
  ShowProjectileAnimation = "ShowProjectileAnimation",
}

export enum AnimationEffectKeys {
  // battle-effects
  LevelUp = "level_up",
  LifeHeal = "life_heal",
  ManaHeal = "mana_heal",
  SkillLevelUp = "new_skill",
  Poison = "poison",
  // battle
  Hit = "hit",
  // projectiles
  Blue = "blue",
  Green = "green",
  Dark = "dark",
  FireBall = "fireball",
  Arrow = "arrow",
}
