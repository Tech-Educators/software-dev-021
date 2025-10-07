//TODO: render the database data

export default async function RollercoastersPage() {
  //connect this page with our GET route in the API folder
  //we are fetching our own API!
  // you can store the url in your .env.local and your .env.production files
  const response = await fetch("http://localhost:3000/api/rollercoasters");
  const data = await response.json();
  return (
    <div>
      <h1>Rollercoasters Page</h1>
      {data.map((rollercoaster) => {
        return (
          <div key={rollercoaster.id}>
            <h1>{rollercoaster.name}</h1>
            <h2>Height: {rollercoaster.height}</h2>
            <p>{rollercoaster.country}</p>
          </div>
        );
      })}
    </div>
  );
}

//=============================================
//In server components, direct SQL queries are recommended!
//Fetching your own API is super useful for client components
