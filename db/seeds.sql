INSERT INTO department (id, department_name)
VALUES
    (1, 'Lexicon Co'),
    (2, 'Algebruh Mathematics'),
    (3, 'SuperPlex'),
    (4, 'Quartz OuterSpace Program'),
    (5, 'AbsoluteZero Labs'),
    (6, 'Mega Nova'),
    (7, 'Terra Magma Core'),
    (8, 'Division of Alchemy' ),
    (9, 'Tech Research Facility');

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

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, 'Cardiologist', '$351,827 per year', 1),
    (2, 'Anesthesiologist', '$326,296 per year', 6),
    (3, 'Orthodontist', '$264,850 per year', 2),
    (4, 'Psychiatrist', '$224,577 per year', 9),
    (5, 'Surgeon', '$216,248 per year', 7),
    (6, 'Periodontist', '$214,896 per year', 3),
    (7, 'Physician', '$202,387 per year', 3),
    (8, 'Dentist', '$196,417 per year', 9),
    (9, 'Internal medicine physician', '$194,938 per year', 5),
    (10, 'Obstetrician', '$191,931 per year', 5),
    (11, 'Nurse anesthetist', '$185,856 per year', 2);