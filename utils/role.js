const inquirer = require('inquirer');

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
        return connection.query(
            `SELECT department.id, name, role.department_id, role.title
            FROM department
                LEFT JOIN role ON role.department_id = department.id;
                `);
    }
}

module.exports = roleQuery;