import { IEntityMovementAnimation } from "./animation.types";

export interface IAssetData {
  textureKey: string;
  path: string;
  animations: IEntityMovementAnimation;
}
