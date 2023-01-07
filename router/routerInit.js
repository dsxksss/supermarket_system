function routerInit() {
  let routerPath = [];
  let routerMap = new Map();

  global.goTo = function (where) {
    if (!routerMap.has(where)) {
      console.log("该路径无效!!!");
      process.exit(2);
    } else {
      routerMap.get(where)();
      if (where !== "上一页") routerPath.push(where);
    }
  };

  global.goBack = function () {
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

  goTo("主菜单");
}

module.exports = routerInit;
