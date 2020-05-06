const express = require("express");

const server = express();

const photos = [
  {
    id: 1,
    title: "shit",
    url: "https://via.placeholder.com/600/92c952",
  },
  {
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
  },
];

server.get("/api/health", (req, res) => {
  const works = {
    apiName: "First Project Acamica",
    status: "OK",
  };
  return res.status(502).json(works);
});

server.get("/api/photos", (req, res) => {
  res.status(200).json(photos);
});

server.get("/api/v1/photos/1", (req, res) => {
  res.status(200).json({
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
  });
});

server.get("/api/photos/:id", (req, res) => {
  let index = req.params.id;
  res.status(200).json(photos[index]);
});

server.get("/api/searchphotos/", (req, res) => {
  const { id, title } = req.query;
  let photo = photos.filter((element) => {
    if (element.id === parseInt(id) && element.title === title) {
      return element;
    }
  });
  res.status(200).json(photo);
});

server.listen(3000, () => console.log("Server initiated"));
