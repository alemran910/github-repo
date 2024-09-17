import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: "postgress",
  host: "localhost",
  database: "emran",
  password: "1234",
  port: 5432,
});

export default pool;
