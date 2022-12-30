function showUI() {
  const options = {
    "1": "录入信息",
    "2": "修改信息",
    "3": "删除信息",
  };
  console.log("\033[32m*******************\033[0m");
  for (let [k, v] of Object.entries(options)) {
    console.log("按下\033[31m", k, "\033[0m:", v);
  }
  console.log("\033[32m*******************\033[0m");
}

// 导出
module.exports = showUI;
