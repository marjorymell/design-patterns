export default class AbstractReader {
  read(filename) {
    throw new Error("Should implement read method");
  }
}
