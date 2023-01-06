const selectAll = require("../functions/selectAll");
const selectOne = require("../functions/selectOne");
const menu = require("../functions/menu");

async function selectUI() {
  const options = {
    "列出全部商品信息": selectAll,
    "查找商品信息": selectOne,
  };

  const select = await menu(Object.keys(options), "请输入你的选择:\n");
  options[select.text]();
}

module.exports = selectUI;
