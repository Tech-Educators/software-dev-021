//imports
import express from "express";
import cors from "cors";

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
  res.send("<ul><li>Welcome</li></ul>");
});
