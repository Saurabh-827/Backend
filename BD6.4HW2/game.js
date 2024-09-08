let games = [
  { id: 1, title: 'The Legend of Zelda', genreId: 1 },
  { id: 2, title: 'Super Mario Bros', genreId: 2 },
];

let genres = [
  { id: 1, name: 'Action-Adventure' },
  { id: 2, name: 'Platformer' },
];

function getGames() { 
    return games;
};

function getGame(id) { 
    return games.find(game => game.id === id);
};

function getGenres() { 
    return genres;
};

function getGenre(id) { 
    return genres.find(genre => genre.id === id);
};

module.exports = { getGames, getGame, getGenres, getGenre };