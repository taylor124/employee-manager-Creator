const inquirer = require('inquirer');

const employeeQuery = {
    askEmployee: () => {
        return inquirer
            .prompt(
                [{
                    name: 'employeeName',
                    message: 'Name of the Employee?',
                    type: 'input'
                }]
            )
    },

    employeesByManager: (connection) = async () => {
        inquirer
            .prompt(
                [{
                    name: `managerName`,
                    message: 'View Employees by which Manager?',
                    type: 'list',
                    choices: []
                }]
            )
    },

    employeesByDepartment: (connection) => {
        return connection.query(`SELECT * FROM employee;`);
    },

    viewEmployees: (connection) => {
        return connection.query(`
        SELECT
        e.id,
        e.first_name,
        e.last_name,
        role.title,
        department.name,
        role.salary,
        CONCAT(m.first_name, ' ', m.last_name) AS manager
      FROM
        employee e
      LEFT JOIN role 
          ON role.id = e.id
      LEFT JOIN department
          ON role.department_id = department.id
      LEFT JOIN employee m
          ON e.manager_id = m.id;
          `);
    }
}

module.exports = employeeQuery;