const mysql = require("mysql");

const connection = mysql.createConnection({
  localAddress: "localhost",
  user: "root",
  password: "",
});

// error 错误
connection.connect(function (error) {
  if (error) {
    console.log("连接数据库出错,请重试!");
    return;
  }
  connection.query("create database if not exists supermarket;");
});
connection.query("use supermarket;");
connection.query(
  `create table if not exists product
(
  名称 varchar(20) primary key,
  价格 float not null,
  种类 enum('食物','服装','工具','生活用品','电子产品','其他种类') not null,
  数量 int not null,
  入库时间 bigint not null
) engine=InnoDB charset=utf8;`,
);

async function add(sp) {
  connection.query(`insert into product values(?,?,?,?,?)`, [
    sp["名称"],
    sp["价格"],
    sp["种类"],
    sp["数量"],
    sp["入库时间"],
  ], function (error) {
    if (error) {
      console.log("入库失败,请重试!");
      return;
    }
    console.log(sp, "商品已入库");
  });
  connection.end();
}

module.exports = add;
