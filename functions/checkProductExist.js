const connection = require("../db/connection");

async function checkProductExist(name) {
  return new Promise(function (result) {
    connection.query(
      "select * from product where 名称=?",
      [name],
      (error, products) => {
        if (error) {
          console.log("查找是否存在该商品失败", error);
          process.exit(1);
        }

        if (products.length <= 0) {
          console.log("\033[31m不存在该商品\033[0m");
          process.exit(1);
        }

        result(products[0]);
      },
    );
  });
}

module.exports = checkProductExist;
