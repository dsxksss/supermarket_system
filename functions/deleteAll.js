const input = require("scanline");

async function deleteAll() {
  showPath();
  const yn = await input(
    "\033[31m你确定要删除全部商品信息吗!?[y确认/n取消]\033[0m",
  );
  if (yn === "y" || yn === "Y") {
    const result = await prismaClient.product.deleteMany()
    console.log(`${"\033[32m"}共删除${result.count}个商品${"\033[0m"}`);
    console.log("\033[32m你已删除全部商品信息\033[0m");
  } else {
    console.log("\033[32m你已取消该操作\033[0m");
  }
}

module.exports = deleteAll;
