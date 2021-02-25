SELECT department.id, name, role.title
FROM department
    INNER JOIN role ON role.id = department.id;

SELECT department.id, name, role.title
FROM department
    RIGHT JOIN role ON role.id = department.id;

SELECT department.id, name, role.title
FROM department
    LEFT JOIN role ON role.id = department.id;