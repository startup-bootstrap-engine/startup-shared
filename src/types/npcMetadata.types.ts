import { FromGridX, FromGridY } from "../libs/GridHelper";
import { CharacterClass, CharacterGender } from "./character.types";
import { MapLayers } from "./maps.types";
import { INPC } from "./npc.types";

interface INPCMetaData extends Omit<INPC, "_id"> {
  key: string;
}

export const NPCMetaData: INPCMetaData[] = [
  {
    key: "npc-alice",
    name: "Alice",
    x: FromGridX(22),
    y: FromGridY(12),
    direction: "down",
    scene: "MainScene",
    class: CharacterClass.None,
    gender: CharacterGender.Female,
    texture: "npc-alice",
    layer: MapLayers.Player,
  },
];
