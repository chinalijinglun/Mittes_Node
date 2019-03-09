// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require("../config/db");
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const User = Sequelize.import("../services/user.js");
// 自动创建表
User.sync({ force: false });

class UserModel {
  /**
   * 创建user模型
   * @param data
   * @returns {Promise<*>}
   */
  static async createUser(data) {
    return await User.create({
      name: data.name, // userName
      password: data.password // userPassword
    });
  }

  /**
   * 查询取user数据
   * @param id  userID
   * @returns {Promise<Model>}
   */
  static async getUserDetail(id) {
    return await User.findOne({
      where: {
        id
      }
    });
  }
}

module.exports = UserModel;
