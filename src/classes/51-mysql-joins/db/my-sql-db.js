const ENV = process.env.NODE_ENV || "development";
const Sequelize = require("sequelize");
const config = require("../../../config/" + ENV).config.MysqlConfig;

const sequelize = new Sequelize(config.Db, config.User, config.Password, {
  host: config.Host,
  dialect: config.Dialect,
  operatorsAliases: false,
});

sequelize.sync({ force: false }).then(() => {
  console.log(`Base de datos y tablas sincronizadas!`);
});

module.exports = {
  sequelize,
};
