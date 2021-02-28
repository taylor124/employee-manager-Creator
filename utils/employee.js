const inquirer = require('inquirer');

const employeeQuery = {
    askEmployee: () => {
        return inquirer
            .prompt(
                [{
                    name: 'employeeFirstName',
                    message: 'First Name?',
                    type: 'input'
                },
                {
                    name: 'employeeLastName',
                    message: 'Last Name?',
                    type: 'input'
                },
                {
                    name: 'employeeRole',
                    message: 'Role of the Employee?',
                    type: 'input'
                },
                {
                    name: 'managerId',
                    message: 'What is the Manager id?',
                    type: 'input'
                }
                ]
            )
    },

    addEmployee: (connection, employeeFirstName, employeeLastName, employeeRole, managerId) => {
        return connection.query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
            [employeeFirstName, employeeLastName, employeeRole, managerId]
        )
    },

    updateEmployee: (connection, employeeId, roleId) => {
        return connection.query(
            'UPDATE employee SET role_id = ? WHERE id = ?;',
            [roleId, employeeId]
        )
    },
    askEmployeeUpdate: () => {
        return inquirer
            .prompt(
                [{
                    name: 'employeeId',
                    message: 'What is the Employees Id?',
                    type: 'number'
                },
                {
                    name: 'roleId',
                    message: 'What is the new role?',
                    type: 'number'
                }]
            )
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
          ON e.role_id = role.id
      LEFT JOIN department
          ON role.department_id = department.id
      LEFT JOIN employee m
          ON e.manager_id = m.id;
          `);
    }
}

module.exports = employeeQuery;