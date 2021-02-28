const inquirer = require('inquirer');
const department = require('./department');
const employee = require('./employee');

const roleQuery = {
    askRole: () => {
        return inquirer
            .prompt(
                [{
                    name: 'roleName',
                    message: 'Title Name?',
                    type: 'input'
                },
                {
                    name: 'roleSalary',
                    message: 'Annual Salary',
                    type: 'input'
                },
                {
                    name: 'departmentRole',
                    message: 'What department does it belong to'
                }
                ]
            )
    },
    addRole: (connection, roleTitle, roleSalary, departmentRole) => {
        return connection.query(
            `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,
            [roleTitle, roleSalary, departmentRole]
        )
    },
    viewRoles: (connection) => {
        return connection.query(`
            SELECT 
            role.title, 
            role.id,
            name AS department, 
            role.salary
            FROM role
            LEFT JOIN department
            ON role.department_id = department.id;
            `);
    }
}

module.exports = roleQuery;