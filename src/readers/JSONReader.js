export default class JSONReader extends AbstractReader {
  async read(filename) {
    return new Promise((resolve, reject) => {
      try {
        const data = JSON.parse(fs.readFileSync(filename, "utf8"));
        if (data.estados) {
          resolve(
            data.estados.flatMap((estado) =>
              estado.cidades.map((cidade) => ({
                Nome: cidade,
                Estado: estado.nome,
              }))
            )
          );
        } else {
          resolve(data);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
