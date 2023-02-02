export const getSPForLevel = (level: number): number => {
  const totalSPOnLevel = Math.pow(level, 3) * 2.75;
  return totalSPOnLevel;
};

export const getXPForLevel = (level: number): number => {
  const totalXPOnLevel = Math.pow(level, 3) * 3;
  return totalXPOnLevel;
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
