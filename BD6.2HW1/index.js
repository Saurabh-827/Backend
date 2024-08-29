const express = require('express');
const app = express();

let employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager' },
    { id: 3, name: 'Sam Johnson', position: 'Designer' }
];
//here we write functions
function getEmployees() {
    return employees;
};

function getEmployeeById(empId) { 
    return employees.find((e) => e.id == empId);
};

function addEmployee(newEmp) {
    employees.push(newEmp);
    return newEmp;  
};
//here we write routes
app.get('/employees', (req, res) => { 
    res.json(getEmployees());
});

app.get('/employees/:id', (req, res) => { 
    let empId = req.params.id;
    let employee = getEmployeeById(empId);
    if (employee) return res.json(employee);
    res.status(404).json('Employee not found');
});

app.post('/employees', (req, res) => { 
    let newEmp = req.body;
    res.json(addEmployee(newEmp));
});
module.exports = { app, getEmployees, getEmployeeById, addEmployee };