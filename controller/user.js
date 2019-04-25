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
    let name = ctx.query.name;
    let password = ctx.query.password;

    if (name && password) {
      try {
        // 查询用户详情模型
        let data = await UserModel.getUserDetails(name, password);
        console.log(data === null)
        if (data != null) {
          ctx.response.status = 200;
          ctx.body = {
            code: 200,
            msg: "查询成功",
            data
          };
        } else {
          ctx.response.status = 416;
          ctx.body = {
            code: 201,
            msg: "查无此人",
            data
          };
        }

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
        msg: "用户参数不全"
      };
    }
  }
}

module.exports = userController;
