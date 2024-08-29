const express = require('express');
const app = express();

let movies = [
    { id: 1, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
    { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola' },
    { id: 3, title: 'The Dark Knight', director: 'Christopher Nolan' }
];

function getMovies() {
    return movies;
};

function getMovieById(id) {
    return movies.find((m) => m.id === id);
};

function addMovie(object) {
    movies.push(object);
    return object;
};

app.get('/movies', (req, res) => {
    return getMovies();
});

app.get('/movies/:id', (req, res) => {
    return getMovieById(parseInt(req.params.id));
});

app.post('/movies', (req, res) => {
    return addMovie(req.body);
});

module.exports = { app, getMovieById, getMovies, addMovie };