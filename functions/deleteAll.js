const connection = require("../db/connection");
const input = require("scanline");

async function deleteAll() {
  showPath();
  const yn = await input(
    "\033[31m你确定要删除全部商品信息吗!?[y确认/n取消]\033[0m",
  );
  if (yn === "y" || yn === "Y") {
    connection.query("truncate table product", (error, _) => {
      if (error) {
        console.log("删除全部商品信息失败", error);
        process.exit(1);
      }
      console.log("\033[32m你已删除全部商品信息\033[0m");
    });
  } else {
    console.log("\033[32m你已取消该操作\033[0m");
  }
  connection.end();
}

module.exports = deleteAll;
