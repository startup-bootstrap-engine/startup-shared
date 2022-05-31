import { IItemContainer } from "./item.types";


export interface IContainersProps {
  openedContainers: Set<string>;
  containersData: { [key: string]: IItemContainer };
  onMouseOverElement: (element: any) => void;
}
