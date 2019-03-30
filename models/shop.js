const db = require("../config/db");
const Sequelize = db.sequelize;
const Shop = Sequelize.import("../services/shop.js");

class ShopModel {
  static async getShopList(type) {
    return await Shop.findAll({
      where:{type}
    });
  }
}

module.exports = ShopModel;
