const compress = require("compress-json");
const decompress = require("compress-json");
const fs = require("fs");
const JSZip = require("jszip");

export class MapZipHelper {
  static async createZipMap(mapName: string, mapObject: object, pathToSave: string): Promise<void> {
    const data = compress(mapObject);
    const zip = new JSZip();
    zip.file(`${mapName}.txt`, JSON.stringify(data));
    const buffer = await zip.generateAsync({ type: "uint8array" });
    await fs.createWriteStream(`${pathToSave}/${mapName}.zip`).write(buffer);
  }

  //   async readZip(fileName, filePath): Promise<object> {
  //     const data = await (await fetch(filePath)).blob();

  //     const file = new File([data], fileName, { type: "application/zip" });

  //     const zipRead = new JSZip();

  //     const content = await zipRead.loadAsync(file);

  //     if (content.files && content.files[`${fileName}.txt`]) {
  //       //@ts-ignore
  //       const txtFile = content.files[`${fileName}.txt`]._data.compressedContent;
  //       const bufferedString = Buffer.from(txtFile).toString();
  //       const fileContent = decompress(JSON.parse(bufferedString));
  //       return fileContent;
  //     }

  //     return {};
  //   }

  static async readZip(fileName, filePath): Promise<object> {
    const data = await fs.readFileSync(filePath);

    const zipRead = new JSZip();

    const content = await zipRead.loadAsync(data);
    const fileBuffer = await content.file(`${fileName}.txt`)!.async("uint8array");
    const bufferedString = Buffer.from(fileBuffer.buffer).toString();
    const fileContent = decompress(JSON.parse(bufferedString));

    return fileContent;
  }
}

export const mapZipHelper = new MapZipHelper();
