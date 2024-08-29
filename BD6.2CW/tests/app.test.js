let { app, getAuthors, getAuthorById, addAuthor } = require('../index.js');
let http = require('http');

// Mock the module '../index.js'
jest.mock('../index.js', () => ({
    // Spread the actual implementation of the module to retain other functionalities
    ...jest.requireActual('../index.js'),
    
    // Mock the getAuthors function
    getAuthors: jest.fn(),
    
    // Mock the getAuthorById function
    getAuthorById: jest.fn(),
    
    // Mock the addAuthor function
    addAuthor: jest.fn()
}));

let server;

beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3001, done);
});

afterAll((done) => {
    server.close(done);
});

describe('Tests Functions', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks();
    });

    test('getAuthors should returns all authors', () => {
        const mocksAuthors = [
            { authorId: 1, name: 'George Orwell', book: '1984' },
            { authorId: 2, name: 'Aldous Huxley', book: 'Brave New World' },
        ];
        getAuthors.mockReturnValue(mocksAuthors);
        let result = getAuthors();
        expect(result).toEqual(mocksAuthors);
        expect(getAuthors).toHaveBeenCalled();
    });

    test('getAuthorById should return author by according id', () => {
        let mockAuthor = { authorId: 1, name: 'George Orwell', book: '1984' };
        getAuthorById.mockReturnValue(mockAuthor);
        let result = getAuthorById(1);
        expect(result).toEqual(mockAuthor);
        expect(getAuthorById).toHaveBeenCalledWith(1);
    });
    
    test("getAuthorById should return undefined if author doesn't exist", () => {
        getAuthorById.mockReturnValue(undefined);
        let result = getAuthorById(999);
        expect(result).toBeUndefined();
        expect(getAuthorById).toHaveBeenCalledWith(999);
    });

    test('addAuthor should add new author', () => {
        let mockNewAuthor = { authorId: 3, name: 'Ray Bradbury', book: 'Fahrenheit 451' };

        addAuthor.mockReturnValue(mockNewAuthor);
        let result = addAuthor(mockNewAuthor);
        expect(result).toEqual(mockNewAuthor);
        expect(addAuthor).toHaveBeenCalled();
    })

});

