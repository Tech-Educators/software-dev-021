//TODO: conditionally render the title and author to have a cleaner UI with a focus on just the images
//STEP 1: event --> onClick
//STEP 2: state --> toggle
//STEP 3: add the conditional logic (if the user clicks on the image, show / hide the author and title) --> ternary operator

import "./Image.css";
import { useState } from "react";

export default function Image({ imgUrl, title, author }) {
  //state --> initial value, variable (showData), set function
  // let showData = false;
  const [showData, setShowData] = useState(false);

  function handleClick() {
    //we want to change state from true to false, and from false to true
    setShowData(!showData);

    // if (showData) {
    //   setShowData((showData = !showData));
    // }

    // showData ? !showData : showData;
  }

  return (
    <section className="image-section">
      <img
        src={imgUrl}
        alt={title}
        className="w-80 h-96 rounded-2xl"
        onClick={handleClick}
      />
      {/* we will use a ternary operator to conditionally render the title and author */}

      {showData ? (
        <>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-xl">{author}</p>
        </>
      ) : null}
    </section>
  );
}
