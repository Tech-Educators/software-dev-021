//imports
import dotenv from "dotenv";
import pg from "pg";

//config dotenv
dotenv.config();

//set up a Pool with pg
const dbConnection = process.env.DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnection,
});
