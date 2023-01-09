// 导入
const dbInit = require("./db/dbInit");
const routerInit = require("./router/routerInit");

dbInit(); // 初始化数据库
routerInit(); // 初始化路由
goTo("主菜单");