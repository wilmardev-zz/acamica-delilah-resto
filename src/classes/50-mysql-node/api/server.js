const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const config = require("../../../config/development").config;
const routerAutor = require('./routers/author');
const routerBook = require('./routers/book');
const app = express();
const apiUrl = '/api/v1/acamica';

app.use(bodyParser.json());

// Check api health
app.get(apiUrl + "/health", (req, res) => {
    return res.status(200).json({status: "Ok"});
});

// ---> Author

// Create a Author
app.post(apiUrl + '/author', routerAutor.create)

// get all authors
app.get(apiUrl + '/authors', routerAutor.list)

// get autor by  author
app.get(apiUrl + '/author/:id', routerAutor.search)

// get author with his book list
app.get(apiUrl + '/authorHasManyBooks/:id', routerAutor.authorBooks)

//---> BOOK

// create a book
app.post(apiUrl + '/book', routerBook.create)

// get all books
app.get(apiUrl + '/books', routerBook.list)

// get book by  bookId
app.get(apiUrl + '/book/:id', routerBook.search);

app.listen(config.Port, () => {
    console.log(`Servidor iniciado en el puerto ${config.Port}`);
});
