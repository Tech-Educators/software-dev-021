//imports
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

//start express
const app = express();

//config express with JSON and cors
app.use(express.json());
app.use(cors());

//set up a port
const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

//set up a root route
//TODO: READ (GET) a welcome message in the root route
app.get("/", (_, res) => {
  res.json({ message: "Welcome to the server. GET comfy!" });
});

//=============================================================
//TODO: READ all staff data in the database with name "Manny"
app.get("/staff-manny", async (_, res) => {
  //query the database
  const query = await db.query(
    `SELECT name, location, age, role FROM staff WHERE name = $1`,
    [
      //do not add values directly here, this is for demo purposes
      "Manny",
    ]
  );
  res.json(query.rows);
});

//TODO: CREATE (POST) new data in the database
app.post("/add-staff", (req, res) => {
  //an element to store the data coming from the client
  const newStaff = req.body.formValues;
  //database query
  //in our SQL queries, we can have a placeholder (parameter) that we will replace with the actual values when the client sends them
  const query = db.query(
    `INSERT INTO staff (name, location, age, role) VALUES ($1, $2, $3, $4)`,
    [newStaff.name, newStaff.location, newStaff.age, newStaff.role]
  );
  res.json("Data sent", query);
});
