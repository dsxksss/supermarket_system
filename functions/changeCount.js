const connection = require("../db/connection");

function changeCount(productName, count) {
  connection.query("update product set 数量=? where 名称=?", [
    count,
    productName,
  ], (error, _) => {
    if (error) {
      console.log("修改商品数量出错!", error);
      process.exit(1);
    }
  });
}
module.exports = changeCount;
