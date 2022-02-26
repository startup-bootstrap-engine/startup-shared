export class TextHelper {
  static capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private static _escapeRegExp(str: string): string {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }
  static replaceAll(str: string, find: string, replace: string): string {
    return str.replace(new RegExp(TextHelper._escapeRegExp(find), "g"), replace);
  }

  static stringPrepare(str: string): string {
    return str.toLowerCase().trim();
  }

  static getFileExtension(path: string): string {
    return path.slice((Math.max(0, path.lastIndexOf(".")) || Infinity) + 1);
  }
}
