//TODO: Fetch data from an API and render it on the page
//- our data is an object with a "recipes" property with a value of an array of objects

//STEP 1: to store the data in state --> useState()
//STEP 2: to synchronise our App component with the API call --> useEffect()

import { useState, useEffect } from "react";

export default function App() {
  //state --> let recipes = [];
  const [recipes, setRecipes] = useState([]);

  //effect
  //useEffect has two arguments: a callback function, and a dependency array
  //we add our effect to the callback function

  //the effect will happen ONCE when the component renders --> empty dependency array
  //the effect will happen EVERY TIME the dependency value updates --> item(s) in the dependency array

  useEffect(() => {
    //we cannot make the component function async
    async function getData() {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      const wrangledData = data.recipes;
      setRecipes(wrangledData);
    }
    getData();
  }, []);
  console.log(recipes); //you can see that the data in the console appears at the same time as the DOM elements in the page --> synchronised!
  return (
    <>
      <h1>Effects</h1>
      {/* render the recipes here */}
    </>
  );
}
