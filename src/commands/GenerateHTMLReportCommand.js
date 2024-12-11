import { Command } from "./Command.js";
import ReportFacade from "../facades/ReportFacade.js";

export class GenerateHTMLReportCommand extends Command {
  constructor(filename) {
    super();
    this.filename = filename;
  }

  async execute() {
    return ReportFacade.generateReport("html", this.filename);
  }
}
