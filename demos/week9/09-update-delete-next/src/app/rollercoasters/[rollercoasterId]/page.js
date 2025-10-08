//TODO: activate our not-found page here
import { db } from "@/utils/dbConnection";
import Image from "next/image";
//import notFound from next/navigation
import { notFound } from "next/navigation";

export default async function RollercoasterIdPage({ params }) {
  //we need to await params first before we access the property inside
  const rollercoasterId = (await params).rollercoasterId;

  //query the database

  const query = await db.query(
    `SELECT id, name, height, country, url FROM rollercoasters WHERE id = ${rollercoasterId}`
  );

  //   console.log(query);
  //wrangle data
  const rollercoaster = query.rows[0];
  console.log(rollercoaster);

  //logic to check if there is an object in our rows array
  //if there is no object in the rows array, navigate to the not-found page
  // if (rollercoaster.keys().length === 0) {
  //   notFound();
  // }
  //check the Object contructor with the keys method to make this logic work

  if (!rollercoaster) {
    notFound();
  }

  return (
    <div>
      <h2>{rollercoaster.name}</h2>
      <h3>Height: {rollercoaster.height}m</h3>
      <h3>Country: {rollercoaster.country}</h3>
      <Image
        src={rollercoaster?.url}
        alt={rollercoaster.name}
        width={300}
        height={150}
      />
    </div>
  );
}
