import { CommandInvoker } from "./src/commands/CommandInvoker.js";
import { GenerateHTMLReportCommand } from "./src/commands/GenerateHTMLReportCommand.js";
import { GenerateTXTReportCommand } from "./src/commands/GenerateTXTReportCommand.js";

const [cmd, script, param1, param2] = process.argv;
const filename = param2 || "./data/cidades-2.json";

const invoker = new CommandInvoker();

if (param1 === "html" || !param1) {
  invoker.addCommand(new GenerateHTMLReportCommand(filename));
}

if (param1 === "txt" || !param1) {
  invoker.addCommand(new GenerateTXTReportCommand(filename));
}

invoker
  .executeCommands()
  .then((outputs) => {
    outputs.forEach((output, index) => {
      console.log(`Report ${index + 1}:`);
      console.log(output);
      console.log("-------------------");
    });
  })
  .catch((error) => {
    console.error("Error:", error.message);
    process.exit(1);
  });
