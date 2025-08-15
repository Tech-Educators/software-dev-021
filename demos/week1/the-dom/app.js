// When we want to examin the document object:
// console.log(document);

// How to manipulate the DOM

//STEP 1
// We need to SELECT the object that contains the elements we want to affect.
// const importantH2 = document.getElementById("title");
// console.dir(importantH2);

// querySelector will select HTML elements using Id, class or element name.

// const mainContainer = document.querySelector(".main-container");
// console.log(mainContainer);

//STEP 2 : Make changes to the selected element!
// importantH2.textContent = "This is the new text content";

//To create a new element:
// const newImg = document.createElement("img");
// newImg.src =
//   "https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyb2d8ZW58MHx8MHx8fDA%3D";
// newImg.alt = "A picture of a cute treefrog.";
// console.log(newImg);

// STEP 3 : Appending the element to the DOM

// mainContainer.appendChild(newImg);

// document.body.style.fontFamily = "monospace";
// document.body.style.backgroundColor = "blue";

// OPTIONAL STEP: Removing an element from the DOM
// const myH1 = document.querySelector("h1");
// myH1.remove();
