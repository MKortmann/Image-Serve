import dotenv from 'dotenv';
import { Pool } from 'pg';

// initializes the environment variable. You can't access the env vars unless this line exists in your code.
dotenv.config();
const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD } = process.env;

const client = new Pool({
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});

export default client;
