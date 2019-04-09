// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require("../config/db");
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const SaleGood = Sequelize.import("../services/saleGood.js");
// 自动创建表
SaleGood.sync({ force: false });

class SaleGoodModel {
  /**
   * 创建user模型
   * @param data
   * @returns {Promise<*>}
   */
  static async createSaleGood(data) {
    return await SaleGood.create({
      order_id: data.order_id, // userName
      good_id: data.good_id, // userPassword
      count: data.count
    });
  }

  /**
   * 查询取user数据
   * @param id  userID
   * @returns {Promise<Model>}
   */
  static async getSaleGood(id) {
    return await SaleGood.findOne({
      where: {
        id
      }
    });
  }
}

module.exports = SaleGoodModel;
