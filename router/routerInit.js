function routerInit() {
  let routerPath = [];
  let routerMap = new Map();

  global.goTo = function (where) {
    console.clear();
    if (!routerMap.has(where)) {
      console.log("该路径无效!!!");
      process.exit(2);
    } else {
      if (where !== "上一页") routerPath.push(where);
      routerMap.get(where)();
    }
  };

  global.goBack = function () {
    console.clear();
    routerPath.pop();
    routerMap.get(routerPath[routerPath.length - 1])();
  };

  global.getPath = function () {
    return routerPath;
  };

  global.showPath = function () {
  process.stdout.write(`${" 📢 "}`);
  for (let path of routerPath) {
    // 判断循环的每一个路径是否为最后一个路径
    if (routerPath.indexOf(path) !== routerPath.length - 1) {
      // 如果不是则按："路径 >" 显示
      process.stdout.write(`${"\033[32m"}${path} > ${"\033[0m"}`);
    } else {
      // 如果是最后一个路径则按: "路径" 显示
      process.stdout.write(`${"\033[32m"}${path}${"\033[0m"}`);
    }
  }
  console.log();
};

  const maps = require("./maps");
  for (let [k, v] of Object.entries(maps)) {
    routerMap.set(k, v);
  }
}

module.exports = routerInit;
