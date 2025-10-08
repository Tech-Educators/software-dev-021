//TODO: render the rollercoasters data from the database
import { db } from "@/utils/dbConnection";
import Link from "next/link";
//import your module
import rollercoastersStyles from "./rollercoasters.module.css";

export default async function RollercoastersPage() {
  //query the database --> GET all the data from the table
  const query = await db.query(
    `SELECT id, name, height, country, url FROM rollercoasters ORDER BY id ASC`
  );
  //   console.log(query);
  //wrangle the data
  const rollercoasters = query.rows;
  //   console.log(rollercoasters);
  return (
    <div>
      {rollercoasters.map((rollercoaster) => {
        return (
          // access the classNames from the stylesheet
          <div
            className={rollercoastersStyles.listContainer}
            key={rollercoaster.id}
          >
            <Link
              className={rollercoastersStyles.link}
              href={`/rollercoasters/${rollercoaster.id}`}
            >
              {rollercoaster.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
