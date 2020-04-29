// fs = Librería para interactuar con archivos del sistema operativo
const fs = require("fs");
const calculadora = require("./calculadora");
console.log("Bienvenidos a Node JS!!!");

const readFile = () => {
  // Método para leer un archivo
  fs.readFile(
    "./assets/files/class-40/swagger-doc-example.yml",
    (error, data) => {
      if (error) {
        console.log("ERROOOOOR!!! =>", error);
        return;
      }
      console.log(data.toString("utf8"));
    }
  );
};

const resultadoSuma = calculadora.sumar(5, 6);
console.log("El resultado es => ", resultadoSuma);

// readFile();
