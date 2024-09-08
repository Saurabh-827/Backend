let {app, getRecipes, getRecipeById, addRecipe} = require('../index.js');
const request = require('supertest');
const http = require('http');

//mocking the functions
jest.mock('../index.js', () => ({
    ...jest.requireActual('../index.js'),
    getRecipes: jest.fn(),
    getRecipeById: jest.fn(),
    addRecipe: jest.fn()
}));

// creating node server
let server;
beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3000, done);
});
afterAll((done) => {
    server.close(done);
});

describe('testing api endpoints', () => { 

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch all recipes', async () => {
        const mockRecipes = [
            { id: 1, name: 'Spaghetti Bolognese', cuisine: 'Italian', difficulty: 'Medium' },
            { id: 2, name: 'Masala', cuisine: 'Indian', difficulty: 'Hard' }
        ];
        getRecipes.mockResolvedValue(mockRecipes);

        let result = await request(server).get('/recipes');
        expect(result.body).toEqual(mockRecipes);
        expect(result.statusCode).toEqual(200);
    });

    it('should get recipe from its id', async () => {
        let mockRecipe = { id: 1, name: 'Spaghetti Bolognese', cuisine: 'Italian', difficulty: 'Medium' };

        getRecipeById.mockResolvedValue(mockRecipe);
        let result = await request(server).get('/recipes/1');
        expect(result.body).toEqual(mockRecipe);
        expect(result.statusCode).toEqual(200);
    });
    
    it('should return 404 if there is non-existing id ', async () => {
        getRecipeById.mockResolvedValue(null);
        let result = await request(server).get('/recipes/100');
        expect(result.statusCode).toEqual(404);
    });

    it('should add arecipe', async () => {
        let mockNewRecipe = { id: 3, name: 'dal-chawal', cuisine: 'Indian', difficulty: 'Hard' };
        addRecipe.mockResolvedValue(mockNewRecipe);
        let result = await request(server).post('/recipes').send({ name: 'dal-chawal', cuisine: 'Indian', difficulty: 'Hard' });
        expect(result.body).toEqual(mockNewRecipe);
        expect(result.statusCode).toEqual(201);
    })
});

