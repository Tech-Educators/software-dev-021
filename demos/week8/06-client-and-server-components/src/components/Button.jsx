//client component
//task: onClick event
"use client"; //this directive makes this component to run in the client

import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={handleClick}>Click</button>
      <p>{count}</p>
    </>
  );
}
