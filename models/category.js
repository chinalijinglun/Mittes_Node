const db = require("../config/db");
const Sequelize = db.sequelize;
const CategoryFirst = Sequelize.import("../services/categoryFirst.js");
const CategorySecond = Sequelize.import("../services/categorySecond.js");
class CategoryModel {
  static async createArticle(data) {
    return await CategoryFirst.create({
      title: data.title, // 文章标题
      author: data.author, // 文章作者
      content: data.content, // 文章内容
      category: data.category // 文章分类
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
}

module.exports = CategoryModel;
