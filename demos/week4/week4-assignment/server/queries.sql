-- Basic SQL queries

-- create a table
-- constraints: data type that we want to store in each column
-- id column: represent each entry uniquely (PRIMARY KEY)
CREATE TABLE staff (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  location VARCHAR(255),
  age INT,
  role VARCHAR(255)
);

-- add new data to the table
INSERT INTO staff (name, location, age, role)
VALUES ('Manny', 'Norwich', 50, 'instructor'),
('Tim', 'Norwich', 120, 'course director');

-- select some data from my table
-- when we select specific columns, we are not creating a new table. We are filtering the current table
SELECT * FROM staff;

SELECT name, location FROM staff;

-- the keyword WHERE adds a condition to our SELECT
SELECT * FROM staff WHERE name = 'Joe';





