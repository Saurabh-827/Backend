let { app } = require('../index.js');
let { getArticles, getArticle, getComments, getComment } = require('../articles.js');
let request = require('supertest');
let http = require('http');
jest.mock('../articles.js', () => ({
    ...jest.requireActual('../articles.js'),
    getArticles: jest.fn(),
    getArticle: jest.fn(),
    getComments: jest.fn(),
    getComment: jest.fn(),
}));

let server;

beforeAll((done) => { 
    server = http.createServer(app);
    server.listen(3000, (done));
});
afterAll((done) => {
    server.close(done);
});

describe('Error handling tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('GeT API /articles should return 404 if no articles present', async () => {
        getArticles.mockReturnValue([]);
        let response = await request(server).get('/articles');
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('No articles found');
    });

    it('GET API /articles/:id should return 404 non-existing id of article ', async () => {
        getArticle.mockReturnValue(null);
        let response = await request(server).get('/articles/65');
        expect(response.status).toEqual(404);
        expect(response.body.error).toEqual('Article not found');
    });

    it('GET API /comments should return 404 if no comments present', async () => {
        getComments.mockReturnValue([]);
        let response = await request(server).get('/comments');
        expect(response.status).toEqual(404);
        expect(response.body.error).toBe('No comments found');
    });

    it('GET API /comments should return 404 if non-existing comment id is passed', async () => { 
        getComment.mockReturnValue(null);
        let response = await request(server).get('/comments/65');
        expect(response.status).toEqual(404);
        expect(response.body.error).toBe('Comment not found');
    });

});
