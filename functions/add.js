const productInput = require("../ui/productInput")

async function add() {
  showPath();
  const product = await productInput()
  await prismaClient.product.create({
    data: {
      name: product["名称"],
      price: product["价格"],
      type: product["种类"],
      inventory: product["数量"],
    }
  })
}

module.exports = add;
