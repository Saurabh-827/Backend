let { getAllDepartments, getDepartmentById, getAllEmployees, getEmployeeById } = require('../empdepart.js');
let { app } = require('../index.js');
const request = require('supertest');
const http = require('http');

jest.mock('../empdepart.js', () => ({
    ...jest.requireActual('../empdepart.js'),
    getAllDepartments: jest.fn(),
    getDepartmentById: jest.fn(),
    getAllEmployees: jest.fn(),
    getEmployeeById: jest.fn()
}));

let server;
beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3001, done);
});

afterAll((done) => {
    server.close(done);
}); 

describe('API error handling tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('GET API /api/employees should return 404 if no employees are found', async () => {
        getAllEmployees.mockReturnValue([]);
        let result = await request(server).get('/api/employees');
        expect(result.status).toEqual(404);
        expect(result.body.message).toBe('No employees found');
    });

    it('GET API /api/employees/:id should return 404 if non-existing id is used', async () => {
        getEmployeeById.mockReturnValue(null);
        let result = await request(server).get('/api/employees/67');
        expect(result.status).toEqual(404);
        expect(result.body.error).toBe('No employee found');
    });

    it('GET API /api/departments shhould return 404 if no departments are found', async () => {
        getAllDepartments.mockReturnValue([]);
        let result = await request(server).get('/api/departments');
        expect(result.status).toEqual(404);
        expect(result.body.error).toBe('No departments found');
    });

    it('GET API /api/departments/:id should return 404 if non-existing id is used', async () => {
        getDepartmentById.mockReturnValue(null);
        let result = await request(server).get('/api/departments/45');
        expect(result.status).toEqual(404);
        expect(result.body.error).toBe('No department found');
    });
});
