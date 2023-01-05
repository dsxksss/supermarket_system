const input = require("scanline");
const changeAll = require("../functions/changeAll")

async function changeUI() {
  const options = {
    "1": ["修改单个商品全部信息",changeAll],
  };

  for (let [k, v] of Object.entries(options)) {
    console.log("按下", k, "\t", v[0]);
  }

  const select = await input("请输入你的选项: ");
  if (options[select] === undefined) {
    console.log("选择有误,请检查后重试");
    process.exit(2);
  } else {
    options[select][1]();
  }
}

module.exports = changeUI;