const ENV = process.env.NODE_ENV || "development";
const Sequelize = require('sequelize')
const AuthorModel = require('../entities/author')
const BookModel = require('../entities/book')
const CountryModel = require('../entities/country')
const config = require("../../../../config/" + ENV).config.MysqlConfig;

const sequelize = new Sequelize(config.Db, config.User,  config.Password, {
    host: config.Host,
    dialect: config.Dialect,
    operatorsAliases: false
});

const Book = BookModel(sequelize, Sequelize)
const Author = AuthorModel(sequelize, Sequelize)
const Country = CountryModel(sequelize, Sequelize)
// autor tiene muchos libros
Author.hasMany(Book);
Country.hasMany(Author);

sequelize.sync({ force: false })
    .then(() => {
        console.log(`Base de datos y tablas creadas!`)
    })

module.exports = {
    Author,
    Book,
    Country,
    sequelize
}
