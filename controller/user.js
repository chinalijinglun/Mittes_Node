const UserModel = require("../models/user.js");

class userController {
  /**
   * 创建用户
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async create(ctx) {
    // 接收客服端
    let req = ctx.request.body;
    if (req.name && req.password) {
      try {
        // 创建用户模型
        const ret = await UserModel.createUser(req);
        // 把刚刚新建的用户ID查询用户详情，且返回新创建的用户信息
        const data = await UserModel.getUserDetail(ret.id);

        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: "创建用户成功",
          data
        };
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: "创建用户失败",
          data: err
        };
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 200,
        msg: "参数不齐全"
      };
    }
  }

  /**
   * 获取用户详情
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async detail(ctx) {
    let id = ctx.params.id;

    if (id) {
      try {
        // 查询用户详情模型
        let data = await UserModel.getUserDetail(id);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: "查询成功",
          data
        };
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: "查询失败",
          data
        };
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: "用户ID必须传"
      };
    }
  }
}

module.exports = userController;
