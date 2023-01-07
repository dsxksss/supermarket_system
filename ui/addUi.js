const menu = require("../functions/menu");
const addOption = require("../router/options/addOption");

async function addUI() {
  const select = await menu(Object.keys(addOption));
  goTo(select.text);
}

module.exports = addUI;
