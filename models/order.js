const db = require("../config/db")
const Sequelize = db.sequelize
const Order = Sequelize.import("../services/order.js")
const Shop = Sequelize.import("../services/shop.js")
const OrderGood = Sequelize.import("../services/orderGood.js")
const User = Sequelize.import("../services/user.js")
const Sale = Sequelize.import("../services/sale.js")
const SaleGood = Sequelize.import("../services/saleGood.js")
// const SaleGoodModel = Sequelize.import("./saleGood.js")
// Order.hasMany(OrderGood,{foreignKey:'order_num',as:'info'});
Shop.belongsToMany(Order, {
  through: OrderGood,
  foreignKey: "good_id",
  otherKey: "order_id"
})
class OrderModel {
  static async createOrder(data) {
    return await Order.create({
      create_time: Date.now(),
      status: data.status,
      pay_type: data.pay_type,
      score_price: data.score_price,
      total_price: data.total_price,
      user_id: data.user_id
    })
  }

  // static async createSaleGood(data) {
  //   return await SaleGood.create({
  //     order_id: data.order_id,
  //     good_id: data.good_id,
  //     count: data.count,
  //   })
  // }

  /**
   * 根据id把已完成订单转到售后表
   * @param data
   * @returns {Promise<*>}
   */
  static async toSaleBack(data) {
    return await Sequelize.transaction().then(function (t) {
      return (
        Order.findOne({
          transaction: t,
          where: { id: data.id }
        })
          .then(res => {
            return Sale.create(
              {
                id: res.id,
                total_price: res.total_price,
                createdAt: res.create_time,
                user_id: res.user_id,
                pay_type: res.pay_type,
                status: res.status,
                score_price: res.score_price
              },
              {
                transaction: t
              }
            )
          })
          .then(res => {
            return OrderGood.findAll({
              transaction: t,
              where: { order_id: data.id }
            })
              .then(datas => {
                for (var i = 0, usr; usr = datas[i++];) {
                  console.log('order_id=' + usr.order_id + ', good_id=' + usr.good_id + ', count=' + usr.count);
                  return SaleGood.create({
                    order_id: usr.order_id,
                    good_id: usr.good_id,
                    count: usr.count,
                  })
                }
              })
            // return SaleGood.create({
            //   order_id: data.order_id,
            //   good_id: data.good_id,
            //   count: data.count,
            // })
          })
          .then(res => {
            return Order.update({
              status: '已售后'
            }, {
                transaction: t,
                where: { id: data.id }
              });
          })
          .then(res => {
            // return Promise.resolve(t.commit())
            return t.commit()
          })
          .catch(err => {
            // return Promise.reject(t.rollback());
            throw t.rollback()
          })
      )
    })
  }

  /**
   * 获取type查询相应订单列表
   * 1：待发货 2：已发货 3：已完成
   * @returns {Promise<void>}
   */
  static async getOrderList(type) {
    let status
    switch (type) {
      case "1":
        status = "待发货"
        break
      case "2":
        status = "已发货"
        break
      case "3":
        status = "已完成"
        break
      default:
        return
    }
    return await Order.findAll({
      where: { status }
    })
  }

  /**
   * 根据订单id查询所含商品
   * @returns {Promise<*>}
   */

  static async getOrderDetail(id) {
    // return await Order.findAll({
    //   include:[{
    //     model:Shop,
    //     through: {
    //       attributes:[]
    //     }
    //   }]
    // })

    return Shop.findAll({
      include: [
        {
          model: Order,
          attributes: ["id"],
          where: {
            id
          }
        }
      ]
    })
  }

  /**
   * 根据订单id修改发货状态
   * @param data
   * @returns {Promise<this>}
   */

  static async updateOrderStatus(data) {
    return Order.update(
      {
        status: data.status
      },
      {
        where: {
          id: data.id
        }
      }
    )
  }

  /**
   * 根据id获取用户信息
   * @param userId
   * @returns {Promise<*>}
   */
  static async getUserInfo(userId) {
    return User.findOne({
      where: { id: userId }
    })
  }
}

module.exports = OrderModel
