module.exports = (sequelize, type) => {
    return sequelize.define('country', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        country: type.STRING,
    })
}
