"use client";
import { useReducer } from "react";

function reducer(prevState, action) {
  switch (action) {
    case "increment":
      return prevState + 1;
    case "decrement":
      return prevState - 1;
  }
}

export default function ReducerPage() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Reducer Page</h2>
      <p>Count: {state}</p>
      <button onClick={() => dispatch("increment")}>Increase count</button>
      <button onClick={() => dispatch("decrement")}>Decrease count</button>
    </div>
  );
}
