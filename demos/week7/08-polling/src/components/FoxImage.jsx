//TODO: Retrieve data from the API and render it on the page
//- Retrieve data --> fetch / useEffect
//- Render the data on the page --> state / image element

//TODO: set up a system for the page to get refreshed at intervals --> interval
//timers are effects!

import { useState, useEffect } from "react";

export default function FoxImage() {
  //data storage
  const [foxImage, setFoxImage] = useState(null); // image appears broken at first because of the initial value being "" or null;

  useEffect(() => {
    //retrieve
    async function getFoxData() {
      //you can use try and catch in the client, especially when connecting to external APIs / servers
      try {
        const response = await fetch("https://randomfox.ca/floof/");
        const data = await response.json();
        const wrangledData = data.image; //image is the name of the property in the API
        setFoxImage(wrangledData);
      } catch (error) {
        console.error("API failed to fetch", error);
      }
    }
    getFoxData(); //in dev environment, this triggers twice; in production, it doesn't trigger twice

    //set an interval that fetches the data every 3 seconds, in this case
    const foxesInterval = setInterval(getFoxData, 3000);

    //to avoid intervals stacking every 3 seconds due to the component updating (lifecycle), we need to clear it, so when the component updates, a fresh interval is created
    return () => clearInterval(foxesInterval);
  }, []);

  return (
    <>
      <h1>Fox Image</h1>
      <img src={foxImage} alt="random image of a fox" />
    </>
  );
}
