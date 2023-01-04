// 导入
const showUI = require("./ui/ui");
const dbInit = require("./db/dbInit");

dbInit(); // 初始化数据库
showUI(); // 显示界面