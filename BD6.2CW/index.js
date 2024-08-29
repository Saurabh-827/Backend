const express = require('express');
const app = express();
app.use(express.json());

let authors = [
    { authorId: 1, name: 'George Orwell', book: '1984' },
    { authorId: 2, name: 'Aldous Huxley', book: 'Brave New World' },
    { authorId: 3, name: 'Ray Bradbury', book: 'Fahrenheit 451' }
];

//functions are defined here
function getAuthors() {
    return authors;
};

function getAuthorById(id) {
    return authors.find((a) => a.authorId === id);
};

function addAuthor(object) {
    authors.push(object);
    return object;
};

//routes are defined here
app.get('/authors', (req, res) => {
    res.send(getAuthors());
});

app.get('/authors/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let author = getAuthorById(id);
    if (!author) return res.status(404).send('The author with the given ID was not found.');
    res.send(author);
});

app.get('/authors/new', (req, res) => {
    let authorId = req.query.authorId;
    let name = req.query.name;
    let book = req.query.book;
    res.send(addAuthor(authorId, name, book));
});


module.exports = { app , getAuthors, getAuthorById, addAuthor };