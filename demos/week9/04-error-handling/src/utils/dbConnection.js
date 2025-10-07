import pg from "pg"; //we need to install the pg package

const dbConnectionString = process.env.NEXT_PUBLIC_DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});
