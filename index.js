const moment = require("moment");
const coolImages = require("cool-images");
const fileManagement = require("./src/classes/41-nodejs/fileManager.js");

const formatedDate = () => {
  var fecha = new moment("31/12/1992", "DD/MM/YY");
  var formateada = fecha.format("MM/DD/YY");
  console.log(formateada);
  return formateada;
};

const showOneImage = () => {
  let img = coolImages.one();
  console.log("one: ", img);
};

const getImages = async (number) => {
  return await coolImages.many(undefined, undefined, number);
};

const formatImages = async (number) => {
  let list = "";
  const imgArray = await getImages(number);
  imgArray.forEach((element) => {
    list += "\n" + element;
  });
  return list;
};

const writeLog = async (images) => {
  const date = moment().format("YYYY/MM/DD, h:mm:ss");
  const exists = await fileManagement.fileExists("log.txt");
  const list = await formatImages(10);
  if (exists) {
    const log = await fileManagement.read("log.txt");
    const data = log + "\n" + date + list + "\n";
    // console.log("exists:", data);
    fileManagement.createFile("log.txt", data);
  } else {
    const data = date + "\n" + list + "\n";
    // console.log("doesnt't exist:", data);
    fileManagement.createFile("log.txt", data);
  }
};

const showImages = async (number) => {
  const imgArray = await getImages(number);
  imgArray.forEach((element, index) => {
    // console.log(`${index}: ${element}`);
  });
  writeLog(imgArray);
};

formatedDate();
showOneImage();
showImages(10);
