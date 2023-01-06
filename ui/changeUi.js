const changeAll = require("../functions/changeAll")
const menu = require("../functions/menu");

async function changeUI() {
  const options = {
    "修改单个商品全部信息":changeAll,
  };
  
  const select = await menu(Object.keys(options));
  options[select.text]();
}

module.exports = changeUI;