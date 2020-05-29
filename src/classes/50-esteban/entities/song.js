module.exports = (sequelize, type) => {
  return sequelize.define("song", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: type.STRING,
      allowNull: false,
    },
    duration: {
      type: type.INTEGER,
      allowNull: false,
    },
    id_album: {
      type: type.INTEGER,
      allowNull: false,
    },
    id_band: {
      type: type.INTEGER,
      allowNull: false,
    },
    release_date: {
      type: type.DATE,
      allowNull: false,
    },
  });
};
