const inquirer = require('inquirer');
const department = require('./department');
const employee = require('./employee');

const roleQuery = {
    askRole: () => {
        return inquirer
            .prompt(
                [{
                    name: 'roleName',
                    message: 'Title?'
                }]
            )
    },
    addRole: (connection, roleTitle) => {
        return connection.query(
            `INSERT INTO role (title) VALUES (?)`,
            [roleTitle]
        )
    },
    addSalary: (connection, roleSalary) => {
        return connection.query(
            `INSERT INTO role (salary) VALUES (?)`,
            [roleSalary]
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