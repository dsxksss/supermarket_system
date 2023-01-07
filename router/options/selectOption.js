const selectAll = require("../../functions/selectAll");
const selectOne = require("../../functions/selectOne");
const selectOption = {
  "列出全部商品信息": selectAll,
  "查找商品信息": selectOne,
  "上一页": goBack,
};
module.exports = selectOption;
