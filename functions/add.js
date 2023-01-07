const input = require("scanline");
const menu = require("../functions/menu");
const connection = require("../db/connection");

async function add() {
  let sp = {
    "名称": "",
    "价格": 0,
    "种类": "",
    "数量": 0,
    "入库时间": 0,
  };
  const zl = [
    "食物",
    "服装",
    "工具",
    "生活用品",
    "电子产品",
    "其他种类",
  ];

  sp.名称 = await input("请输入你的商品名称: ");
  sp.价格 = parseFloat(await input("请输入你的商品价格: "));

  let select = await menu(zl, "请选择你的商品类型: \n");
  sp.种类 = select.text;

  sp.数量 = parseInt(await input("请输入你的商品数量: "));
  sp.入库时间 = parseInt(new Date().getTime() / 1000);

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
