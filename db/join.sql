SELECT department.id, name, role.department_id, role.title
FROM department
    INNER JOIN role ON role.department_id = department.id;

SELECT department.id, name, role.department_id, role.title
FROM department
    LEFT JOIN role ON role.department_id = department.id;

SELECT department.id, name, role.department_id, role.title
FROM department
    RIGHT JOIN role ON role.department_id = department.id;

/*===========================================================*/

SELECT employee.id, first_name, last_name, role.department_id, role.title
FROM employee
    INNER JOIN role ON role.id = employee.id;

SELECT employee.id, first_name, last_name, role.department_id, role.title
FROM employee
    RIGHT JOIN role ON role.id = employee.id;

SELECT employee.id, first_name, last_name, role.department_id, role.title
FROM employee
    LEFT JOIN role ON role.id = employee.id;
