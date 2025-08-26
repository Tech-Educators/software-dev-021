console.log("hello world");

//APIs and how to manage data

//TODO: I want to get data from JSONplaceholder (API)

async function getData() {
  //STEPS:
  // - connect with the API to request the data --> fetch()
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response);
  // - format the response (JSON) --> parsing
  const data = await response.json();
  console.log(data);
}
getData();
//=======================================
//asynchronous and synchronous code
//synchronous code --> our code is read by the browser top to bottom at its own pace
//if we run asynchronous code in a synchronous way, we get a Promise (the browser acknowledges there is a request, but the response has not been sent yet, so we can't get the data)
//asynchronous code --> code that requires a different timing to be executed (the browser puts it onto a different priority stack)
//we need to tell the browser to wait until the async code finishes to execute it
//TIPS:
// - If you see Promise in your console, check what code needs to be run asynchronoulsy (async / await)
// - You can now understand how your browser reads your code and in what order
