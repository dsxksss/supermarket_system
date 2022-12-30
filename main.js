// 导入
const input = require("scanline");
const showUI = require("./ui");

(async () => {
  showUI(); // 显示界面
  const a = await input("请输入你的选择\033[34m -> \033[0m");
})();
