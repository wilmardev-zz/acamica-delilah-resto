const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const config = require("../../config/development").config;
const routerAutor = require("./routers/author");
const routerBook = require("./routers/book");
const routerUser = require("./routers/user");
const app = express();
const apiUrl = "/api/v1/acamica";

app.use(bodyParser.json());

const validateJwtMiddleware = (req, res, next) => {
  const jwtToken = req.headers["authorization"];
  if (!jwtToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const jwtClient = jwtToken.split(" ")[1];
  jwt.verify(jwtClient, config.JwtSecretKey, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Token Expired" });
    }
    next();
  });
};

// Login with JWT
app.post(apiUrl + "/login", routerUser.login);

// Check api health
app.get(apiUrl + "/health", (req, res) => {
  return res.status(200).json({ status: "Ok" });
});

// ---> Author

// Create a Author
app.post(apiUrl + "/author", validateJwtMiddleware, routerAutor.create);

// get all authors
app.get(apiUrl + "/authors", validateJwtMiddleware, routerAutor.list);

// get autor by  author
app.get(apiUrl + "/author/:id", validateJwtMiddleware, routerAutor.search);

// get author with his book list
app.get(
  apiUrl + "/authorHasManyBooks/:id",
  validateJwtMiddleware,
  routerAutor.authorBooks
);

//---> BOOK

// create a book
app.post(apiUrl + "/book", validateJwtMiddleware, routerBook.create);

// get all books
app.get(apiUrl + "/books", validateJwtMiddleware, routerBook.list);

app.get(apiUrl + "/query/books", validateJwtMiddleware, routerBook.listQuery);

// get book by  bookId
app.get(apiUrl + "/book/:id", validateJwtMiddleware, routerBook.search);

app.listen(config.Port, () => {
  console.log(`Servidor iniciado en el puerto ${config.Port}`);
});
