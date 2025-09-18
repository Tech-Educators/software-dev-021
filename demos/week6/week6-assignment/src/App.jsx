//!!!!!! please, please, please, split your code into components

// - Start with your wireframe: you build your React client based on the UI

import "./App.css";

export default function App() {
  //state
  // - state to store API image data
  // - state to store the index value (navigate between images)

  //effects
  // fetch data from an API
  // once the data is fetched, update the image data state to store the fetched data

  // function to control what index we are currently clicking on
  // the index represents a specific image object in the array

  // function handleSwitchImage(index){
  //   setIndex(index)
  // }

  return (
    <>
      <h1>Gallery</h1>
      <div>
        This is a container for my thumbnail images. Here I will render a list
        of images and I will give each of them a key.
      </div>

      <ul>
        <li>Other elements:</li>
        <li>A method to render all images</li>
        <li>
          An event to click on the images. The event handler here is how we
          handle switching between images
        </li>
      </ul>
      {/* //======================================================= */}
      <div>
        This is a container for my larger images! This container is
        conditionally rendered!
      </div>
      <ul>
        <li>Other elements: </li>
        <li>An element to contain the larger image</li>
        <li>
          Some conditional logic to render this element once the user has
          clicked on the corresponding thumbnail
        </li>
      </ul>
    </>
  );
}
