// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require("../config/db")
// 引入Sequelize对象
const Sequelize = db.sequelize
// 引入上一步的文章数据表模型文件
const User = Sequelize.import("../services/user.js")
const Sale = Sequelize.import("../services/sale.js")
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
}

module.exports = SaleModel
