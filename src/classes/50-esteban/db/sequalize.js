const ENV = process.env.NODE_ENV || "development";
const Sequelize = require("sequelize");
const SongModel = require("../entities/song");
const config = require("../../../config/" + ENV).config.MysqlConfig;

const sequelize = new Sequelize(config.Db, config.User, config.Password, {
  host: config.Host,
  dialect: config.Dialect,
  operatorsAliases: false,
  port: config.Port,
});

const Song = SongModel(sequelize, Sequelize);

//actualizar en la base de datos
sequelize.sync({ force: false }).then(() => {
  console.log(`Base de datos y tablas creadas!`);
});

module.exports = {
  Song,
  sequelize,
};
