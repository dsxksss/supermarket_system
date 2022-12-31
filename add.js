const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

connection.connect(function (err) {
  if (err) throw err;
  connection.query("CREATE DATABASE IF NOT EXISTS supermarket");
});

connection.query("USE supermarket");
connection.query(
  `CREATE TABLE IF NOT EXISTS product
  ( 
    名称 VARCHAR(20) PRIMARY KEY,
    价格 FLOAT NOT NULL,
    种类 ENUM('食物', '服装', '工具', '生活用品', '电子产品') NOT NULL,
    数量 INT NOT NULL,
    入库时间 BIGINT NOT NULL
  );`,
);

 function add(sp) {
  connection.query(
    `INSERT INTO product VALUES(?,?,?,?,?)`,
    [sp["名称"], sp["价格"], sp["种类"], sp["数量"], sp["入库时间"]],
    (err, _) => {
      if (err) {
        console.log("数据存入失败,请重试!");
        return;
      }
      console.log(sp, "已入库~");
    },
    connection.end()
  );
}

module.exports = add;
