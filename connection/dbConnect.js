require('dotenv').config();
const Pool = require('pg-pool');

const config = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  }
};

const db = new Pool(config);

module.exports = db;
