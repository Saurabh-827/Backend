let { getMovies, getMoviesById, addMovie, app } = require('../index.js');
const http = require('http');

jest.mock('../index.js', () => ({
    ...jest.requireActual('../index.js'),
    getMovies: jest.fn(),
    getMoviesById: jest.fn(),
    addMovie: jest.fn(),
}));

let server;
beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3001, (done));
});

afterAll((done) => {
    server.close(done);
});

describe('Mock Functions test', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('getMovies should return all movies', () => {
        let mockMovies = [
            { id: 1, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
            { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola' },
            { id: 3, title: 'The Dark Knight', director: 'Christopher Nolan' }
        ];
        getMovies.mockReturnValue(mockMovies);
        let result = getMovies();
        expect(result).toEqual(mockMovies);
        expect(getMovies).toHaveBeenCalled();
    });

    test('getMovieById should return movie by id', () => {
        let nockMovie = { id: 3, title: 'The Dark Knight', director: 'Christopher Nolan' };
        getMoviesById.mockReturnValue(nockMovie);
        let result = getMoviesById(3);
        expect(result).toEqual(nockMovie);
        expect(getMoviesById).toHaveBeenCalledWith(3);
    });

    test('getMovieById should return undefined for non-existing id', () => {
        getMoviesById.mockReturnValue(undefined);
        let result = getMoviesById(888);
        expect(result).toBeUndefined;
        expect(getMoviesById).toHaveBeenCalledWith(888);
    });

    test('addMovie should add given movie', () => {
        let newMovie = { id: 4, title: 'The Dark Knight', director: 'Christopher Nolan' };
        addMovie.mockReturnValue(newMovie);
        let result = addMovie(newMovie);
        expect(result).toEqual(newMovie);
        expect(addMovie).toHaveBeenCalled(newMovie);
    })
});