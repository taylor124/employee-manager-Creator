const mysql = require('mysql2');
const inquirer = require('inquirer');
const ctable = require('console.table');
const department = require('./utils/department');
const role = require('./utils/role');
const employee = require('./utils/employee');
const util = require('util');



// Creates the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: 'Pianoplayer123$',
  database: 'employeeTracker_db'
});

connection.query = util.promisify(connection.query);

const startQuery = () => {
  inquirer
    .prompt(
      [{
        name: 'toDo',
        message: 'What would you like to do?',
        type: 'list',
        choices:
          [/*'Add an Employee',
            'Remove an Employee',
            'Update an Employee',
            'Add a Role',
            'Add a Department',*/
            'View all Roles',
            'View all Employees',
            'View all Employees by Manager',
            'View all Employees by Department']
      }]
    ).then(answers => {
      switch (answers.toDo) {
        case 'View all Employees':
          employee.viewEmployees(connection).then(results => {
            console.log('\n')
            console.table(results); // results contains rows returned by server
            startQuery();
          })
          break;
        case 'View all Employees by Manager':
          employee.employeesByManager(connection).then(results => {
            console.log('\n')
            console.table(results); // results contains rows returned by server
            startQuery();
          })
          break;
        case 'View all Employees by Department':
          employee.employeesByDepartment(connection).then(results => {
            console.log('\n')
            console.table(results); // results contains rows returned by server
            startQuery();
          })
          break;
        case 'View all Roles':
          role.viewRoles(connection).then(results => {
            console.log('\n')
            console.table(results); // results contains rows returned by server
            startQuery();
          })
          break;
      }
    });
};



startQuery();