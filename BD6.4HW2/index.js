const express = require('express');
const app = express();
app.use(express.json());
let { getGames, getGame, getGenres, getGenre } = require('./game.js');

app.get('/api/games', async (req, res) => { 
    try {
        let games = await getGames();
        if (games.length === 0) return res.status(404).json({ error: 'No games found' });
        return games;
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/api/games/:id', async (req, res) => { 
    try {
        let game = await getGame(req.params.id);
        if (!game) return res.status(404).json({ error: 'Game not found' });
        return res.status(200).send(game);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/api/genres', async (req, res) => { 
    try {
        let genres = await getGenres();
        if (genres.length === 0) return res.status(404).json({ error: 'No genres found' });
        return res.status(200).send(genres);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/api/genres/:id', async (req, res) => { 
    try {
        let genre = await getGenre(req.params.id);
        if (!genre) return res.status(404).json({ error: 'Genre not found' });
        return res.status(200).send(genre);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = {app};