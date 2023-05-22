const input = require("scanline");
const checkProductExist = require("./checkProductExist");

async function deleteOne() {
  showPath();
  const name = await input("请输入你想要删除的商品名称: ");
  await checkProductExist(name);
  const result = await prismaClient.product.delete({
    where: { name }
  })
  console.log(`${"\033[32m"}商品${result.name}删除成功${"\033[0m"}`);
}

module.exports = deleteOne;
