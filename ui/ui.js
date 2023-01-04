const input = require("scanline");
const addUI = require("./addUi");
const selectUI = require("./selectUI");
const deleteUI = require("./deleteUI");

async function UI() {
  const options = {
    "1": ["录入信息", addUI],
    "2": ["查找信息", selectUI],
    "3":["删除信息",deleteUI]
  };

  console.log("*******************");
  for (let [k, v] of Object.entries(options)) {
    console.log("按下", k, "\t", v[0]);
  }
  console.log("*******************");

  const select = await input("请输入你的选择: ");
  if (options[select] === undefined) {
    console.log("你的选择有误,请重新选择!");
    process.exit(2);
  }
  options[select][1]();
}

// 导出
module.exports = UI;
