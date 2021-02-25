SELECT department.id, department_name
FROM department
    INNER JOIN role ON role.id = department.id;

SELECT department.id, department_name
FROM department
    RIGHT JOIN role ON role.id = department.id;

SELECT department.id, department_name
FROM department
    LEFT JOIN role ON role.id = department.id;