//Callback functions --> a function used as ana argument of a method or another function

//Examples of callback functions

const staff = ["Joe", "Manny", "Nicky"];

//TODO: Add each item in the array to the console (3 times --> length)
// - for loop
// - forEach() --> array method
// - for ... of

//when a function does not have a name, it is an anonymous function
//we can use anonymous functions when we do not want to call them again (reuse them)
//callback functions, when added inline, tend to be anonymous
staff.forEach(function (item) {
  //   console.log(item);
});

//==================================================
//TODO: I want to give the user the following messages: welcome message, their username, missed messages
// - Object --> store user's data
// - Functions --> one function per task

const joe = {
  staffName: "Joe",
  username: "joe.teched",
  missedMessages: 7,
};

function welcomeUser(user) {
  console.log(`Welcome ${user}`);
}

function sayUsername(username) {
  console.log(`Your username is ${username}`);
}

function sayMissedMessages(numberOfMessages) {
  console.log(`You have ${numberOfMessages} missed messages`);
}

// welcomeUser("Joe");
// sayUsername("joe.teched");
// sayMissedMessages(7);

//==============================
//refactor our code for us to have more control over the three tasks

function enterWebsite(
  welcome,
  username,
  missedMessages,
  welcomeMessage,
  usernameData,
  numberMessages
) {
  welcome(welcomeMessage);
  username(usernameData);
  missedMessages(numberMessages);
}

enterWebsite(
  welcomeUser,
  sayUsername,
  sayMissedMessages,
  joe.staffName,
  joe.username,
  joe.missedMessages
);

enterWebsite(
  welcomeUser,
  sayUsername,
  sayMissedMessages,
  "Nicky",
  "nicky.teched",
  2
);
