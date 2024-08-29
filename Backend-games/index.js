const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

let games = [
    {
        id: 1,
        title: 'The Legend of Zelda: Breath of the Wild',
        genre: 'Action-adventure',
        platform: 'Nintendo Switch',
        releaseYear: 2017,
    },
    {
        id: 2,
        title: 'God of War',
        genre: 'Action-adventure',
        platform: 'PlayStation 4',
        releaseYear: 2018,
    },
    {
        id: 3,
        title: 'Cyberpunk 2077',
        genre: 'Role-playing',
        platform: 'PC',
        releaseYear: 2020,
    },
    {
        id: 4,
        title: 'Hollow Knight',
        genre: 'Metroidvania',
        platform: 'PC',
        releaseYear: 2017,
    },
    {
        id: 5,
        title: 'Minecraft',
        genre: 'Sandbox',
        platform: 'Multi-platform',
        releaseYear: 2011,
    },
];

app.get('/games', (req,res) => {
    res.json(games);
});

app.get('/games/:id', (req, res) => {
    let gamesId = req.params.id;
    let game = games.find((g) => g.id == gamesId);
    if (game) {
        res.json(game);
    } else {
        res.status(404).json("Game is not found.");
    }
})


const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});