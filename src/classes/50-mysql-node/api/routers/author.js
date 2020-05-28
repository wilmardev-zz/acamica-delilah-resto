const { Author, Book } = require('../db/sequalize.js')

const create = (req, res, next)  => {
    console.log(req.body)
    Author.create(req.body)
        .then(author => res.json(author))
};

const list = (req, res, next)  => {
    Author.findAll().then(books =>
        res.json(books))
};

const search = (req, res, next)  => {
    Author.findOne(
        {
            where: { id: req.params.id, },
        }
    ).then(book => res.json(book))
};

const authorBooks = (req, res, next)  => {
    let query;
    query = Author.findAll({
        where: { id: req.params.id, },
        include: [{ model: Book }
        ]
    })
    return query.then(author => res.json(author))
};

module.exports = {
    authorBooks,
    search,
    list,
    create
}
