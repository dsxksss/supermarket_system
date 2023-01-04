const input = require("scanline");
const connection = require("./connection");

async function selectOne() {
  const name = await input("请输入你想要查找的名称: ");
  connection.query(
    "select * from product where 名称=?",
    [name],
    function (error, products) {
      if (error) {
        console.log("查找商品失败!", error);
        process.exit(1);
      }

      if (products) {
        console.log("\033[31m没有此商品的信息,请核对名称是否正确!\033[0m");
        process.exit(2);
      }

      for (let product of products) {
        for (let [k, v] of Object.entries(product)) {
          process.stdout.write(`${k}:${"\033[32m"} ${v} ${"\033[0m\t"}`);
        }
        console.log();
      }
    },
  );
  connection.end();
}

module.exports = selectOne;
