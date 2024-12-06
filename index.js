import ReportFacade from "./src/facades/ReportFacade.js";

const [cmd, script, param1] = process.argv,
  filename = "./data/cidades-2.json";

try {
  const output = ReportFacade.generateReport(param1, filename);
  console.log(output);
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
