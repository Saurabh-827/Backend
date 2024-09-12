const express = require('express');
const app = express();
app.use(express.json());

let games = [];
let tournaments = [];

//functions are here
function validateGames(game) {
    if (!game.title || typeof game.title !== 'string') {
        return "Title is required and must be a string";
    };
    if (!game.genre || typeof game.genre !== 'string') {
        return "Genre is required and must be a string";
    };
    return null;
}

function validateTourneys(tournament) {
    if (!tournament.name || typeof tournament.name !== 'string') {
        return "Name is required and must be a string";
    };
    if (!tournament.gameId || typeof tournament.gameId !== 'number') {
        return "Game ID is required and must be a number";
    };
    return null;
}

//endpoints are here
app.post('/api/games', (req, res) => { 
    let error = validateGames(req.body);
    if (error) return res.status(400).send(error);
    let game = { id: games.length + 1, ...req.body };
    games.push(game);
    res.status(201).json(game);
});

app.post('/api/tournaments', (req, res) => { 
    let error = validateTourneys(req.body);
    if (error) return res.status(400).send(error);
    let tournament = { id: tournaments.length + 1, ...req.body };
    tournaments.push(tournament);
    res.status(201).json(tournament);
});

module.exports = { app, validateGames, validateTourneys };