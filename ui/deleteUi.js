const deleteAll = require("../functions/deleteAll");
const deleteOne = require("../functions/deleteOne");
const menu = require("../functions/menu");

async function deleteUI() {
  const options = {
    "删除全部商品信息": deleteAll,
    "删除单个商品信息": deleteOne,
  };

  const select = await menu(Object.keys(options));
  options[select.text]();
}

module.exports = deleteUI;
