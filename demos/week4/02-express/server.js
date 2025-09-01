// import express from our node_modules
import express from "express";

// instantiate our express (create an instance of)
const app = express();

// make sure our POST endpoint can recieve data in the body
app.use(express.json());

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

// basic POST endpoint
app.post("/example", function (request, response) {
  response.json("This is the POST end point /example");
});

// a POST endpoint that accepts data in the body
app.post("/add", function (request, response) {
  const num1 = request.body.num1;
  const num2 = request.body.num2;
  response.json(num1 + num2);
});

// GET and POST endpoints can share a name, so long as the METHOD is different
app.post("/bananas", function (request, response) {
  response.json(
    "I don't do anything, but look, I'm different to the GET /bananas endpoint"
  );
});

// start our server
app.listen(8080, function () {
  console.log("App is running on port 8080");
});
