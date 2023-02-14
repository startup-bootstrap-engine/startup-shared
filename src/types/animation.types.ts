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
  LevelUp = "level-up",
  LifeHeal = "life-heal",
  ManaHeal = "mana-heal",
  SkillLevelUp = "new-skill",
  Poison = "poison",
  // battle
  Hit = "hit",
  HitBlue = "hit-blue",
  HitDark = "hit-dark",
  HitFire = "hit-fire",
  HitHeal = "hit-heal",
  HitPoison = "hit-poison",
  HitCorruption = "hit-corruption",
  // projectiles
  Blue = "blue",
  Green = "green",
  Red = "red",
  Energy = "energy",
  Dark = "dark",
  FireBall = "fireball",
  Arrow = "arrow",
  Heal = "heal",
  Corruption = "corruption",
}
