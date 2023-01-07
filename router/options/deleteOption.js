const deleteAll = require("../../functions/deleteAll");
const deleteOne = require("../../functions/deleteOne");
const deleteOption = {
  "删除全部商品信息": deleteAll,
  "删除单个商品信息": deleteOne,
  "上一页": goBack,
};
module.exports = deleteOption;
