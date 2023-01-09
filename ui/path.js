function path() {
  process.stdout.write(`${" 当前路径: "}`);
  for (let s of getPath()) {
    if (getPath().indexOf(s) !== getPath().length - 1) {
      process.stdout.write(`${"\033[32m"}${s} > ${"\033[0m"}`);
    } else {
      process.stdout.write(`${"\033[32m"}${s}${"\033[0m"}`);
    }
  }
  console.log("");
}
module.exports = path;
