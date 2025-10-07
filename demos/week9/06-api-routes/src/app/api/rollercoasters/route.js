//TODO: READ data from the database
import { query } from "@/lib/data"; //this is the data you would get using a SQL query

export function GET() {
  //you have your SQL query here
  //SQL query --> read all the data from the rollercoasters table
  // const query = await db.query(`SELECT * FROM rollercoasters`)
  return new Response(JSON.stringify(query));
}
