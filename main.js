// 导入
const input = require("scanline");
const showUI = require("./ui");
const addUI = require("./addUi");

const menu = {
  "1":addUI,
}

(async () => {
  showUI(); // 显示界面
  const select = await input("请输入你的选择->");
  if(select === undefined){
    console.log("你的选择有误,请重新选择!")
  }else{
    menu[select]();
  }
})();