import FormaterHTML from "../formatters/FormaterHTML.js";
import FormaterTXT from "../formatters/FormaterTXT.js";

export default class FormaterFactory {
  static createFormater(type) {
    switch (type.toLowerCase()) {
      case "html":
        return new FormaterHTML();
      case "txt":
        return new FormaterTXT();
      default:
        throw new Error("Formater type not supported");
    }
  }
}
