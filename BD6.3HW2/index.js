const express = require('express');
const app = express();
app.use(express.json());

let employees = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com', department: 'IT' },
    { id: 2, name: 'Jane Doe', email: 'jane@gmail.com', department: 'HR' },
];
//functions
async function getEmployees() {
    return employees;
};

async function getEmployee(id) {
    return employees.find(e => e.id == id);
};

async function addEmployee(employee) {
    employee.id = employees.length + 1;
    employees.push(employee);
    return employee;
};

app.get('/employees', async(req, res) => { 
    return res.json(await getEmployees());
});

app.get('/employees/:id', async (req, res) => { 
    let employee = await getEmployee(req.params.id);
    if(!employee) return res.status(404).send('Employee not found');
    return res.json(employee);
});

app.post('/employees', async (req, res) => {
    return res.status(201).json(await addEmployee(req.body));
});

module.exports = { app , getEmployees, getEmployee, addEmployee };