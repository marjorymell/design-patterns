import ReportFacade from "./src/facades/ReportFacade.js";

const [cmd, script, param1, param2] = process.argv;
const filename = param2 || "./data/cidades-2.json";

ReportFacade.generateReport(param1, filename)
  .then((output) => console.log(output))
  .catch((error) => {
    console.error("Error:", error.message);
    process.exit(1);
  });
