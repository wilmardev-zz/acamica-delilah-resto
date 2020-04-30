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

//using util lib
const readFilePromisify = async (url) => {
  try {
    return await readFile(url, "utf-8");
  } catch (e) {
    console.log("Error!!!: ", e);
  }
};

//check if a file exists
const fileExists = (url) => {
  return new Promise((resolve, reject) => {
    fs.access(url, (exists) => {
      if (exists) {
        console.log(`${url} does not exist`);
        resolve(false);
      } else {
        console.log("file exists");
        resolve(true);
      }
    });
  });
};

const createFile = (fileName, data) => {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Created successfully");
  });
};

module.exports = { read, readFilePromisify, createFile, fileExists };
