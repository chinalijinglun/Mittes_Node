// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require("../config/db")
// 引入Sequelize对象
const Sequelize = db.sequelize
// 引入上一步的文章数据表模型文件
const Push = Sequelize.import("../services/push.js")
// 自动创建表
Push.sync({ force: false })

class PushModel {
  static async createPush(data) {
    return await Push.create({
      type: data.type,
      shop_name: data.shop_name,
      img: data.img,
      push_name: data.push_name,
      push_content: data.push_content
    })
  }
  static async getPushDetail(id) {
    return await Push.findOne({
      where: {
        id
      }
    })
  }
  static async updatePush(data) {
    return Push.update(
      {
        type: data.type,
        shop_name: data.shop_name,
        img: data.img,
        push_name: data.push_name,
        push_content: data.push_content
      },
      {
        where: {
          id: data.id
        }
      }
    )
  }
  static async getOneDetais(type) {
    return await Push.findAll({
      where: {
        type
      }
    })
  }
  static async deletePush(id) {
    return await Push.destroy({
      where: {
        id
      }
    })
  }

}

module.exports = PushModel
