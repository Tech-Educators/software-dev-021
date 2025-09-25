import { useState, useEffect } from "react";

export default function FoxImage() {
  const [biscuits, setBiscuits] = useState([]);

  useEffect(() => {
    async function getBiscuitData() {
      try {
        //fetch data from the server
        const response = await fetch("http://localhost:8080/biscuits");
        const data = await response.json();
        console.log(data);
        setBiscuits(data);
      } catch (error) {
        console.error("API failed to fetch", error);
      }
    }
    getBiscuitData();

    const biscuitInterval = setInterval(getBiscuitData, 3000);

    return () => clearInterval(biscuitInterval);
  }, []);
  console.log(biscuits);
  return (
    <>
      <h2>Biscuits</h2>
      {biscuits.map((biscuit) => {
        return (
          <div>
            <h3>{biscuit.biscuit_name}</h3>
            <img src={biscuit.src} alt={biscuit.biscuit_name} />
            <p>{biscuit.description}</p>
            <p>Crunchiness: {biscuit.crunchiness}</p>
          </div>
        );
      })}
    </>
  );
}
