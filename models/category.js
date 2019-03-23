const db = require("../config/db");
const Sequelize = db.sequelize;
const CategoryFirst = Sequelize.import("../services/categoryFirst.js");
const CategorySecond = Sequelize.import("../services/categorySecond.js");
class CategoryModel {
  static async createArticle(data) {
    return await CategoryFirst.create({
      title: data.title,
      author: data.author,
      content: data.content,
      category: data.category
    });
  }

  /**
   * 查询一级品类列表
   * @returns {Promise<void>}
   */
  static async getCategoryFirstList() {
    return await CategoryFirst.findAll();
  }

  /**
   * 根据parent_id查询二级品类
   * @param id
   * @returns {Promise<void>}
   */
  static async getCategorySecondList(id) {
    return await CategorySecond.findAll({
      where:{
        parent_id:id
      }
    });
  }

  /**
   * 修改一级品类
   * @param data
   * @returns {Promise<*>}
   */
  static async updateCategoryFirst(data) {
    return await CategoryFirst.update(
      {
        name:data.name,
        img:data.img,
        show:data.show,
        weight:data.weight
      },
      {
        where:{
          id:data.id
        }
      }
    )
  }

  /**
   * 添加一级品类
   * @param data
   * @returns {Promise<*>}
   */
  static async createCategoryFirst(data) {
    return await CategoryFirst.create({
      name:data.name,
      img:data.img,
      show:data.show,
      weight:data.weight
    })
  }

  /**
   * 修改二级品类
   * @param data
   * @returns {Promise<*>}
   */
  static async updateCategorySecond(data) {
    return await CategorySecond.update(
      {
        name:data.name,
        property:data.property,
        show:data.show,
        weight:data.weight
      },
      {
        where:{
          id:data.id
        }
      }
    )
  }

  /**
   * 添加二级品类
   * @param data
   * @returns {Promise<*>}
   */
  static async createCategorySecond(data) {
    return await CategorySecond.create({
      name:data.name,
      parent_id:data.parent_id,
      property:data.property,
      show:data.show,
      weight:data.weight
    })
  }
}

module.exports = CategoryModel;
