//If I want to use code from a different location in my project, I need to import it
//In this case, we are importing the cowsay package from the node_modules, so we can use it in this app.js file
// const cowsay = require("cowsay"); //commonJS
import cowsay from "cowsay"; //ES6

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);

function get_cows(error, cow_names) {
  if (error) {
    console.log(error);
  } else if (cow_names) {
    console.log(`Number of cows available: ${cow_names.length}`);
  }
}

cowsay.list(get_cows);
