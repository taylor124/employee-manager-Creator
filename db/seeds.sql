INSERT INTO department (id, name)
VALUES
    (1, 'Sales and marketing'),
    (2, 'Business'),
    (3, 'Social services'),
    (4, 'Social services'),
    (5, 'Sales and marketing'),
    (6, 'Business'),
    (7, 'Health care'),
    (8, 'Business' ),
    (9, 'Health care'),
    (10, 'Business'),
    (11, 'Social services');
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
    (2, 'Buena', 'Alderman', 6, 2),
    (3, 'Louie', 'Hinchey', 2, 5),
    (4, 'Annice', 'Dobbs', 9, 3),
    (5, 'Jody', 'Outten', 7, 5),
    (6, 'Margrett', 'Privette', 3, 6),
    (7, 'Lashonda', 'Smits', 3, 1),
    (8, 'Johnson', 'Schnabel', 9, 5),
    (9, 'Mammie', 'Storer', 5, 7),
    (10, 'Verlie', 'Winders', 5, 9),
    (11, 'Wilburn', 'Gusler', 2, 2);