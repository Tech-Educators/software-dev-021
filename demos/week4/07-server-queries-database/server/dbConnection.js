//TODO: set up the connection between the server and database

//import pg package
import pg from "pg";
//import dotenv package
import dotenv from "dotenv";

//configure dotenv --> we are activating the .env file
dotenv.config();

//create a connection string --> this will create a channel between this server and my database in Supabase

const dbConnectionString = process.env.DATABASE_URL;

//create a pool for our requests
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});
