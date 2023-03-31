export const getSpeedMultiplierBasedOnWeightRatio = (ratio: number) => {
  if (ratio <= 1) return 1;

  if (ratio > 1 && ratio <= 2) return 0.8;

  if (ratio > 2 && ratio <= 6) return 0.6;

  if (ratio > 6) return 0;
};
