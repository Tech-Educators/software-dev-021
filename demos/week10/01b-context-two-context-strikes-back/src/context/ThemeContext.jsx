import { createContext } from "react";

// create our context, this will be what we use to get the state in our components
export const ThemeContext = createContext(null);

// create our provider, we will wrap the entire app in this
export function ThemeProvider({ children }) {
  const theme = "Tim";
  return (
    <ThemeContext.Provider value={theme}>
      {/* children will be our entire App.jsx */}
      {children}
    </ThemeContext.Provider>
  );
}
