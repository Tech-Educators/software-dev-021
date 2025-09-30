//TODO: render dynamically each rollercoaster entry in the database
import { db } from "@/utils/dbConnection";

export default async function RollercoasterIdPage({ params }) {
  const rollercoasterId = await params.rollercoasterId;

  //query the database
  const query = await db.query(
    `SELECT id, name, height, country, url FROM rollercoasters WHERE id = ${rollercoasterId}`
  );
  //   console.log(query);
  //wrangle data
  const rollercoaster = query.rows[0];
  console.log(rollercoaster);
  return (
    <div>
      <h2>{rollercoaster.name}</h2>
      <h3>Height: {rollercoaster.height}m</h3>
      <h3>Country: {rollercoaster.country}</h3>
    </div>
  );
}
