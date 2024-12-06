import ReaderFactory from "./factories/ReaderFactory.js";

export default class CitiesReporter {
  constructor({ formaterStrategy }) {
    this._formaterStrategy = formaterStrategy;
  }

  async report(filename) {
    const fileType = filename.split(".").pop().toLowerCase();
    const reader = ReaderFactory.createReader(fileType);
    this._cities = await reader.read(filename);
    return this._formaterStrategy.output(this._cities);
  }
}
