const db = require("../config/db");
const Sequelize = db.sequelize;
const Brand = Sequelize.import("../services/brand.js");
class BrandModel {
  /**
   * 创建品牌模型
   * @param data
   * @returns {Promise<*>}
   */
  static async createBrand(data) {
    return await Brand.create({
      name: data.name,
      weight: data.weight,
      image: data.image,
      show: data.show
    });
  }

  /**
   * 根据id更新品牌信息
   * @param data
   * @returns {Promise<*>}
   */

  static async updateBrand(data) {
    return await Brand.update(
      {
        name:data.name,
        show:data.show,
        weight:data.weight,
        image:data.image
      },
      {
        where:{id:data.id}
      }
    )
  }

  /**
   * 是否显示
   * @param data
   * @returns {Promise<*>}
   */

  static async updateBrandShow(data) {
    return await Brand.update(
      {
      show:data.show
      },
      {
        where:{id:data.id}
      }
    )
  }

  /**
   * 查询品牌列表
   * @returns {Promise<Model>}
   */
  static async getBrandList() {
    return await Brand.findAll();
  }
}

module.exports = BrandModel;
