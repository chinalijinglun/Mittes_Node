const PushModel = require("../models/push.js")

class pushController {
  static async create(ctx) {
    // 接收客服端
    let req = ctx.request.body
    if (
      req.type &&
      req.shop_name &&
      req.img &&
      req.push_name &&
      req.push_content
    ) {
      try {
        const ret = await PushModel.createPush(req)
        const data = await PushModel.getPushDetail(ret.id)
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: "推送成功",
          data
        }
      } catch (err) {
        ctx.response.status = 412
        ctx.body = {
          code: 200,
          msg: "推送失败",
          data: err
        }
      }
    } else {
      ctx.response.status = 416
      ctx.body = {
        code: 200,
        msg: "参数不齐"
      }
    }
  }

  static async detail(ctx) {
    let id = ctx.params.id
    if (id) {
      try {
        // 查询用户详情模型
        let data = await PushModel.getPushDetail(id)
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: "查询成功",
          data
        }
      } catch (err) {
        ctx.response.status = 412
        ctx.body = {
          code: 412,
          msg: "查询失败",
          data
        }
      }
    } else {
      ctx.response.status = 416
      ctx.body = {
        code: 416,
        msg: "推送ID必须传"
      }
    }
  }

  static async getType(ctx) {
    let type = ctx.params.type
    if (type) {
      try {
        let data = await PushModel.getOneDetais(type)
        // console.log(data)
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: "查询成功",
          data
        }
      } catch (e) {
        ctx.response.status = 412
        ctx.body = {
          code: 412,
          msg: "查询失败",
          data
        }
      }
    } else {
      ctx.response.status = 416
      ctx.body = {
        code: 416,
        msg: "type不能为空"
      }
    }
  }
}

module.exports = pushController
