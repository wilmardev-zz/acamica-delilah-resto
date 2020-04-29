// fs = Librería para interactuar con archivos del sistema operativo
const fs = require("fs");

const readFile = (url) => {
  // Método para leer un archivo
  fs.readFile(url, (error, data) => {
    if (error) {
      console.log("ERROOOOOR!!! =>", error);
      return;
    }
    console.log(data.toString("utf8"));
  });
};

const createFile = (fileName, data) => {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Archivo creado correctamente");
  });
};

module.exports = {
  readFile,
  createFile
};
