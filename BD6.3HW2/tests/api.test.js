let { app, getEmployees, getEmployee, addEmployee } = require('../index');
const request = require('supertest');
let http = require('http');
let server;

jest.mock('../index.js', () => ({
    ...jest.requireActual('../index.js'),
    getEmployees: jest.fn(),
    getEmployee: jest.fn(),
    addEmployee: jest.fn()
}));
beforeAll((done) => { 
    server = http.createServer(app);
    server.listen(3001, done);
});

afterAll((done) => {
    server.close(done);
});

describe('functions testing', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should retrieve all the employees', async () => {
        const mockEmployees = [
            { id: 1, name: 'John Doe', email: 'john@gmail.com', department: 'IT' },
            { id: 2, name: 'Jane Doe', email: 'jane@gmail.com', department: 'HR' },
        ];
        getEmployees.mockResolvedValue(mockEmployees);
        let response = await request(server).get('/employees');
        expect(response.body).toEqual(mockEmployees);
        expect(response.statusCode).toEqual(200);
    });

    it('should retrieve an employee by id', async () => {
        const mockEmployee = { id: 1, name: 'John Doe', email: 'john@gmail.com', department: 'IT' };
        getEmployee.mockResolvedValue(mockEmployee);
        let response = await request(server).get('/employees/1');
        expect(response.body).toEqual(mockEmployee);
        expect(response.statusCode).toEqual(200);

    });

    it('should return 404 for non-existing employee id', async () => {
        getEmployee.mockResolvedValue(null);
        let response = await request(server).get('/employees/999');
        expect(response.statusCode).toEqual(404);
    });

    it('should add a new employee in the employees', async () => {
        const newEmployee = { id: 3, name: 'Johno', email: 'johno@gmail.com', department: 'IT' };
        addEmployee.mockResolvedValue(newEmployee);
        let response = await request(server).post('/employees').send({name: 'Johno', email: 'johno@gmail.com', department: 'IT'});
        expect(response.body).toEqual(newEmployee);
        expect(response.statusCode).toEqual(201);
    });

    });