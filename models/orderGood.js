// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require("../config/db");
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const OrderGood = Sequelize.import("../services/orderGood.js");
// 自动创建表
Order.sync({ force: false });

class OrderModel {
  static async getAllOrderGoods() {
    return await OrderGood.findAll();
  }
}

module.exports = OrderModel;
