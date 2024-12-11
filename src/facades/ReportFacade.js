import ReportConfigurator from "./ReportConfigurator";

export default class ReportFacade {
  static async generateReport(format, filename) {
    try {
      const { formaterStrategy, reader } = ReportConfigurator.configure(
        format,
        filename
      );
      const cities = await reader.read(filename);
      return formaterStrategy.output(cities);
    } catch (error) {
      console.error("Error generating report:", error.message);
      throw error;
    }
  }
}
