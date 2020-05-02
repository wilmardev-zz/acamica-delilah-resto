const fs = require("fs");
var log = "";

const pushToLog = (data) => {
  return new Promise((resolve, reject) => {
    let newData = data + "\r\n";
    log += newData;
    fs.writeFile("log.txt", log, "utf8", () => {
      resolve(true);
    });
  });
};

const sum = (a, b) => {
  let result = a + b;
  let data = `${a} + ${b} = ${result}`;
  pushToLog(data);
  return console.log(result);
};
const sub = (a, b) => {
  let result = a - b;
  let data = `${a} - ${b} = ${result}`;
  pushToLog(data);
  return console.log(result);
};
const mult = (a, b) => {
  let result = a * b;
  let data = `${a} x ${b} = ${result}`;
  pushToLog(data);
  return console.log(result);
};
const div = (a, b) => {
  let result = a / b;
  let data = `${a} / ${b} = ${result}`;
  pushToLog(data);
  return console.log(result);
};

module.exports = {
  sum,
  sub,
  mult,
  div,
};
