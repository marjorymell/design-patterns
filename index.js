import FormaterFactory from "./src/factories/FormaterFactory.js";
import CitiesReporter from "./src/CitiesReporter.js";

const [cmd, script, param1] = process.argv,
  filename = "./data/cidades-2.json";

try {
  const formaterStrategy = FormaterFactory.createFormater(param1);
  const reporter = new CitiesReporter({ formaterStrategy });
  const output = reporter.report(filename);

  console.log(output);
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
