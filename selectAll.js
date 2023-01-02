const connection = require("./connection");

function selectAll(){
    connection.query("select * from product",function(error, products){
        if (error) {
            console.log("列出全部商品信息失败!",error);
            process.exit(1);
        }
        console.log(products)
    })
    connection.end();
}

module.exports = selectAll;