const connection = require("./connection");

function dbInit() {
  connection.connect(function (error) {
    if (error) {
      console.log("连接数据库出错,请重试!", error);
      process.exit(1);
    }
    connection.query(
      "create database if not exists supermarket;",
      function (error, _) {
        if (error) {
          console.log("创建数据库supermarket失败!", error);
          process.exit(1);
        }
      },
    );
    connection.query("use supermarket;", function (error, _) {
      if (error) {
        console.log("选择supermarket数据库失败!", error);
        process.exit(1);
      }
    });
    connection.query(
      `create table if not exists product
      (
        名称 varchar(20) primary key,
        价格 float not null,
        种类 enum('食物','服装','工具','生活用品','电子产品','其他种类') not null,
        数量 int not null,
        入库时间 bigint not null
      ) engine=InnoDB charset=utf8;`,
      function (error, _) {
        if (error) {
          console.log("创建product数据表失败!", error);
          process.exit(1);
        }
      },
    );
  });
}

module.exports = dbInit;
