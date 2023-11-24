const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  port: "3308",
  user: "root",
  password: "12345",
  database: "temp",
});

module.exports = pool.promise();
