const checkBox = require("../ui/checkBox");
const input = require("scanline");
const checkProductExist = require("./checkProductExist");
const menu = require("../ui/menu");
const productType = require("../db/productType");
const productConvert = require("../db/productConvert");

async function changePart() {
  showPath();

  const name = await input("请输入想要修改的商品名称: ");
  const oldProduct = await checkProductExist(name);

  const checkboxSelect = await checkBox(
    Object.values(productConvert),
    "请选择你要修改的字段(按下空格选择,按a全选,按回车确认你的选择):\n",
  );
  let newProduct = oldProduct;

  for (let select of checkboxSelect.selects) {
    if (select === "商品名称") {
      newProduct["name"] = await input("请输入该商品的新名称: ")
    } else if (select === "商品种类") {
      const menuSelect = await menu(Object.keys(productType), "请选择你要修改的商品类型: \n");
      newProduct["type"] = productType[menuSelect.text];
      continue;
    } else if (select === "商品价格") {
      newProduct["price"] = parseFloat(await input("请输入该商品的新价格: "))
    } else if (select === "商品数量") {
      newProduct["inventory"] = parseInt(await input("请输入该商品的新数量: "))
    }
  }

  await prismaClient.product.update({
    where: { name },
    data: {
      name: newProduct["name"],
      price: newProduct["price"],
      type: newProduct["type"],
      inventory: newProduct["inventory"],
    }
  })
  console.log("修改商品部分信息成功");
}

module.exports = changePart;
