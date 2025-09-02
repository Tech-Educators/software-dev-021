//import express and cors
import express from "express"; //ES6 syntax
import cors from "cors";
import { db } from "./dbConnection.js"; //import the pool

//initialiase express
const app = express();
//use express and cors
app.use(cors());
app.use(express.json()); //use JSON to manipulate data

//set up a port
const PORT = 8080;
app.listen(PORT, function () {
  console.info(` Server is running in port ${PORT}`);
});

//set up a root route
//TODO: Read data in this route
app.get("/", function (req, res) {
  res.json({ message: "Welcome to the server. GET comfy" });
});

//TODO: I want to READ all the data from the staff table
// http://localhost:8080/staff --> endpoint, params
app.get("/staff", async function (req, res) {
  //we need to query our database here
  const query = await db.query(`SELECT * FROM staff;`);
  console.log(query);
  //parse data into JSON and wrangle data
  res.json(query.rows);
});

//TODO: I want to READ all the names from the staff table

app.get("/staff-names", async function (req, res) {
  const query = await db.query(`SELECT name FROM staff;`);
  res.json(query.rows);
});
