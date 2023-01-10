const input = require("scanline");
const connection = require("../db/connection");
const checkProductExist = require("./checkProductExist");
const menu = require("../ui/menu");

async function changeAll() {
  showPath();

  const name = await input("请输入想要修改的商品名称: ");
  checkProductExist(name);

  let sp = {
    "名称": "",
    "价格": 0,
    "种类": "",
    "数量": 0,
  };
  const zl = [
    "食物",
    "服装",
    "工具",
    "生活用品",
    "电子产品",
    "其他种类",
  ];

  sp.名称 = await input("请输入该商品的新名称: ");
  sp.价格 = await input("请输入该商品的新价格: ");

  let select = await menu(zl, "请选择你的商品类型: \n");
  sp.种类 = select.text;

  sp.数量 = await input("请输入该商品的新数量: ");

  connection.query(
    "update product set 名称=?,价格=?,种类=?,数量=? where 名称=?",
    [
      sp["名称"],
      parseFloat(sp["价格"]),
      sp["种类"],
      parseInt(sp["数量"]),
      name,
    ],
    (error, _) => {
      if (error) {
        console.log("修改商品信息失败", error);
        process.exit(1);
      }
      console.log("修改商品全部信息成功");
    },
  );

  connection.end();
}

module.exports = changeAll;
