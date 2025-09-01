import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

app.get("/message", function (request, response) {
  response.json("55 BURGERS 55 FRIES 55 DRINKS");
});

app.listen(8080, function () {
  console.log("Running on port 8080");
});
