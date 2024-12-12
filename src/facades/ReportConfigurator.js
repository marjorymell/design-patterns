import FormaterFactory from "../factories/FormaterFactory.js";
import ReaderFactory from "../factories/ReaderFactory.js";

export default class ReportConfigurator {
  static configure(format, filename) {
    const formaterStrategy = FormaterFactory.createFormater(format);
    const fileType = filename.split(".").pop().toLowerCase();
    const reader = ReaderFactory.createReader(fileType);

    return { formaterStrategy, reader };
  }
}
