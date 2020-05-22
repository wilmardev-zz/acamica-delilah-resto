const mongoose = require("mongoose");
const ENV = process.env.NODE_ENV || "development";
const config = require("../../../config/" + ENV).config;

mongoose
  .connect(config.DataBaseConfig.CnxString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connect to Mongo Db successfully.."));
