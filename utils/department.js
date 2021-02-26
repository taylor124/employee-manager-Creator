const inquirer = require('inquirer');

const departmentQuery = {
    askDepartment: () => {
        return inquirer
            .prompt(
                [{
                    name: 'depName',
                    message: 'Department?'
                }]
            )
    },
    addDepartment: (connection, departmentName) => {
        return connection.query(
            `INSERT INTO department (name) VALUES (?)`,
            [departmentName]
        )
    },
    viewDepartments: (connection) => {
        return connection.query(
            `SELECT department.id, name, role.department_id, role.title
            FROM department
                LEFT JOIN role ON role.department_id = department.id;
            `);
    }
}

module.exports = departmentQuery;