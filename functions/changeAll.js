const input = require("scanline");
const connection = require("../db/connection");
const checkProductExists = require("./checkProductExist");

async function changeAll() {
  const name = await input("请输入想要修改的商品名称: ");
  checkProductExists(name)

  let sp = {
    "名称": "",
    "价格": 0,
    "种类": "",
    "数量": 0,
  };
  const zl = {
    "1": "食物",
    "2": "服装",
    "3": "工具",
    "4": "生活用品",
    "5": "电子产品",
  };

  sp.名称 = await input("请输入该商品的新名称: ");
  sp.价格 = await input("请输入该商品的新价格: ");

  for (let [k, v] of Object.entries(zl)) {
    console.log(k, "\t", v);
  }
  console.log("非1-5情况均为: 其他种类");
  let select = await input("请选择该商品的新种类: ");
  if (zl[select] === undefined) {
    // 如果用户选择的内容不存在的话则为其他种类
    sp.种类 = "其他种类";
  } else {
    // 否则为用户选择内容对应的种类
    sp.种类 = zl[select];
  }

  sp.数量 = await input("请输入该商品的新数量: ");

  connection.query(
    "update product set 名称=?,价格=?,种类=?,数量=? where 名称=?",
    [
      sp["名称"],
      sp["价格"],
      sp["种类"],
      sp["数量"],
      name,
    ],
    (error, _) => {
      if (error) {
        console.log("修改商品信息失败", error);
        process.exit(1);
      }
      console.log("修改商品信息成功");
    },
  );

  connection.end();
}

module.exports = changeAll;
