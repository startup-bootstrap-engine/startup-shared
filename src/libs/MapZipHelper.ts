const { compress } = require("compress-json");
const fs = require("fs");
const JSZip = require("jszip");

export const createZipMap = async (mapName: string, mapObject: object, pathToSave: string): Promise<void> => {
  const data = compress(mapObject);
  const zip = new JSZip();
  zip.file(`${mapName}.txt`, JSON.stringify(data));
  const buffer = await zip.generateAsync({ type: "uint8array" });
  await fs.createWriteStream(`${pathToSave}/${mapName}.zip`).write(buffer);
};
