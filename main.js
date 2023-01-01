// 导入
const input = require("scanline");
const showUI = require("./ui");
const addUI = require("./addUi");
const dbInit = require("./dbInit");

const menu = {
  "1": addUI,
};

(async () => {
  dbInit(); // 初始化数据库
  showUI(); // 显示界面
  const select = await input("请输入你的选择->");
  if (menu[select] === undefined) {
    console.log("你的选择有误,请重新选择!");
    process.exit(2);
  }
  menu[select]();
})();
