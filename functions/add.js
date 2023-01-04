const connection = require("../db/connection");

async function add(sp) {
  connection.query(`insert into product values(?,?,?,?,?)`, [
    sp["名称"],
    sp["价格"],
    sp["种类"],
    sp["数量"],
    sp["入库时间"],
  ], function (error) {
    if (error) {
      console.log("入库失败,请重试!");
      process.exit(1);
    }
    console.log(sp, "商品已入库");
  });
  connection.end();
}

module.exports = add;
