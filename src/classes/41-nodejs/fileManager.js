const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);

// Read files
const read = (url) => {
  return new Promise((resolve, reject) => {
    fs.readFile(url, (e, data) => {
      if (e) {
        console.log("Error!!!: ", e);
        reject(e);
      } else {
        resolve(data.toString("utf8"));
      }
    });
  });
};

//check if a file exists
const fileExists = (url) => {
  return new Promise((resolve, reject) => {
    fs.access(url, (e) => {
      if (e) {
        console.log(e);
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};

const createFile = (fileName, data) => {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Created successfully");
    }
  });
};

//using util lib
const readFilePromisify = async (url) => {
  try {
    return await readFile(url, "utf-8");
  } catch (e) {
    console.log("Error!!!: ", e);
  }
};

module.exports = { read, readFilePromisify, createFile, fileExists };
