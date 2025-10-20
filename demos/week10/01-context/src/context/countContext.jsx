import { createContext, useState } from "react";

// here we can createa our "context" that the user will be able to use later
export const CountContext = createContext(0);

export function CountProvider({ children }) {
  // declare our state and functions just like we would normally
  // only difference, we are doing it INSIDE the provider
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    // CountContext.Provider is a property of our context we made at the top of the file
    // the "values" are all the things we want "children" to have access to
    <CountContext.Provider value={{ count, increment }}>
      {/* this is our App */}
      {children}
    </CountContext.Provider>
  );
}
