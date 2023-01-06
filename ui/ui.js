const addUI = require("./addUi");
const selectUI = require("./selectUI");
const deleteUI = require("./deleteUI");
const changeUI = require("./changeUI");
const menu = require("../functions/menu");

async function UI() {
  const options = {
    "录入信息": addUI,
    "查找信息": selectUI,
    "删除信息": deleteUI,
    "修改信息": changeUI,
    "退出程序": process.exit,
  };

  const select = await menu(Object.keys(options));
  options[select.text]();
}

// 导出
module.exports = UI;
