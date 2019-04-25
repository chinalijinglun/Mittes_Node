// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require("../config/db")
// 引入Sequelize对象
const Sequelize = db.sequelize
// 引入上一步的文章数据表模型文件
const User = Sequelize.import("../services/user.js")
const Sale = Sequelize.import("../services/sale.js")
const SaleGood = Sequelize.import("../services/saleGood.js")
const Shop = Sequelize.import("../services/shop.js")
const Order = Sequelize.import("../services/order.js")

// 自动创建表
Sale.sync({ force: false })

Shop.belongsToMany(Sale, {
  through: SaleGood,
  foreignKey: "good_id",
  otherKey: "order_id"
})

// Shop.hasMany(SaleGood, { foreignKey: 'good_id' });
// SaleGood.belongsTo(Sale, { foreignKey: 'order_id' });

class SaleModel {
  // 关联表
  static async getOrderDetail(id) {
    return Shop.findAll({
      include: [
        {
          model: Sale,
          attributes: ["id"],
          where: {
            id
          }
        }
      ]
    })
    // return Shop.findAll({
    //   include: [
    //     {
    //       model: SaleGood,
    //       where: {
    //         good_id: id
    //       }
    //     }
    //   ]
    // })
  }
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
  static async getOrderList(page) {
    // return await Sale.findAll()
    return await Sale.findAndCountAll({
      offset: (page - 1) * 10,
      limit: 10,
    })
  }
  // 获取用户信息
  static async getUserInfo(userId) {
    return User.findOne({
      where: { id: userId }
    })
  }
  // 通过order_id取得order_goods表中所有的good_id
  /**
   * 
   * @param {*} id  前端传过来的sale 的id
   * 然后通过sale的id，去salegood表里面查orderId等于saleid的值，然后拿到后去shops里面去goodsid的值
   */
  static async getUserInfoThings(id) {
    return SaleGood.findAll({
      where: { order_id: id }
    }).then(result => {
      for (var i = 0, usr; usr = result[i++];) {
        console.log('order_id=' + usr.order_id + ', good_id=' + usr.good_id + ', count=' + usr.count);
        return Shop.findOne({
          where: { id: usr.good_id }
        })
      }
    })
  }
  // 获取order表的id
  static async getOrderId(id) {
    return await Order.findAll({
      where: {
        id
      }
    })
  }
}

module.exports = SaleModel
