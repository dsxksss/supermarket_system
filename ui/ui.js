const menu = require("./menu");
const uiOption = require("../router/options/uiOption");

async function UI() {
  const select = await menu(Object.keys(uiOption));
  goTo(select.text);
}

// 导出
module.exports = UI;