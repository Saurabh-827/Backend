let { getGames, getGame, getGenres, getGenre } = require('../game.js');
let { app } = require('../index.js');
const request = require('supertest');
const http = require('http');

jest.mock('../game.js', () => ({
    ...jest.requireActual('../game.js'),
    getGames: jest.fn(),
    getGame: jest.fn(),
    getGenres: jest.fn(),
    getGenre: jest.fn(),
}));

let server;
beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3001, done);
});

afterAll((done) => { 
    server.close(done);
});

describe('Error handling test', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('GET API /api/games should return 404 if no games present', async () => {
        getGames.mockReturnValue([]);
        let result = await request(server).get('/api/games');
        expect(result.status).toEqual(404);
        expect(result.body.error).toBe('No games found');
    });

    it('GET API /api/games/:id should return 404 if game not found', async () => {
        getGame.mockReturnValue(null);
        let result = await request(server).get('/api/games/4566');
        expect(result.status).toEqual(404);
        expect(result.body.error).toBe('Game not found');
    });

    it('GET API /api/genres should return 404 if no genres present', async () => {
        getGenres.mockReturnValue([]);
        let result = await request(server).get('/api/genres');
        expect(result.status).toEqual(404);
        expect(result.body.error).toBe('No genres found');
    });

    it('GET API /api/genres/:id should return 404 for non-existing id', async () => {
        getGenre.mockReturnValue(null);
        let result = await request(server).get('/api/genres/87');
        expect(result.status).toEqual(404);
        expect(result.body.error).toBe('Genre not found');
    })
});