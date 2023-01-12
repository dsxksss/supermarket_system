const checkBox = require("../ui/checkBox");
const connection = require("../db/connection");
const changeCount = require("./changeCount");
const input = require("scanline");

function payQ() {
  return new Promise((result) => {
    connection.query("select * from product", async function (error, products) {
      if (error) {
        console.log("列出全部商品信息失败!", error);
        process.exit(1);
      }

      if (products.length <= 0) {
        console.log("\033[31m商品信息为空\033[0m");
      }

      const productsName = products.map((product) => product["名称"]);
      const select = await checkBox(
        productsName,
        "请勾选你想要购买的商品(按下空格选择,按a全选,按回车确认你的选择): \n",
      );

      let allPrice = 0;
      let productList = [];

      // 循环遍历每个商品
      for (let product of products) {
        // 循环遍历用户选择的商品名称列表
        for (let s of select.selects) {
          // 如果符合用户选择的商品的话，执行以下操作
          if (product["名称"] === s) {
            // 询问用户该商品的购买数量
            const count = parseInt(
              await input(`想要购买${product["名称"]}的数量: `),
            );

            // 判断库存是否足够用户购买
            if (product["数量"] < count) {
              console.log("库存数量不足,请重新购买");
              process.exit(1);
            }

            // 累加购买商品花费的价钱
            allPrice += product["价格"] * count;

            // 增加到已经购买的商品列表里，方便后续更改数据库内的商品数量
            productList.push({
              ...product,
              // 在商品信息的原有基础上增加两个内容
              "购买数量": count,
              "花费价钱": product["价格"] * count,
            });
          }
        }
      }

      console.log(`最终花费的金额是: ${allPrice}`);
      if (
        (await input("请选择是否支付[y确认支付/n取消支付] :")).toLowerCase() ===
          "y"
      ) {
        console.log(
          `${new Date().getFullYear()}年${new Date().getMonth() + 1}月${
            new Date().getDay()
          }日 ${new Date().getHours()}:${new Date().getMinutes()}:${
            new Date().getSeconds()
          }`,
        );

        console.log("您购买了以下商品:");
        for (let p of productList) {
          console.log(
            `${p["名称"]}*${p["购买数量"]}:${"\t"}${p["花费价钱"]}￥`,
          );
        }
        console.log(`总消费: ${allPrice}￥`);
        console.log("欢迎下次光临~bye");
        result(productList);
      } else {
        console.log("您取消了支付");
      }
    });
  });
}

async function pay() {
  let list = await payQ();
  console.log(list);
  for (let p of list) {
    changeCount(p["名称"], p["数量"] - p["购买数量"]);
  }
  connection.end();
}



module.exports = pay;
