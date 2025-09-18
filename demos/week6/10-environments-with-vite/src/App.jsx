import { useState, useEffect } from "react";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getData() {
      //we stored the API url in the .env file
      const response = await fetch(import.meta.env.VITE_DUMMYJSON_API);
      const data = await response.json();
      const wrangledData = data.recipes;
      setRecipes(wrangledData);
    }
    getData();
  }, []);

  // function handleSubmit() {
  //formvalues
  //if you set up your env vars with the same key, your app will use the dev variables in development and the productions variables in production. No need to manually swap them!
  // fetch(import.meta.env.VITE_SERVER_POST_ROUTE, {
  //   headers {
  //   }
  // })
  // }

  console.log(recipes);

  return (
    <>
      <h1>Environments</h1>
    </>
  );
}
