const input = require("scanline");
const add = require("./add");

async function addUI() {
  let sp = {
    "名称": "",
    "价格": 0,
    "种类": "",
    "数量": 0,
    "入库时间": 0,
  };
  const zl = {
    "1": "食物",
    "2": "服装",
    "3": "工具",
    "4": "生活用品",
    "5": "电子产品",
  };

  sp.名称 = await input("请输入你的商品名称: ");
  sp.价格 = parseFloat(await input("请输入你的商品价格: "));
  for (let [k, v] of Object.entries(zl)) {
    console.log(k, "\t", v);
  }
  console.log("非1-5情况均为: 其他种类")
  let select = await input("请输入你的商品种类: ");
  if (zl[select] === undefined) {
    // 如果用户选择的内容不存在的话则为其他种类
    sp.种类 = "其他种类";
  } else {
    // 否则为用户选择内容对应的种类
    sp.种类 = zl[select];
  }
  sp.数量 = parseInt(await input("请输入你的商品数量: "));
  sp.入库时间 = parseInt(new Date().getTime() / 1000);
  add(sp);
}

module.exports = addUI;
