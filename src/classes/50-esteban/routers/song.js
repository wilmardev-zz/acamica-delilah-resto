const { Song } = require("../db/sequalize.js");

const create = (req, res, next) => {
  console.log(req.body);
  Song.create(req.body).then((name) => res.json(name));
};

const list = (req, res, next) => {
  Song.findAll().then((songs) => res.json(songs));
};

const search = (req, res, next) => {
  Song.findOne({
    where: { id: req.params.id },
  }).then((song) => res.json(song));
};

const update = (req, res, next) => {
  Song.update(
    {
      name: req.body.name,
    },
    {
      returning: true,
      where: { id: req.params.id },
    }
  ).then(function ([rowsUpdate, [updatedSong]]) {
    res.json(updatedSong);
  });
};

const deleteSong = (req, res, next) => {
  Song.findOne({
    where: { id: req.params.id },
  }).then((song) => res.json(song));
};

module.exports = {
  search,
  list,
  create,
  update,
  deleteSong,
};
