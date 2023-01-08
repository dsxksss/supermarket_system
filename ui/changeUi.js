const menu = require("./menu");
const changeOption = require("../router/options/changeOption");

async function changeUI() {
  const select = await menu(Object.keys(changeOption));
  goTo(select.text);
}

module.exports = changeUI;
