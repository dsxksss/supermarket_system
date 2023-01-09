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

  const maps = require("./maps");
  for (let [k, v] of Object.entries(maps)) {
    routerMap.set(k, v);
  }
}

module.exports = routerInit;
