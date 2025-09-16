//state
//hook --> pre-made React method (use...)

import { useState } from "react";

export default function Button() {
  //how to declare state --> function scope
  //hook to declare, store, track state updates (set) --> useState()

  //structure of useState
  //   const [stateVariable, setStateVariable] = useState(initialValue)

  //example of useState
  const [count, setCount] = useState(0); // let count = 0;

  function handleClick() {
    //I want the value of count to go up by 1 when the user clicks the button
    //!!!!!!!!!! do not update the value of state directly!!!!!!!!!!!!!!!
    //always use your set function to track updates in state
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p>{count}</p>
    </>
  );
}
