interface IItemTexturePathGetOptions {
  key: string;
  stackQty: number;
  texturePath: string;
}

export const getItemTextureKeyPath = (requiredOptions: IItemTexturePathGetOptions, atlasJSON: any) => {
  const stackQty = requiredOptions?.stackQty ?? 0;
  const itemTexturePath = requiredOptions.texturePath;

  if (requiredOptions && stackQty >= 1) {
    const idx = stackQty >= 5 ? "5" : stackQty;

    const textureBreakPath = itemTexturePath.split(".");
    const txtPrefix: string = textureBreakPath[0];
    const txtExtension: string = textureBreakPath[1];
    const newTexturePath = `${txtPrefix}-qty-${String(Math.floor(Number(idx)))}.${txtExtension}`;
    const spriteData = atlasJSON.frames[newTexturePath];

    if (spriteData !== undefined) {
      return newTexturePath;
    }
  }
  return itemTexturePath;
};
