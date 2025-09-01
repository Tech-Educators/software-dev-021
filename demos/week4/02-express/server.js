// import express from our node_modules
import express from "express";

// instantiate our express (create an instance of)
const app = express();

// our data (later, we can replace this with information got from a database)
const bananas = [
  { varietal: "Red", taste: "Hot" },
  { varietal: "Cavendish", taste: "Sweet" },
  { varietal: "Blue Java", taste: "Ice cream" },
  { varietal: "Manzano", taste: "Banana" },
];

// our root endpoint
app.get("/", function (request, response) {
  response.send("You are looking at my root route. How roude!");
});

// bananas endpoint
app.get("/bananas", function (request, response) {
  response.json(bananas);
});

// random banana endpoint
app.get("/random", function (request, response) {
  const randomBanana = bananas[Math.floor(Math.random() * bananas.length)]; // returns a single item from the array
  response.json(randomBanana);
});

// start our server
app.listen(8080, function () {
  console.log("App is running on port 8080");
});
