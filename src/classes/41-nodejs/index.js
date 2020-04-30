const helper = require("./helper");
const hobbies = ["read", "eat", "drink", "code"];
const fileManager = require("./fileManager");
const PATH_FILE = "../../classes/41-nodejs/hobbies.txt";
const PATH_NEW_FILE = "../../classes/41-nodejs/hobbies-created.txt";
const DATA_FILE = '{"hobbies":["read", "swim", "playing videogames"]}';

const sumar = () => {
  const total = helper.sum(6, 10);
  console.log(total);
};

const listHobbies = () => {
  hobbies.forEach((element) => {
    console.log(element);
  });
};

//create a new file if it doesn't exist
const createNewFile = async () => {
  const file = await fileManager.fileExists(PATH_FILE);
  if (file) {
    printHobbies(PATH_FILE);
  } else {
    fileManager.createFile(PATH_NEW_FILE, DATA_FILE);
    printHobbies(PATH_NEW_FILE);
  }
};

//print each element on an array
const printHobbies = async (url) => {
  const dataFile = await fileManager.read(url);
  //using util ib
  // const dataFile = await fileManager.readFilePromisify(PATH_FILE);
  const dataJson = JSON.parse(dataFile);
  dataJson.hobbies.forEach((element) => {
    console.log(element);
  });
};

//read a file and capitalize the content
const toCaptialLetters = async (url) => {
  let dataFile = await fileManager.read(url);
  let dataFileUpp = dataFile.toUpperCase();
  console.log(dataFileUpp);
  fileManager.createFile(PATH_NEW_FILE, dataFileUpp);
};

// sumar();
// listHobbies();
// printHobbies(PATH_FILE);
createNewFile();
// toCaptialLetters(PATH_FILE);
