import { CommandInvoker } from "./src/commands/CommandInvoker.js";
import { GenerateHTMLReportCommand } from "./src/commands/GenerateHTMLReportCommand.js";
import { GenerateTXTReportCommand } from "./src/commands/GenerateTXTReportCommand.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const files = [
  "./data/cidades-1.json",
  "./data/cidades-2.json",
  "./data/cidades.csv",
];

function askUser() {
  console.log("Escolha o arquivo que deseja usar:");
  files.forEach((file, index) => console.log(`${index + 1}. ${file}`));

  rl.question("Digite o número do arquivo: ", (answer) => {
    const fileIndex = parseInt(answer) - 1;
    if (fileIndex >= 0 && fileIndex < files.length) {
      const filename = files[fileIndex];
      askFormat(filename);
    } else {
      console.log("Opção inválida.");
      rl.close();
    }
  });
}

function askFormat(filename) {
  rl.question("Escolha o formato do relatório (html/txt): ", (format) => {
    if (["html", "txt"].includes(format)) {
      generateReport(format, filename);
    } else {
      console.log("Formato inválido. Escolha 'html' ou 'txt'.");
      rl.close();
    }
  });
}

function generateReport(format, filename) {
  const invoker = new CommandInvoker();

  if (format === "html" || !format) {
    invoker.addCommand(new GenerateHTMLReportCommand(filename));
  }

  if (format === "txt" || !format) {
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
      rl.close();
    })
    .catch((error) => {
      console.error("Error:", error.message);
      rl.close();
      process.exit(1);
    });
}

askUser();
