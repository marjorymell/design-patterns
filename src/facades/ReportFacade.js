import FormaterFactory from "../factories/FormaterFactory.js";
import CitiesReporter from "../CitiesReporter.js";

export default class ReportFacade {
  static generateReport(format, filename) {
    try {
      const formaterStrategy = FormaterFactory.createFormater(format);
      const reporter = new CitiesReporter({ formaterStrategy });
      return reporter.report(filename);
    } catch (error) {
      console.error("Error generating report:", error.message);
      throw error;
    }
  }
}
