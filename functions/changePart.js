const checkBox = require("../ui/checkBox");
const input = require("scanline");
const checkProductExist = require("./checkProductExist");
const menu = require("../ui/menu");
const connection = require("../db/connection");

async function changePart() {
  showPath();
  const name = await input("请输入想要修改的商品名称: ");
  const oldProduct = await checkProductExist(name);
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
  const checkboxSelect = await checkBox(
    Object.keys(sp),
    "请选择你要修改的字段:\n",
  );
  sp = oldProduct;

  console.log(checkboxSelect.selects);
  for (let select of checkboxSelect.selects) {
    if (select === "种类") {
      const menuSelect = await menu(zl, "请选择你的商品类型: \n");
      sp.种类 = menuSelect.text;
      continue;
    }
    sp[select] = await input(`请输入该商品的新${select}: `);
  }

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
      console.log("修改商品部分信息成功");
    },
  );

  connection.end();
}

module.exports = changePart;
