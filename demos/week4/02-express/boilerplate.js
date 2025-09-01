// import express from our node_modules
import express from "express";

// instantiate our express (create an instance of)
const app = express();

// our root endpoint
app.get("/", function (request, response) {
  response.send("You are looking at my root route. How roude!");
});

// start our server
app.listen(8080, function () {
  console.log("App is running on port 8080");
});
