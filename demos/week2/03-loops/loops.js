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
