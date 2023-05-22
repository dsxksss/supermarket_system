async function checkProductExist(name) {
  const product = await prismaClient.product.findUnique({
    where: { name }
  })
  if (product == null) {
    console.log("\033[31m不存在该商品\033[0m");
    process.exit(1);
  }
  return product
}

module.exports = checkProductExist;
