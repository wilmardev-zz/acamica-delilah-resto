const { Book } = require('../db/sequalize.js')

const create = (req, res, next)  => {
    console.log("book==>", req.body)
    Book.create(req.body)
        .then(author => res.json(author))
};

const list = (req, res, next)  => {
    Book.findAll().then(books =>
        res.json(books))
};

const search = (req, res, next)  => {
    Book.findOne(
        {
            where: { id: req.params.id, },
        }
    ).then(book => res.json(book))
};

module.exports = {
    search,
    list,
    create
}
