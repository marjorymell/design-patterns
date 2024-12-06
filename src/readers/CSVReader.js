import fs from "node:fs";
import AbstractReader from "./AbstractReader.js";

export default class CSVReader extends AbstractReader {
  read(filename) {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, "utf8", (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        const lines = data.split("\n");
        const headers = lines[0].split(",");
        const results = [];

        for (let i = 1; i < lines.length; i++) {
          const currentLine = lines[i].split(",");
          if (currentLine.length === headers.length) {
            const city = {};
            for (let j = 0; j < headers.length; j++) {
              city[headers[j].trim()] = currentLine[j].trim();
            }
            results.push({ Nome: city["NOME"], Estado: city["COD UF"] });
          }
        }

        resolve(results);
      });
    });
  }
}
