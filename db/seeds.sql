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
    (1, 'Cardiologist', '351827', 1),
    (2, 'Anesthesiologist', '326296', 6),
    (3, 'Orthodontist', '264850', 2),
    (4, 'Psychiatrist', '224577', 9),
    (5, 'Surgeon', '216248', 7),
    (6, 'Periodontist', '214896', 3),
    (7, 'Physician', '202387', 3),
    (8, 'Dentist', '196417', 9),
    (9, 'Internal medicine physician', '194938', 5),
    (10, 'Obstetrician', '191931', 5),
    (11, 'Nurse anesthetist', '185856', 2);