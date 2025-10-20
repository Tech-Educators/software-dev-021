"use client";
import { useReducer } from "react";

function reducer(prevState, action) {
  switch (action.type) {
    case "bg":
      return { ...prevState, background: action.corinna };
    case "text":
      return { ...prevState, color: action.corinna };
    case "theme":
      return { ...prevState, ...action.corinna };
  }
}

export default function ThemePage() {
  const [state, dispatch] = useReducer(reducer, {
    background: "tomato",
    color: "white",
  });

  const theme1 = { background: "tomato", color: "white" };
  const theme2 = { background: "yellow", color: "cadetblue" };

  return (
    <div style={{ background: state.background, color: state.color }}>
      <h2>Theme with Reducer</h2>

      <div>
        <h3>Themes</h3>
        <button onClick={() => dispatch({ type: "theme", corinna: theme1 })}>
          Theme 1
        </button>
        <button onClick={() => dispatch({ type: "theme", corinna: theme2 })}>
          Theme 2
        </button>
      </div>

      <div>
        <h3>Background</h3>
        <button onClick={() => dispatch({ type: "bg", corinna: "orange" })}>
          BG Orange
        </button>
        <button onClick={() => dispatch({ type: "bg", corinna: "green" })}>
          BG Green
        </button>
      </div>

      <div>
        <h3>Colors</h3>
        <button onClick={() => dispatch({ type: "text", payload: "teal" })}>
          Text Teal
        </button>
        <button onClick={() => dispatch({ type: "text", payload: "salmon" })}>
          Text salmon
        </button>
      </div>
    </div>
  );
}

// dispatch({type: "theme1"})
// dispatch({type: "theme2"})
// dispatch({type: "theme3"})
// dispatch({type: "random"})
