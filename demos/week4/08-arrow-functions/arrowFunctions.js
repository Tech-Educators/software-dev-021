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

// event listener and handler
function handleSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;

  console.log({ username: username, message: message });
}

form.addEventListener("submit", handleSubmit);

//arrow function

const handleSubmit = (event) => {
  //statements
};
