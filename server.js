const mysql = require('mysql2');
const inquirer = require('inquirer');
const ctable = require('console.table');
const department = require('./utils/department');
const role = require('./utils/role');
const employee = require('./utils/employee');
const util = require('util');
const { addDepartment } = require('./utils/department');



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
          ['Add an Employee',
            'Update an Employee',
            'Add a Role',
            'Add a Department',
            'View all Departments',
            'View all Roles',
            'View all Employees']
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
        /*case 'View all Employees by Manager':
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
          break;*/
        case 'View all Roles':
          role.viewRoles(connection).then(results => {
            console.log('\n')
            console.table(results); // results contains rows returned by server
            startQuery();
          })
          break;
        case 'Add a Department':
          department.askDepartment().then(answers => {
            department.addDepartment(connection, answers.depName).then(
              results => {
                console.log(results)
                startQuery()
              }
            )

          })
          break;
        case 'Add a Role':
          role.askRole().then(answers => {
            role.addRole(connection, answers.roleName, answers.roleSalary, answers.departmentRole).then(
              results => {
                console.log(results)
                startQuery()
              }
            )
          })
          break;
          case 'Add an Employee':
          employee.askEmployee().then(answers => {
            employee.addEmployee(connection, answers.employeeFirstName, answers.employeeLastName, answers.employeeRole, answers.managerId).then(
              results => {
                console.log(results)
                startQuery()
              }
            )
          }).catch(err => console.log(err))
          break;
          case 'View all Departments':
          department.viewDepartments(connection).then(results => {
            console.log('\n')
            console.table(results); // results contains rows returned by server
            startQuery();
          })
          break;
        case 'Update an Employee':
          employee.askEmployeeUpdate().then(answers => {
            employee.updateEmployee(connection, answers.employeeId, answers.roleId).then(results => {
              console.log(results)
              startQuery();
            })
          })
          break;
      }
    }
    )
};



startQuery();