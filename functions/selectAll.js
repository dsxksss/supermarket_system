async function selectAll() {
  showPath();
  const products = await prismaClient.product.findMany({
    select: {
      name: true,
      price: true,
      inventory: true,
      type: true,
      createdAt: true,
    }
  });

  if (products.length <= 0) {
    console.log("\033[31m商品信息为空\033[0m");
  }

  for (let product of products) {
    for (let [k, v] of Object.entries(product)) {
      process.stdout.write(`${k}:${"\033[32m"} ${v} ${"\033[0m\t"}`);
    }
    console.log();
  }
}

module.exports = selectAll;
