//import express and cors
import express from "express"; //ES6 syntax
import cors from "cors";

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
