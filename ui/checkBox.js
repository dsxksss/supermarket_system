const inquirer = require("inquirer");

function checkBox(choices, msg = "请勾选以下功能(按下空格选择,按a全选,按回车确认你的选择):\n") {
  return inquirer.prompt({
    // 变量值名称
    name: "selects",
    // 菜单类型：
    // input, number, confirm, list, rawlist,
    // expand, checkbox, password,editor
    type: "checkbox", // 复选框类型
    message: msg, // 提示消息
    choices: choices,
    prefix: "", // 消息前缀
    suffix: "", // 消息后缀
  });
}

module.exports = checkBox;
