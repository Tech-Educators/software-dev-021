//add a message to the console to test
console.log("hello world");

//conditionals
//structure

// if (condition) {
//     action
// }

//example

//pseudo-code --> this is a way to put our thoughts into code
// if (5 is more than 2) {
//send a message to the console that says: 5 is greater than 2
// }

//code
if (5 > 2) {
  //this condition is truthy
  console.log("5 is greater than 2");
}

//more examples

let apples = 5;
let pears = 3;

//TODO: if apples is less than pears, I want to send a message to the console that says: "you need more apples"

//pseudo-code
// if (apples is less than pears) {
//I want to send a message to the console that says: "you need more apples
// }

// code
if (apples < pears) {
  //this condition is falsey --> our action does not happen
  console.log("you need more apples");
}

// conditional with multiple conditions
if (apples < pears) {
  //this condition is falsey --> our action does not happen
  console.log("you need more apples");
} else if (apples > pears) {
  //this condition is truthy --> our action happens
  console.log("you need more pears");
} else if (apples === pears) {
  //this condition is falsey --> our action does not happen
  console.log("Apples and pears are the same!");
} else {
  //this statement does not have a condition --> the action will always happen if the rest of conditions are falsey (it's our catch-all action to account for any possible situation)
  console.log("Check your fruit bowl");
}

//====================================================
//equals operators
// == --> is comparing the values
// === --> is comparing values AND data types
