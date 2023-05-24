const input = require("scanline");
const menu = require("./menu");
const productType = require("../db/productType")

async function productInput(){
    let product = {
        "名称": "",
        "价格": 0,
        "种类": "",
        "数量": 0,
    };

    product.名称 = await input("请输入你的商品名称: ");
    product.价格 = parseFloat(await input("请输入你的商品价格: "));

    let select = await menu(Object.keys(productType), "请选择你的商品类型: \n",false);
    product.种类 = productType[select.text];

    product.数量 = parseInt(await input("请输入你的商品数量: "));
    return product
}

module.exports = productInput