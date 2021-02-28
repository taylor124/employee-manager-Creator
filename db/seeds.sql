INSERT INTO
  department (name)
VALUES
  ('Sales and marketing'),
  ('Business'),
  ('Social services'),
  ('Health care');
INSERT INTO
  role (title, salary, department_id)
VALUES
  ('Marketing manager', '147240', 1),
  ('Financial manager', '146830', 2),
  ('Pilot', '146660', 3),
  ('Lawyer', '144230', 3),
  ('Sales manager', '140320', 1),
  ('Business operations manager', '123880', 2),
  ('Pharmacist', '123670', 4),
  ('Financial advisor', '121770', 2),
  ('Optometrist', '119980', 4),
  ('Actuary', '116250', 2),
  ('Political scientist', '115300', 3);
INSERT INTO
  employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Blanca', 'Fray', 1, NULL),
  ('Buena', 'Alderman', 2, 2),
  ('Louie', 'Hinchey', 3, 3),
  ('Annice', 'Dobbs', 4, 2),
  ('Jody', 'Outten', 1, 2),
  ('Margrett', 'Privette', 2, 2),
  ('Lashonda', 'Smits', 3, 3),
  ('Johnson', 'Schnabel', 4, 4),
  ('Mammie', 'Storer', 1, 1),
  ('Verlie', 'Winders', 1, 1),
  ('Wilburn', 'Gusler', 4, 4);