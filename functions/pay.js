const checkBox = require("../ui/checkBox");
const changeCount = require("./changeCount");
const input = require("scanline");

async function payQ() {
  const products = await prismaClient.product.findMany({
    select: {
      name: true,
      price: true,
      inventory: true,
      type: true,
    }
  })

  if (products.length <= 0) {
    console.log("\033[31m商品信息为空\033[0m");
  }

  let lastProduct = products.filter((product) => product["inventory"] > 0);

  if (lastProduct.length <= 0) {
    console.log("\033[31m商品库存为空\033[0m");
    process.exit(1);
  }
  const select = await checkBox(
    lastProduct,
    "请勾选你想要购买的商品(按下空格选择,按a全选,按回车确认你的选择): \n",
  );

  let allPrice = 0;
  let productList = [];

  // 循环遍历每个商品
  for (let product of products) {
    // 循环遍历用户选择的商品名称列表
    for (let s of select.selects) {
      // 如果符合用户选择的商品的话，执行以下操作
      if (product["name"] === s) {
        console.log(`商品：${product["name"]}(剩余库存为: ${product["inventory"]})`);
        // 询问用户该商品的购买数量
        const count = parseInt(
          await input(`想要购买${product["name"]}的数量: `),
        );

        // 判断库存是否足够用户购买
        if (product["inventory"] < count) {
          console.log("库存数量不足,请重新购买");
          process.exit(1);
        }

        // 累加购买商品花费的价钱
        allPrice += product["price"] * count;

        // 增加到已经购买的商品列表里，方便后续更改数据库内的商品数量
        productList.push({
          ...product,
          // 在商品信息的原有基础上增加两个内容
          "购买数量": count,
          "花费价钱": product["price"] * count,
        });
      }
    }
  }

  if (productList.length <= 0) {
    console.log("您没有选择任何商品,取消本次支付");
    process.exit(2);
  }

  if (
    (await input("请选择是否支付[y确认支付/n取消支付] :")).toLowerCase() ===
    "y"
  ) {
    console.clear()
    console.log(
      `${new Date().getFullYear()}年${new Date().getMonth() + 1}月${new Date().getDay()
      }日${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()
      }`,
    );
    console.log("您购买了以下商品:");
    for (let p of productList) {
      console.log(
        `${p["name"]}*${p["购买数量"]}:  ${p["花费价钱"].toFixed(3)}￥`,
      );
    }
    console.log(`总消费:  ${allPrice.toFixed(3)}￥`);
    console.log("欢迎下次光临~bye");
    return productList;
  } else {
    console.log("您取消了支付");
    process.exit(2)
  }
};

async function pay() {
  let list = await payQ();
  for (let p of list) {
    changeCount(p["name"], parseInt(p["inventory"]) - p["购买数量"]);
  }
}

module.exports = pay;
