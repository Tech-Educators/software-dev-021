CREATE TABLE IF NOT EXISTS customers (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  customer_name TEXT NOT NULL --to make sure there is always data in this column
);

CREATE TABLE IF NOT EXISTS biscuits (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  biscuit_name VARCHAR(255)  NOT NULL,
  src TEXT  NOT NULL, 
  description TEXT,
  crunchiness INT  NOT NULL,
  customer_id INT REFERENCES customers(id) --foreign key
);

INSERT INTO customers (customer_name) VALUES 
('Joe'),
('Manny'),
('Bertie'),
('Sam'),
('Tim');

-- we need to insert the foreign key value ourselves
INSERT INTO biscuits (biscuit_name, src, description, crunchiness, customer_id) VALUES
('Bourbon', 'https://images.unsplash.com/photo-1603194556500-bdd4c947a952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 6, 1),
('Custard Cream', 'https://avatars.githubusercontent.com/u/144026692?v=4', 'Pretty sweet', 5, 3),
('Hobnob', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg', 'Mouth-watering piece of heaven', 4, 5),
('Ginger Nuts', 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 4, 2 ),
('Chocolate Cookies', 'https://images.unsplash.com/photo-1589988802149-7f9cb13a468e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Delicious cookie with scrumptious chocolate', 4, 1);


-- read the biscuits name, description, customer name from my tables

-- SELECT biscuit_name, description FROM biscuits AND SELECT customer_name FROM customers;
-- to specify where the columns are stored, we will use dot notation
SELECT biscuits.biscuit_name, biscuits.description, customers.customer_name 
FROM customers JOIN biscuits ON customers.id = biscuits.customer_id;