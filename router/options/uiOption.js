const addUI = require("../../ui/addUi");
const selectUI = require("../../ui/selectUI");
const changeUI = require("../../ui/changeUI");
const deleteUI = require("../../ui/deleteUI");
const pay = require("../../functions/pay");

const uiOption = {
  "录入信息": addUI,
  "查找信息": selectUI,
  "修改信息": changeUI,
  "删除信息": deleteUI,
  "购买并支付商品": pay,
  "退出程序":process.exit
};

module.exports = uiOption;