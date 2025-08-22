console.log("hello world");

//TODO: I need to store my images data
//You can use images stored locally or images stored remotely (unsplash...)

const images = [
  {
    url: "url1", //relative path for local images OR link to the image
    altText: "altText1",
  },
  {
    url: "url2",
    altText: "altText2",
  },
  {
    url: "url3",
    altText: "altText3",
  },
];
//TODO: I need to create my thumbnail images
// function createThumbnails(){
// select the DOM element (thumbnail-container) to contain our thumbnails
//this is a repetitive task --> loop through our array (using the length property)
//Inside our loop we need to do this:
// - create img element
// - update the src and alt attributes of the img element to match those in the array (parameters)
// - give each img a className (img.className)
// - add an event listener to each image --> the event handler of this listener is the function you write to create large images
// - append the created images to the thumbnail-container
// }

//TODO: I need to create my large images
//this task is the event handler for the thumbnail events
// function createLargeImagesHandler(){
//select the large-image-container
//delete the current image in the large-image-container
// largeImageContainer.innerHTML = null OR ""
// create an image
// update the src and alt values
// add a className for styling
//append the img to the container
// }

//add this event handler to the thumbanil event
//you call the createThumbanils function
