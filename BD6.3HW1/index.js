const express = require('express');
const app = express();
app.use(express.json());

let games = [
    { id: 1, title: 'The Legend of Zelda', genre: 'Adventure', developer: 'Nintendo' },
    { id: 2, title: 'Super Mario Bros', genre: 'Platformer', developer: 'Nintendo' }
];
let developer = [
    { id: 1, name: 'Nintendo', country: 'Japan' },
    { id: 2, name: 'Rockstar Games', country: 'USA' }
];

//functions here
async function getGames() {
    return games;
};

async function getGame(id) {
    let game = games.find((gam) => gam.id == id);
    return game;
};

async function addGame(newGame) {
    newGame.id = games.length + 1;
    games.push(newGame);
    return newGame;
};

async function getDeveloperById(id) {
    let dev = developer.find((d) => d.id === id);
    return dev;
};

async function addDeveloper(newDeveloper) { 
    newDeveloper.id = developer.length + 1;
    developer.push(newDeveloper);
    return newDeveloper;
};

//routes here
app.get('/games', async (req, res) => {
    let result = await getGames();
    res.send(result);
});
 
app.get('/games/:id', async (req, res) => { 
    let result = await getGame(req.params.id);
    if (!result) return res.status(404).send('Game not found');
    res.send(result);
});

app.post('/games', async (req, res) => { 
    let newGame = req.body;
    let result = await addGame(newGame);
    res.status(201).send(result);
});

app.get('/developer/:id', async (req, res) => {
    let developer = await getDeveloperById(parseInt(req.params.id));
    if (!developer) return res.status(404).send('Developer not found');
    res.send(developer);
});

app.post('/developer', async (req, res) => { 
    let newDeveloper = req.body;
    let result = await addDeveloper(newDeveloper);
    res.send(result);
});

module.exports = { app, getGames, getGame, addGame, getDeveloperById, addDeveloper };