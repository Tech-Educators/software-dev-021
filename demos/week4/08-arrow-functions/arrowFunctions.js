//Examples of arrow functions
//the fat arrow => replaces the function keyword

function add(a, b) {
  return a + b;
}

//arrow function
const add = (a, b) => {
  return a + b;
};

//in this example, the return keyword is implied
const add = (a, b) => a + b;

//callback functions
const array = [1, 2, 3];

array.forEach(function (item) {
  console.log(item);
});

//arrow function
array.forEach((item) => console.log(item));
