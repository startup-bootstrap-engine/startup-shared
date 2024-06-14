export type IGemSchema = {
  key: string;
  name: string;
  gemStatBuff: {
    attack: number;
    defense: number;
  };
  gemEntityEffectsAdd: string[];
};
