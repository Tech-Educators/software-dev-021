//TODO: I want to get images data from an API and render the images on the DOM

//TODO: I want to get images data from an API
async function getFoxes() {
  const response = await fetch("https://randomfox.ca/floof/");
  const data = await response.json();
  console.log(data);
  //filtering the data to the properties that we need --> data wrangling
  const wrangledData = data.image;
  console.log(wrangledData);
  return wrangledData;
}

//TODO: Render the images on the DOM
function createFoxImage(foxUrl) {
  const foxesContainer = document.getElementById("foxes-container");
  const foxImage = document.createElement("img");
  //update the values of src and alt to match the foxes data
  foxImage.src = foxUrl;
  foxImage.alt = "A randomly-generate image of a fox in nature";
  foxesContainer.appendChild(foxImage);
}

//TODO: to put the data and the image together
async function addFoxDataToImage() {
  const foxesData = await getFoxes();
  createFoxImage(foxesData);
}

addFoxDataToImage();
