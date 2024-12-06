import fs from "node:fs";
import AbstractReader from "./AbstractReader.js";

export default class JSONReader extends AbstractReader {
  read(filename) {
    const data = JSON.parse(fs.readFileSync(filename, "utf8"));
    // Normalize data structure based on file content
    if (data.estados) {
      // Handle cidades-1.json structure
      return data.estados.flatMap((estado) =>
        estado.cidades.map((cidade) => ({ Nome: cidade, Estado: estado.nome }))
      );
    } else {
      // Handle cidades-2.json structure
      return data;
    }
  }
}
