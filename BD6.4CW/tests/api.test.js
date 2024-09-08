let { getAllBooks, getBook, getAllReviews, getReview } = require('../books.js');
let { app } = require('../index.js');
const http = require('http');

const request = require('supertest');

//creating mock functions
jest.mock('../books.js', () => ({
    ...jest.requireActual('../books.js'),
    getAllBooks: jest.fn(),
    getBook: jest.fn(),
    getAllReviews: jest.fn(),
    getReview: jest.fn()
}));

// server making

let server;
beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3001, done);
});
afterAll((done) => {
    server.close(done);
});

describe('API Error handling tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('GET API /api/books should return 404 if no book is used to found', async () => {
        getAllBooks.mockReturnValue([]);
        let result = await request(server).get('/api/books');
        expect(result.status).toEqual(404);
        expect(result.body.error).toBe("No books found");
    });

    it('GET API /api/books/:id should return 404 if non-existing id is used', async () => {
        getBook.mockReturnValue(null);
        let result = await request(server).get('/api/books/25');
        expect(result.status).toEqual(404);
        expect(result.body.error).toBe("No book found");
    });

    it('GET API /api/reviews should return 404 if no review found', async () => {
        getAllReviews.mockReturnValue([]);
        let result = await request(server).get('/api/reviews');
        expect(result.status).toEqual(404);
        expect(result.body.error).toBe("No reviews found");
    });

    it('GET API /api/reviews should return 404 for non-existing id of the reviews', async () => {
        getReview.mockReturnValue(null);
        let result = await request(server).get('/api/reviews/455');
        expect(result.status).toBe(404);
        expect(result.body.error).toBe("No review found");
    })

});
