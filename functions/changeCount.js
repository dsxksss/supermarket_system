const checkProductExist = require("./checkProductExist");

async function changeCount(productName, count) {
  await checkProductExist(productName)
  await pirsmaClient.product.update({
    where: { name: productName },
    data: {
      inventory: count
    }
  });
}
module.exports = changeCount;
