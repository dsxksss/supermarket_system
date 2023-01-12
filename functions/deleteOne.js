const connection = require("../db/connection");
const input = require("scanline");
const checkProductExist = require("./checkProductExist");

async function deleteOne() {
  showPath();
  const name = await input("请输入你想要删除的商品名称: ");
  checkProductExist(name);

  connection.query("delete from product where 名称=?", [name], (error, _) => {
    if (error) {
      console.log("删除单个商品失败", error);
      process.exit(1);
    }
    console.log("\033[32m商品删除成功\033[0m");
  });
  connection.end();
}

module.exports = deleteOne;
