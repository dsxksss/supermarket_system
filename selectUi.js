const input = require("scanline");
const selectAll = require("./selectAll");

async function selectUI() {
  const options = {
    "1": "列出全部商品信息",
  };
  const menu = {
    "1": selectAll,
  };

  for (let [k, v] of Object.entries(options)) {
    console.log(k, "\t", v);
  }
  console.log("如果选择无效 则默认列出全部商品信息");
  const select = await input("请输入你的选项: ");
  if (menu[select] === undefined) {
    menu["1"]();
  } else {
    menu[select]();
  }
}

module.exports = selectUI;
