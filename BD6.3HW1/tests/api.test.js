let { app, getGame, getGames, addGame, addDeveloper, getDeveloperById } = require('../index');
let http = require('http');
let request = require('supertest');

jest.mock('../index.js', () => ({
    ...jest.requireActual('../index.js'),
    getGame: jest.fn(),
    getGames: jest.fn(),
    addGame: jest.fn(),
    getDeveloperById: jest.fn(),
    addDeveloper: jest.fn()
}));

let server;
beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3001, done);
});

afterAll((done) => {
    server.close(done);
});

describe('funtions testing', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should retrieve all the games', async () => {
        const mockGames = [
            { id: 1, title: 'The Legend of Zelda', genre: 'Adventure', developer: 'Nintendo' },
            { id: 2, title: 'Super Mario Bros', genre: 'Platformer', developer: 'Nintendo' }
        ];
        getGames.mockResolvedValue(mockGames);

        let response = await request(server).get('/games');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual(mockGames);
    });

    it('should retrieve a game by id', async () => {
        let mockGame = { id: 1, title: 'The Legend of Zelda', genre: 'Adventure', developer: 'Nintendo' };
        getGame.mockResolvedValue(mockGame);
        let response = await request(server).get('/games/1');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual(mockGame);
    });

    it('should return 404 for non existing gameid', async () => {
        getGame.mockResolvedValue(null);
        let response = await request(server).get('/games/648');
        expect(response.statusCode).toEqual(404);
    });

    it('should add a new game in the games', async () => {
        let mockNewGame = { id: 3, title: 'The Witcher 3', genre: 'RPG', developer: 'CD Projekt Red' };
        addGame.mockResolvedValue(mockNewGame);
        let response = await request(server).post('/games').send({ title: 'The Witcher 3', genre: 'RPG', developer: 'CD Projekt Red' });
        expect(response.statusCode).toEqual(201);
        expect(response.body).toEqual(mockNewGame);
    });

    it('should retrieve a developer by id ', async () => {
        let mockDeveloper = { id: 1, name: 'Nintendo', country: 'Japan' };
        getDeveloperById.mockResolvedValue(mockDeveloper);
        let response = await request(server).get('/developer/1');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual(mockDeveloper);
    });
    it('should return 404 due to non-existing id', async () => {
        getDeveloperById.mockResolvedValue(null);
        let response = await request(server).get('/developer/455');
        expect(response.statusCode).toEqual(404);
    });
    
    it('should add a developer in the developer data', async () => {
        let newMockDeveloper = { id: 3, name: 'Nint', country: 'Japan' };
        addDeveloper.mockResolvedValue(newMockDeveloper);
        let response = await request(server).post('/developer').send({ name: 'Nint', country: 'Japan' });
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual(newMockDeveloper);
    })
});