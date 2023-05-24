const inquirer = require("inquirer");

function menu(choices, msg = "请选择以下功能:\n",isShowPath = true) {
  if (isShowPath) {
    showPath()
  }
  return inquirer.prompt({
    // 变量值名称
    name: "text",
    // 菜单类型：
    // input, number, confirm, list, rawlist,
    // expand, checkbox, password,editor
    type: "list", // 列表类型
    message: msg, // 提示消息
    choices: choices,
    prefix: "", // 消息前缀
    suffix: "", // 消息后缀
  });
}

module.exports = menu;
