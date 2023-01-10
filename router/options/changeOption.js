const changeAll = require("../../functions/changeAll");
const changePart = require("../../functions/changePart");
const changeOption = {
  "修改单个商品全部信息": changeAll,
  "修改单个商品部分信息": changePart,
  "上一页": goBack,
};
module.exports = changeOption;
