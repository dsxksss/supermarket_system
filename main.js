// 导入
const input = require("scanline");
const showUI = require("./ui");
const addUI = require("./addUi");
const add = require("./add");

(async () => {
  showUI(); // 显示界面
  const select = await input("请输入你的选择->");
  if (select === "1") {
    let sp = await addUI();
    add(sp);
  } else {
    console.log("你的选择有误");
  }
})();
