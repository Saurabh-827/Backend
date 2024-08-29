let { app, getEmployees, getEmployeeById, addEmployee } = require('../index.js');
const http = require('http');

jest.mock('../index.js', () => ({
    ...jest.requireActual('../index.js'),
    getEmployees: jest.fn(),
    getEmployeeById: jest.fn(),
    addEmployee: jest.fn(),
}));
let server;
beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3001, done);
});

afterAll((done) => {
    server.close(done);
});

describe("Functions Test", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('getEmployees should return all employees', () => {
        let mockEmployees = [
            { id: 1, name: 'John Doe', position: 'Software Engineer' },
            { id: 2, name: 'Jane Smith', position: 'Product Manager' },
            { id: 3, name: 'Sam Johnson', position: 'Designer' }
        ];
        getEmployees.mockReturnValue(mockEmployees);
        let result = getEmployees();
        expect(result).toEqual(mockEmployees);
        expect(getEmployees).toHaveBeenCalled();
    });
    
    test('get aemployee by the id', () => {
        let mockEmployee = { id: 2, name: 'Jane Smith', position: 'Product Manager' };

        getEmployeeById.mockReturnValue(mockEmployee);
        let result = getEmployeeById(2);
        expect(result).toEqual(mockEmployee);
        expect(getEmployeeById).toHaveBeenCalledWith(2);
    });

    test('get undefined if id is not present', () => {
        getEmployeeById.mockReturnValue(undefined);
        let result = getEmployeeById(89);
        expect(result).toBeUndefined();
        expect(getEmployeeById).toHaveBeenCalledWith(89);
    });

    test('addEmployee should add the new employeee ', () => {
        let mockNewEmployee = {
            'id': 4,
            'name': 'Alice Johnson',
            'position': 'HR Manager'
        };
        addEmployee.mockReturnValue(mockNewEmployee);
        let result = addEmployee(mockNewEmployee);
        expect(result).toEqual(mockNewEmployee);
        expect(addEmployee).toHaveBeenCalledWith(mockNewEmployee);
    });

});