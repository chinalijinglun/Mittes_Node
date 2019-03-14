// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require("../config/db");
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Order = Sequelize.import("../services/order.js");
// 自动创建表
Order.sync({ force: false });
const OrderGood = Sequelize.import("../services/orderGood");
// 自动创建表
OrderGood.sync({ force: false });
Order.hasMany(OrderGood,{foreignKey:'order_num',as:'info'});

class OrderModel {
  static async createOrder(data) {
    return await Order.create({

    });
  }

  static async getAllOrder() {
    return await Order.find({
      include:[{
        model:OrderGood,
        as:'info'
      }]
    });
  }
}

module.exports = OrderModel;
