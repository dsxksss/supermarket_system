const mysql = require("mysql");

const connection = mysql.createConnection({
  localAddress: "localhost",
  user: "root",
  password: "",
});

module.exports = connection;
