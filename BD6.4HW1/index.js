const express = require('express');
let { getAllEmployees, getEmployeeById, getAllDepartments, getDepartmentById } = require('./empdepart.js');
const app = express();
app.use(express.json());

app.get('/api/employees', async (req, res) => {
    try {
        let employees = await getAllEmployees();
    if (employees.length === 0) return res.status(404).json({ message: 'No employees found' });
    return employees;
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    };   
});

app.get('/api/employees/:id', async (req, res) => { 
    try {
        let employee = await getEmployeeById(req.params.id);
        if (!employee) return res.status(404).json({ error: 'No employee found' });
        return employee;
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/departments', async (req, res) => { 
    try {
        let departments = await getAllDepartments();
        if (departments.length === 0) return res.status(404).json({ error: 'No departments found' });
        return departments;
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/departments/:id', async (req, res) => {
    try {
        let department = await getDepartmentById(req.params.id);
        if (!department) return res.status(404).json({ error: 'No department found' });
        return department;
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = {app};