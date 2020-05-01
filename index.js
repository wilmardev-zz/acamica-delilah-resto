const moment = require("moment");
const coolImages = require("cool-images");
const fileManagement = require("./src/classes/41-nodejs/file-management.js");

// var fecha = new moment("31/12/1992", "DD/MM/YY");
// var formateada = fecha.format("MM/DD/YY");
// console.log(formateada);
let img = coolImages.one();
let imgArray = coolImages.many(undefined, undefined, 10);

console.log("one: ", img);

let date = moment().format("YYYY/MM/DD, h:mm:ss");
let images = date + "\n";
imgArray.forEach((element, index) => {
  console.log(index, element);
  images += element + "\n";
});

fileManagement.createFile("log.txt", images);
