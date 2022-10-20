import { IItem } from "../types/item.types";

export const getItemTextureKeyPath = (itemToRender: IItem, atlasJSON: any) => {
  const stackQty = itemToRender?.stackQty ?? 0;
  const itemTexturePath = itemToRender.texturePath;

  if (itemToRender && stackQty >= 1) {
    const idx = stackQty >= 5 ? "5" : stackQty;

    const textureBreakPath = itemTexturePath.split(".");
    const txtPrefix: string = textureBreakPath[0];
    const txtExtension: string = textureBreakPath[1];
    const newTexturePath = `${txtPrefix}-qty-${idx}.${txtExtension}`;
    const spriteData = atlasJSON.frames[newTexturePath];

    if (spriteData !== undefined) {
      return newTexturePath;
    }
  }
  return itemTexturePath;
};
