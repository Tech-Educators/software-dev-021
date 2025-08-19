console.log("hello world");

//functions
//a reusable block of code that performs a task

//TODO: I want to say hi to Joe

//structure
// function functionNameTask(optionalParameters) {
//action (task)
// }

function sayHi() {
  console.log("Hello Joe");
}

//we need to call our function to be executed
// sayHi();

function sayHi(username) {
  console.log(`Hi ${username}`);
}

function greetUser(username, greeting) {
  console.log(`${greeting}, ${username}`);
}

greetUser("Joe", "Good morning");
greetUser("Nicky", "Hello");

//Our functions have a specific scope --> block scope / function scope

function addTwoNumbers() {
  let a = 2;
  let b = 4;
  console.log(a + b);
}
// console.log(a); //this errors because our global scope has no access to the block scope of our function
// add();

//If we want to take an element inside a function (block scope) and make it accessible to the rest of our app (global scope), we can use the keyword return

function add(a, b) {
  return a + b;
}

console.log(add(6, 3));

let a = 6;
let b = 7;

function subtract() {
  console.log(a - b);
}
subtract();
