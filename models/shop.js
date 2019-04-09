const db = require("../config/db");
const Sequelize = db.sequelize;
const Shop = Sequelize.import("../services/shop.js");
const Brand = Sequelize.import("../services/brand.js");
const CategoryFirst = Sequelize.import("../services/categoryFirst.js");
const CategorySecond = Sequelize.import("../services/categorySecond.js");
CategoryFirst.hasMany(CategorySecond,{foreignKey:'parent_id',as:'children'});

class ShopModel {
  static async getShopList(type) {
    return await Shop.findAll({
      where:{type}
    });
  }
  //添加商品
  static async addShop(data) {
    return await Shop.create({
      type:data.shopType,
      name:data.name,
      img:data.imageUrl,
      update_time: Date.now(),
      create_time: Date.now(),
      price:data.price,
      property:data.property,
      brand_name:data.brandName,
      category_first_name: data.categoryFirstName,
      category_second_name: data.categorySecondName,
      total_count:data.count,
      offer_price: data.offerPrice
    })
  }
  //查询一级品类、二级品类名
  static async getCategoryNames() {
    return await CategoryFirst.findAll({
      attributes:[['name','label'],['name','value']],
      include:[{
        model:CategorySecond,
        attributes:[['name','label'],['name','value']],
        as:'children'
      }]
    })
  }
  //查询品类名列表
  static async getBrandNames() {
    return await Brand.findAll({
      attributes:[['name','label'],['name','value']]
    })
  }
}

module.exports = ShopModel;
