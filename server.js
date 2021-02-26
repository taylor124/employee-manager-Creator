const mysql = require('mysql2');
const inquirer = require('inquirer');
const ctable = require('console.table');
const department = require('./utils/department');
const role = require('./utils/role');
const employee = require('./utils/employee');
const util = require('util');
const { type } = require('os');



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

connection.query = util.promisify(connection.query)
const startQuery = () => {
inquirer
  .prompt(
    [{
      name: 'toDo',
      message: 'What would you like to do?',
      type: 'list',
      choices: ['View all departments', 'Add a department']
    }]
  ).then(answers => {
    switch (answers.toDo) {
      case 'View all departments':
        department.viewDepartments(connection).then(results => {
          console.log('\n')
          console.table(results); // results contains rows returned by server
          startQuery();
        })
        break;
      case 'Add a department':
        department.askDepartment().then(depAnswers => {
          console.log(depAnswers)
          department.addDepartment(connection, depAnswers.depName).then(results =>{
            console.log(results);
            continueRoleQuery();
          })
        })
        break;
    }
  });
};

const continueRoleQuery = () => {
  inquirer
    .prompt(
      [{
        name: 'toDoRole',
        message: 'What would you like to do?',
        type: 'list',
        choices: ['View all roles', 'Add a title']
      }]
    ).then(answers => {
      switch (answers.toDoRole) {
        case 'View all roles':
          role.viewRoles(connection).then(results => {
            console.log('\n')
            console.table(results); // results contains rows returned by server
            continueRoleQuery();
          })
          break;
          case 'Add title and salary':
            role.askRole().then(roleAnswers => {
              console.log(roleAnswers)
              role.addRole(connection, roleAnswers.roleName).then(results =>{
                console.log(results);
                startQuery();
              })
            })
            break;
      }
    });
  };

startQuery();