//timers

//timeouts

//a countdown --> after an amount of time, a task will happn ONCE

//structure
//callback function / anonymous function
// setTimeout(function () {
//task
// }, delay in milliseconds);

//TODO: I want to see a message in the console after 5 seconds have passed
setTimeout(function () {
  //   console.log("This happened after 3 seconds");
}, 3000);

//intervals

//a task is performed repeatedly after a specific amount of time --> we need to stop the interval; otherwise, it will run the task infinitely!

// structure
// setInterval(function(){
//task
// }, delay)

//TODO: I want to send a message to the console repeatedly after 2 seconds
setInterval(function () {
  //   console.log("I happen every 2 seconds forever");
}, 2000);

//======================================================
// What if we use a timeout to stop an interval?

const robotInterval = setInterval(function () {
  console.log("PLease, someOne Stop mEEEEEEEEEE");
}, 3000);

function stopTheInterval() {
  setTimeout(function () {
    clearInterval(robotInterval);
  }, 13000);
}

stopTheInterval();
