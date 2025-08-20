console.log("hello world");

//events
//structure

// interactive DOM element
//make sure that the user knows the DOM element is interactive --> cursor change, hover effects
const eventButton = document.getElementById("event-button");
console.log(eventButton);

//event handler --> it's the action that will trigger when the user interacts with the event
function handleClick() {
  console.log("I clicked!");
}
//event listener --> it's the type of interaction the user will do to trigger the handler (for example, click)
eventButton.addEventListener("click", handleClick);

//=======================================================
//TODO: when the user clicks on the button, a paragraph appears on the page

const paragraphButton = document.getElementById("paragraph-button");

function handleCreateParagraph() {
  //create a DOM element to store our content
  const paragraph = document.createElement("p");
  paragraph.textContent = "Thank you for clicking";
  //append this paragraph to the DOM
  const paragraphContainer = document.getElementById("paragraph-container");
  paragraphContainer.appendChild(paragraph);
}

paragraphButton.addEventListener("click", handleCreateParagraph);
