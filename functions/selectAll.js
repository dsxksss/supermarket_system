const connection = require("../db/connection");

function selectAll() {
  connection.query("select * from product", function (error, products) {
    if (error) {
      console.log("列出全部商品信息失败!", error);
      process.exit(1);
    }

    if (products.length <= 0) {
      console.log("\033[31m商品信息为空\033[0m");
    }

    for (let product of products) {
      for (let [k, v] of Object.entries(product)) {
        process.stdout.write(`${k}:${"\033[32m"} ${v} ${"\033[0m\t"}`);
      }
      console.log();
    }
  });
  connection.end();
}

module.exports = selectAll;
