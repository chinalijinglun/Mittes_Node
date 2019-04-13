// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require("../config/db")
// 引入Sequelize对象
const Sequelize = db.sequelize
// 引入上一步的文章数据表模型文件
const User = Sequelize.import("../services/user.js")
const Sale = Sequelize.import("../services/sale.js")
const OrderGood = Sequelize.import("../services/orderGood.js")
// 自动创建表
Sale.sync({ force: false })

class SaleModel {
  static async createSale(data) {
    return await Sale.create({
      num: data.num,
      price: data.price
    })
  }
  static async getSaleDetail(id) {
    return await Sale.findOne({
      where: {
        id
      }
    })
  }
  //获取order列表
  static async getOrderList() {
    console.log(Sale)
    return await Sale.findAll()
  }
  // 获取用户信息
  static async getUserInfo(userId) {
    return User.findOne({
      where: { id: userId }
    })
  }
  // 通过order_id取得order_goods表中所有的good_id
  static async getUserInfo(id) {
    return OrderGood.findAll({
      where: { order_id: id }
    })
  }
}

module.exports = SaleModel
