export interface IItemTexturePathGetOptions {
  key: string;
  stackQty: number;
  texturePath: string;
  isStackable: boolean
}

export const getItemTextureKeyPath = (requiredOptions: IItemTexturePathGetOptions, atlasJSON: any) => {
  const stackQty = requiredOptions?.stackQty ?? 0;
  const itemTexturePath = requiredOptions.texturePath;

  if (requiredOptions && (stackQty >= 1 || (requiredOptions.isStackable && stackQty > 0 ))) {
    let idx = stackQty;
    if( stackQty > 0 && stackQty < 1){
      idx = 1;
    } else if(stackQty >= 5) {
      idx = 5;
    } 
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
