INSERT INTO department (id, name) 
VALUES
    (1, 'Sales and marketing'),
    (2, 'Business'),
    (3, 'Social services'),
    (4, 'Health care');
INSERT INTO role (id, title, salary, department_id) 
VALUES
    (1, 'Marketing manager', '147240', 1),
    (2, 'Financial manager', '146830', 2),
    (3, 'Pilot', '146660', 3),
    (4, 'Lawyer', '144230', 3),
    (5, 'Sales manager', '140320', 1),
    (6, 'Business operations manager', '123880', 2),
    (7, 'Pharmacist', '123670', 4),
    (8, 'Financial advisor', '121770', 2),
    (9, 'Optometrist', '119980', 4),
    (10, 'Actuary', '116250', 2),
    (11, 'Political scientist', '115300', 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) 
VALUES
    (1, 'Blanca', 'Fray', 1, 1),
    (2, 'Buena', 'Alderman', 2, 2),
    (3, 'Louie', 'Hinchey', 3, 3),
    (4, 'Annice', 'Dobbs', 4, 4),
    (5, 'Jody', 'Outten', 1, 1),
    (6, 'Margrett', 'Privette', 2, 2),
    (7, 'Lashonda', 'Smits', 3, 3),
    (8, 'Johnson', 'Schnabel', 4, 4),
    (9, 'Mammie', 'Storer', 1, 1),
    (10, 'Verlie', 'Winders', 1, 1),
    (11, 'Wilburn', 'Gusler', 4, 4);