const menu = require("./menu");
const deleteOption = require("../router/options/deleteOption");

async function deleteUI() {
  const select = await menu(Object.keys(deleteOption));
  goTo(select.text);
}

module.exports = deleteUI;
