-- create a biscuits table
CREATE TABLE IF NOT EXISTS biscuits (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, --unique identifier
  biscuit_name VARCHAR(255),
  src TEXT, -- image url
  description TEXT,
  crunchiness INT
);

-- create new data into the biscuits table
-- single quotes for strings

INSERT INTO biscuits (biscuit_name, src, description, crunchiness) 
VALUES ('Bourbon', 'https://images.unsplash.com/photo-1603194556500-bdd4c947a952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 6),
('Custard Cream', 'https://avatars.githubusercontent.com/u/144026692?v=4', 'Pretty sweet', 5 ),
('Hobnob', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg', 'Mouth-watering piece of heaven', 4),
('Ginger Nuts', 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 4 ),
('Chocolate Cookies', 'https://images.unsplash.com/photo-1589988802149-7f9cb13a468e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Delicious cookie with scrumptious chocolate', 4);


-- read all the data in my biscuits table
-- SELECT * FROM biscuits;
SELECT biscuit_name, src, description, crunchiness FROM biscuits;
-- read all the data in my biscuits table with the crunchiness of 4;
SELECT biscuit_name, src, description, crunchiness FROM biscuits WHERE crunchiness = 4;
-- read all the data in my biscuits table with the crunchiness of 4 in alphabetical order using the biscuit name (ASC or DESC)
SELECT biscuit_name, src, description, crunchiness FROM biscuits WHERE crunchiness = 4 ORDER BY biscuit_name ASC;

-- read all the data in my biscuits table with the crunchiness of 4, but show me only 1 result
SELECT id, biscuit_name, src, description, crunchiness FROM biscuits WHERE crunchiness = 4 LIMIT 1;

-- read all the data in my biscuits table and add a nickname (alias) to the columns for the user
-- we use double quotes for the aliases
SELECT biscuit_name AS "Biscuit Name", src AS "Image Link", description AS "Biscuit Description", crunchiness FROM biscuits;

-- delete one entry in my biscuits table
-- ALWAYS specify the entry you want to delete!!!!!!!!! --> id
DELETE FROM biscuits WHERE id = 5;

--update one entry in my biscuits table
-- ALWAYS specify the entry you want to update!!!!!!!!! --> id
UPDATE biscuits SET crunchiness = 5 WHERE id = 4;
UPDATE biscuits SET description = 'Best biscuit to ever exist' WHERE id = 4;
