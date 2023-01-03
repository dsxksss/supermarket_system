const input = require("scanline");
const selectAll = require("./selectAll");

async function selectUI() {
  const options = {
    "1": ["列出全部商品信息",selectAll],
  };

  for (let [k, v] of Object.entries(options)) {
    console.log("按下",k, "\t", v[0]);
  }
  console.log("如果选择无效 则默认列出全部商品信息");
  const select = await input("请输入你的选项: ");
  if (options[select] === undefined) {
    options["1"][1]();
  } else {
    options[select][1]();
  }
}

module.exports = selectUI;
