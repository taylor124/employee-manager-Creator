SELECT
  department.id,
  name,
  role.department_id,
  role.title
FROM
  department
  INNER JOIN role ON role.department_id = department.id;
SELECT
  department.id,
  name,
  role.department_id,
  role.title
FROM
  department
  LEFT JOIN role ON role.department_id = department.id;
SELECT
  department.id,
  name,
  role.department_id,
  role.title
FROM
  department
  RIGHT JOIN role ON role.department_id = department.id;
  /*===========================================================*/
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
SELECT
  employee.id,
  first_name,
  last_name,
  role.department_id,
  role.title
FROM
  employee
  RIGHT JOIN role ON role.id = employee.id;
SELECT
  employee.id,
  first_name,
  last_name,
  role.department_id,
  role.title
FROM
  employee
  LEFT JOIN role ON role.id = employee.id;