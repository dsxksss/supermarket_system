const menu = require("../functions/menu");
const selectOption = require("../router/options/selectOption");

async function selectUI() {
  const select = await menu(Object.keys(selectOption));
  goTo(select.text);
}

module.exports = selectUI;
