const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config('dotenv');

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT, 
});

module.exports = pool;
