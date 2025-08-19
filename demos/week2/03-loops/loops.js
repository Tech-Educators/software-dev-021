console.log("hello world");

//for loops --> we will repeat a task a specific amount of times (for example, I want to create 5 paragraphs in my HTML)
//structure
// for (loop set-up) {
//the task to be executed
// }

// for (initialisation; condition; afterthought) {
// action
// }
//initialisation --> initial value where our loop is going to start (usually, this value would 0 or 1)
//condition --> the condition makes sure that the loop stops
//afterthought --> this will change the initial value to make sure that we will reach the end value (set up in the condition)

//example
//TODO: I want to send a message to the console 10 times

// console.log("message 1");
// console.log("message 2");
// console.log("message 3");
// console.log("message 4");
// console.log("message 5");

//increment operator ++ --> adds 1 to a value
for (let i = 1; i <= 10; i++) {
  console.log(`message ${i}`);
}

// for loops and arrays

let subjects = ["Maths", "English", "PE", "Chemistry"];
//TODO: Write in the console each subject (in this case, 4 times)

for (let i = 0; i < subjects.length; i++) {
  console.log(subjects[i]); // the initial value (i) is also representing the index number
}

// simplified for loops
//these for loops work in the same way, but the syntax is simpler

// for ... of
// let subject --> this represents each item in the array
// of subjects --> this is the condition (length is included)
// the afterthought is implied

for (let subject of subjects) {
  console.log(subject);
}

//forEach()
// a method --> a JS default function
//structure

subjects.forEach(function (subject) {
  console.log(subject);
});

//TODO: I want to render (display, show) 3 images in my page
// - I need a container for the images ✅
// - I need a loop to perform a repetitive task (for loop)
// - I need the image source and alt text ✅
// - I need to store the images data ✅
// - I need create and add the images to the DOM

let imgURLs = [
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let altText = [
  "poppies in a field",
  "fir tree",
  "mushroom in the forest",
  "template",
  "Joe",
];

//select the container
const imageContainer = document.querySelector(".image-container");
for (let i = 0; i < altText.length; i++) {
  const pTag = document.createElement("p"); // <p></p>
  pTag.textContent = altText[i];
  pTag.className = "alt-text";
  imageContainer.appendChild(pTag);
}

//=======================================
//&& AND --> both conditions need to be truthy for the action to happen
// if (movieRating === "PG" && age === 7) {
//you can watch the film
// }

// || OR --> only ONE condition needs to be truthy.
// If the first condition is truthy, the action runs (the second condition is never checked).
// If the first condition is falsey, the second condition is checked, and if the second condition is truthy, the action will happen.

// if (movieRating === "18" || age === 47) {
//you can watch the film
// }
