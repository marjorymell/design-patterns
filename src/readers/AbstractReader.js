export default class AbstractReader {
  async read(filename) {
    return Promise.reject(new Error("Should implement read method"));
  }
}
