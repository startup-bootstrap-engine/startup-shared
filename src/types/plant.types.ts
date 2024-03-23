export enum PlantSocketEvents {
  ShowPlantGrowth = "ShowPlantGrowth",
  SendGrowthPoint = "SendGrowthPoint",
}

export interface IPlantGrowth {
  id: string;
}

export interface IPlantShowGrowth {
  status: boolean;
  currentCycle: number;
  requiredGrowthPoints: number;
}
