//imports
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

//initialise express
const app = express();

//config express with JSON
//config cors in express
app.use(express.json());
app.use(cors());

//set up a port
const PORT = 8080;

app.listen(PORT, () => {
  console.info(`Server is running in port ${PORT}`);
});

//root route
//GET --> READ
app.get("/", (_, res) => {
  //   res.json({ message: "Welcome to the server. GET comfy" });
  res.send("Welcome");
});

//=============================================

//routes

//TODO: read data from the biscuits table
app.get("/biscuits", async (_, res) => {
  //error handling
  //try ... catch
  try {
    //query the database to send me the biscuits data
    //test your query in the SQL editor first to check syntax
    const data = await db.query(
      `SELECT biscuit_name, src, description, crunchiness FROM biscuits;`
    );
    //wrangling the database data Result object
    res.json(data.rows);
  } catch (error) {
    console.error("Error in the biscuits route", error);
    res.status(500).json({ success: false });
  }
});

//TODO: read data from biscuits and customers
app.get("/biscuits-customers", async (_, res) => {
  try {
    const data = await db.query(`
SELECT biscuits.biscuit_name AS "biscuitName", biscuits.src AS "imageLink", biscuits.description, biscuits.crunchiness, customers.customer_name AS "customerName"
FROM customers JOIN biscuits ON biscuits.customer_id = customers.id;`);
    res.json(data.rows);
  } catch (error) {
    console.error("Error in the biscuits-customers route", error);
    res.status(500).json({ success: false });
  }
});

//TODO: create new data in the biscuits table
app.post("/add-biscuit", (req, res) => {
  // const biscuitData = req.body;
  //destructure the body (alternative)
  const { biscuitName, src, description, crunchiness, customerId } = req.body;

  try {
    const query = db.query(
      `INSERT INTO biscuits (biscuit_name, src, description, crunchiness, customer_id) VALUES 
($1, $2, $3, $4, $5);`,
      [biscuitName, src, description, crunchiness, customerId]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error in add-biscuit route", error);
    res.status(500).json({ success: false });
  }
});
