const UI = require("../ui/ui");
const uiOption = require("./options/uiOption");
const addOption = require("./options/addOption");
const selectOption = require("./options/selectOption");
const changeOption = require("./options/changeOption");
const deleteOption = require("./options/deleteOption");

const allMaps = {
  "主菜单": UI,
  ...uiOption,
  ...addOption,
  ...selectOption,
  ...changeOption,
  ...deleteOption,
};

module.exports = allMaps;
