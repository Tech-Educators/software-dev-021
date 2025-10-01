//TODO: render the rollercoasters data from the database
import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function RollercoastersPage() {
  //query the database --> GET all the data from the table
  const query = await db.query(
    `SELECT id, name, height, country, url FROM rollercoasters`
  );
  //   console.log(query);
  //wrangle the data
  const rollercoasters = query.rows;
  //   console.log(rollercoasters);
  return (
    <div>
      {rollercoasters.map((rollercoaster) => {
        return (
          <div key={rollercoaster.id}>
            <Link href={`/rollercoasters/${rollercoaster.id}`}>
              {rollercoaster.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
