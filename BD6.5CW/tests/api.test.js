let { app, validateBook, validateReview, validateUser } = require('../index.js');
let http = require('http');
let request = require('supertest');

let server;
beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3001, (done));
});

afterAll((done) => {
    server.close(done);
});

describe('Api endpoints for add data', () => {
    it('/users should add the new user ', async () => {
        let response = await request(server).post('/users').send({ name: 'John Doe', email: 'john@gmail.com' });
        expect(response.statusCode).toEqual(201);
        expect(response.body).toEqual({ id: 1, name: 'John Doe', email: 'john@gmail.com' });
    });

    it('/users should return 404 for invalid input email', async () => { 
        let response = await request(server).post('/users').send({ name: 'John Doe' });
        expect(response.statusCode).toEqual(400);
        expect(response.text).toEqual("Email is required and must be a string");
    });

    it('/books should add the new book', async () => {
        let response = await request(server).post('/books').send({ title: 'The Alchemist', author: 'Paulo Coelho' });
        expect(response.statusCode).toEqual(201);
        expect(response.body).toEqual({ id: 1, title: 'The Alchemist', author: 'Paulo Coelho' });
    });
    it('/books should return 404 for invalid input title', async () => {
        let response = await request(server).post('/books').send({ author: 'Paulo Coelho' });
        expect(response.statusCode).toEqual(400);
        expect(response.text).toEqual("Title is required and must be a string" );
    });
    
    it('/reviews should add new review', async () => {
        let response = await request(server).post('/reviews').send({ content: "hdjegfj", userId: 1 });
        expect(response.statusCode).toEqual(201);
        expect(response.body).toEqual({ id: 1, content: "hdjegfj", userId: 1 });
    });
    it('/reviews should return 404 for the invalid input content', async () => { 
        let response = await request(server).post('/reviews').send({ userId: 1 });
        expect(response.statusCode).toEqual(400);
        expect(response.text).toEqual("Content is required and must be a string");
    });
});

describe('Validation functions', () => { 
    it('/users should validate user input', async () => {
        expect(validateUser({ name: 'John Doe', email: 'johnDoegamil.com' })).toBeNull();
        expect(validateUser({ name: 'john doe' })).toEqual("Email is required and must be a string");
        expect(validateUser({ email: 'jon@gmail.com' })).toEqual("Name is required and must be a string");
    });

    it('/books should validate inputs correctly', async () => { 
        expect(validateBook({ title: 'The Alchemist', author: 'Paulo Coelho' })).toBeNull();
        expect(validateBook({ author: 'Paul' })).toEqual("Title is required and must be a string");
        expect(validateBook({ title: 'The Alchemist' })).toEqual("Author is required and must be a string");
    });
    
    it('/reviews should validate inputs correctly', async () => {
        expect(validateReview({ content: "hdjegfj", userId: 1 })).toBeNull();
        expect(validateReview({ userId: 1 })).toEqual("Content is required and must be a string");
        expect(validateReview({ content: "hdjegfj" })).toEqual("User ID is required and must be a number");
    });
});
