console.log("hello world");

//game logic
//when the user clicks on the cookie, the total count of cookies goes up by 1
//when the user clicks on the buy button in an upgrade in the shop, the total count of cookies goes down by the cost of the upgrade, and the cps value goes up

//you will need functions to contain the game logic
//to create the logic for the shop upgrades:
//- OPTION 1: you could have a function per upgrade
//- OPTION 2: you could have a reusable function that works for ALL the upgrades

//Tip on local storage:
// - Make sure the local storage values are updated after the user buys an upgrade or when the user clicks on the cookie

//=============================================================

//data storage
let cookieCount = 0;
let cps = 0;

// let stats = {
//   cookieCount: 0,
//   cps: 0,
// };

//if there is data in local storage, update stats with this data, so the user picks it up where they left off

//==============================================================

//shop upgrades

//fetch the upgrades from the API: "https://cookie-upgrade-api.vercel.app/api/upgrades"

//To create multiple DOM elements in a more convenient way, you can use a loop!

//TODO: create DOM elements to contain the upgrades in the shop
// create an element
// assign the value to its text content
// append it to the DOM

//after you complete this task, you should see the upgrades on your page

//================================================================

//the interval

setInterval(function () {
  cookieCount += cps; //cookieCount = cookieCount + cps
  //update the DOM to reflect the changes in the values
  //save the values in local storage
}, 1000);
