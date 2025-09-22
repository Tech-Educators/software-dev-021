import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//import the BrowserRouter provider, so we can use the tools to build routes in our App
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

//we are going to nest App into BrowserRouter
