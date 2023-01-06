const menu = require("../functions/menu");
const input = require("scanline");
const add = require("../functions/add");

async function addUI() {
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
  add(sp);
}

module.exports = addUI;
