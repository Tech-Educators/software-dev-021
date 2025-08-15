// Data type : string
// let myName = "Joe";

//Data type : number
// let myNumber = 42;

//Even though the charactes used in this value are numbers, the presence of quote marks means that this data is a string.
// let moreData = "42";

// Data type : boolean
// Boolean values can only be true or false (truthy or falsy)
// let isWarm = true;
// let isSunny = false;

// console.log(myName + " " + myNumber);

// Template literals
// Template literals must be wrapped by backticks ``
// The syntax for the templated variable is ${}
//The value of the specified variables will be substituted for the template literal.

// console.log(`My name is ${myName} and my lucky number is ${myNumber}`);

// console.log(typeof isWarm);

// let newVariable;
// typeof is a useful feyword to use when you want to find out what data type a value has.
// console.log(typeof newVariable);

// type coercion
//this is a number
// let myNumber = 3;
//this is a string
// let myOtherNumber = " 7";

// let sum = myNumber + myOtherNumber;
// console.log(sum);
// in this case the type of the vale of myNumber was coerced (changed) from a number to a string. Then the console output was a simple concatenation of "3" and "7".

// let a = 10;
// let b = 8;

// let compare = a > b;
// console.log(compare);
// we can compare the values of different variables like this. The result in the console will be a boolean value ture or false depending of how we are comparing those values. < means less-than and > means greater-than.

// let x = 12;
// let y = "12";

// one equals sign is for DECLARING
// two equals signs is for COMPARING. Just comparing the data.
// three equals signs is for STRICT COMPARE! Comparing data AND data types.
// let equalComparison = x === y;
// console.log(equalComparison);

// I want to store the value of NOTHING in a variable!
let myEmptyVariable = null;
console.log(myEmptyVariable);
// You can use the null value when you dont want to show something to the sure on the scree for examplke.
