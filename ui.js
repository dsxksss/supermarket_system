function UI() {
  const options = {
    "1": "录入信息",
    "2": "修改信息",
    "3": "删除信息",
  };
  console.log("*******************");
  for (let [k, v] of Object.entries(options)) {
    console.log("按下", k, "\t", v);
  }
  console.log("*******************");
}

// 导出
module.exports = UI;
