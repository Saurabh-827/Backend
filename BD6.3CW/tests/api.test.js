let { app, getReviews, getReview, addReview, getUser, addUser } = require('../index.js');
const request = require('supertest');
const http = require('http');

jest.mock('../index.js', () => ({
    ...jest.requireActual('../index.js'),
    getReview: jest.fn(),
    getReviews: jest.fn(),
    addReview: jest.fn(),
    getUser: jest.fn(),
    addUser: jest.fn()
}));

let server;
beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3001, done);
});

afterAll((done) => {
    server.close(done);
});

describe('API endpoints', () => { 
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should retrieve all reviews', async () => {
        const mockReviews = [
    { id: 1, content: 'A good book', userId: 1 },
    { id: 2, content: 'A bad book', userId: 2 },
    { id: 3, content: 'An okay book', userId: 3 }
];
        getReviews.mockResolvedValue(mockReviews);
        let response = await request(server).get('/reviews');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual(mockReviews)
    });

    it('should retrieve a review by id', async () => {
        const mockReview = { id: 1, content: 'A good book', userId: 1 };
        getReview.mockResolvedValue(mockReview);
        let response = await request(server).get('/reviews/1');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual(mockReview);
    });

    it('should return 404 when review is not found', async () => {
        getReview.mockResolvedValue(null);
        let response = await request(server).get('/reviews/999');
        expect(response.statusCode).toEqual(404);
    });

    it('should add a new review in reviews', async () => {
        let newReview = { id: 4, content: 'A great book', userId: 4 };
        addReview.mockResolvedValue(newReview);
        let response = await request(server).post('/reviews').send({ content: 'A great book', userId: 4 });
        expect(response.statusCode).toEqual(201);
        expect(response.body).toEqual(newReview);
    });

    it('should retrieve user by id', async () => { 
        const mockUser = { id: 1, name: 'Alice', email: 'alice@gmail.com' };
        getUser.mockResolvedValue(mockUser);
        let response = await request(server).get('/users/1');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual(mockUser);
    });
    it('shhould return 404 for non existing user id', async () => {
        getUser.mockResolvedValue(null);
        let response = await request(server).get('/users/178');
        expect(response.statusCode).toEqual(404);
    })

    it('should add a new user in users', async () => {
        let newUser = { id: 3, name: 'Charlie', email: 'charlie@mail.com' };
        addUser.mockResolvedValue(newUser);
        let response = await request(server).post('/users').send({ name: 'Charlie', email: 'charlie@mail.com' });
        expect(response.statusCode).toEqual(201);
        expect(response.body).toEqual(newUser);
    });
});