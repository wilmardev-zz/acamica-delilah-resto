const calculadora = require("./calculadora");
const fileManagement = require("./file-management");
const PATH_FILE = "./assets/files/class-40/swagger-doc-example.yml";
const PATH_NEW_FILE = "src/classes/41-nodejs/hobbies.txt";
const DATA_FILE = '{"hobbies":["read", "swim", "playing videogames"]}';
console.log("Bienvenidos a Node JS!!!");

fileManagement.readFile(PATH_NEW_FILE).then((dataFile) => {
  const dataJson = JSON.parse(dataFile);
  console.log(dataJson);
  dataJson.hobbies.forEach((element) => {
    console.log(element);
  });
});
// fileManagement.createFile(PATH_NEW_FILE, DATA_FILE);

const resultadoSuma = calculadora.sumar(5, 6);
console.log("El resultado es => ", resultadoSuma);
