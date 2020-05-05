// fs = Librería para interactuar con archivos del sistema operativo
const fs = require("fs");

// Método para leer un archivo
const readFile = (url) => {
  return new Promise((resolve, reject) => {
    fs.readFile(url, (error, data) => {
      if (error) {
        console.log("ERROOOOOR!!! =>", error);
        reject(error);
      }
      // console.log(data.toString("utf8"));
      resolve(data.toString("utf8"));
    });
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

const existFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.exists(fileName, (exist) => resolve(exist));
  });
};

module.exports = {
  readFile,
  createFile,
  existFile,
};
