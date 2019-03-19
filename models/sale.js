// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require("../config/db");
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Sale = Sequelize.import("../services/sale.js");
// 自动创建表
Sale.sync({ force: false });

class SaleModel {
  static async createSale(data) {
    return await Sale.create({
      num: data.num,
      price: data.price
    });
  }
  static async getSaleDetail(id) {
    return await Sale.findOne({
      where: {
        id
      }
    });
  }
}

module.exports = SaleModel;
