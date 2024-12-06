import JSONReader from "../readers/JSONReader.js";
import CSVReader from "../readers/CSVReader.js";

export default class ReaderFactory {
  static createReader(fileType) {
    switch (fileType) {
      case "json":
        return new JSONReader();
      case "csv":
        return new CSVReader();
      default:
        throw new Error("Unsupported file type");
    }
  }
}
