const input = require("scanline");
const deleteAll = require("../functions/deleteAll");


async function deleteUI() {
  const options = {
    "1": ["删除全部商品信息",deleteAll],
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

module.exports = deleteUI;
