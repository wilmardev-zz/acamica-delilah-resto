const images = require("./image");
const fileManagement = require("../41-nodejs/file-management");
const moment = require("moment");
const PATH_FILE = "src/classes/42-npm/log.txt";

const main = async () => {
  const fecha = new moment().format("MMMM Do YYYY, h:mm:ss a");
  let img = images.manyImages(10);
  let urls = "";
  let informacion = "";
  let data = "";

  img.forEach((element) => {
    urls += `\n${element}`;
  });

  if (await fileManagement.existFile(PATH_FILE)) {
    data = await fileManagement.readFile(PATH_FILE);
    informacion = `${data}\n${fecha}${urls}\n`;
    console.log(informacion);
  } else {
    informacion = `${fecha}${urls}\n`;
  }

  fileManagement.createFile(PATH_FILE, informacion);
};

main();
