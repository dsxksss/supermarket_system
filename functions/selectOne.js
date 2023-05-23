const input = require("scanline");
const productConvert = require("../db/productConvert")
async function selectOne() {
  showPath();
  const name = await input("请输入你想要查找的名称: ");
  const product = await prismaClient.product.findUnique({
    where: { name },
    select: {
      name: true,
      price: true,
      inventory: true,
      type: true,
      createdAt: true,
    }
  });

  if (product === null) {
    console.log("\033[31m商品信息为空\033[0m");
  }

  for (let [k, v] of Object.entries(product)) {
    if (productConvert[k] === undefined) {
      process.stdout.write(`商品创建时间:${"\033[32m"} ${v} ${"\033[0m\t"}`);
      continue
    }
    process.stdout.write(`${productConvert[k]}:${"\033[32m"} ${v} ${"\033[0m\t"}`);
  }
}

module.exports = selectOne;
