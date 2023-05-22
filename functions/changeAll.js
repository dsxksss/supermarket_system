const input = require("scanline");
const productInput = require("../ui/productInput")
const checkProductExist = require("./checkProductExist");

async function changeAll() {
  showPath();

  const name = await input("请输入想要修改的商品名称: ");
  await checkProductExist(name);
  console.log("请填写新商品信息");
  const newProduct = await productInput()
  await prismaClient.product.update({
    where:{name},
    data:{
      name: newProduct["名称"],
      price: newProduct["价格"],
      type: newProduct["种类"],
      inventory: newProduct["数量"],
    }
  })

  
}

module.exports = changeAll;
