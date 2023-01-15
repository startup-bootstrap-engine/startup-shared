export const getSPForLevel = (level: number): number => {
  const baseSP = 100;
  const exponentialSP = Math.pow(level, 1.5) * 25;
  const logarithmicSP = Math.log(level) * 100;
  return Math.round(baseSP + exponentialSP + logarithmicSP);
};

export const getXPForLevel = (level: number): number => {
  const baseXP = 100;
  const exponentialXP = Math.pow(level, 2.5) * 25;
  const logarithmicXP = Math.log(level) * 100;
  return Math.round(baseXP + exponentialXP + logarithmicXP);
};

export const calculateXPToNextLevel = (currentXP: number, level: number): number => {
  const xpToNextLevel = getXPForLevel(level);
  const xpToNextLevelDiff = xpToNextLevel - currentXP;

  return xpToNextLevelDiff;
};

export const calculateSPToNextLevel = (currentSP: number, level: number): number => {
  const spToNextLevel = getSPForLevel(level);
  const spToNextLevelDiff = spToNextLevel - currentSP;

  return spToNextLevelDiff;
};

/**
 * 
 * 
 * 
 * export const getXPForLevel = (level: number): number => {
  const a = 20;
  const b = 1.5;
  const totalXPOnLevel = a * Math.pow(b, level - 1);
  return totalXPOnLevel;
};
 */
