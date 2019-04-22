const SaleModel = require("../models/sale.js")

class saleController {
  static async create(ctx) {
    // 接收客服端
    let req = ctx.request.body
    if (req.num && req.price) {
      try {
        const ret = await SaleModel.createSale(req)
        const data = await SaleModel.getSaleDetail(ret.id)
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: "售后订单成功",
          data
        }
      } catch (err) {
        ctx.response.status = 412
        ctx.body = {
          code: 200,
          msg: "售后订单失败",
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
        let data = await SaleModel.getSaleDetail(id)
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
        msg: "用户ID必须传"
      }
    }
  }

  static async getOrderList(ctx) {
    let page = ctx.query.page
    if (page) {
      try {
        // 查询文章详情模型
        let data = await SaleModel.getOrderList(page)
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
          err
        }
      }
    }

  }

  static async getUserInfo(ctx) {
    let user_id = ctx.query.id
    if (user_id) {
      try {
        let data = await SaleModel.getUserInfo(user_id)
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: "查询人员成功",
          data
        }
      } catch (err) {
        ctx.response.status = 412
        ctx.body = {
          code: 412,
          msg: "查询人员失败",
          err
        }
      }
    } else {
      ctx.response.status = 416
      ctx.body = {
        code: 416,
        msg: "人员id必须传"
      }
    }
  }

  static async getUserInfoThings(ctx) {
    let user_id = ctx.query.id
    try {
      let data = await SaleModel.getUserInfoThings(user_id)
      ctx.response.status = 200
      ctx.body = {
        code: 200,
        msg: "查询good成功",
        data
      }
    } catch (err) {
      ctx.response.status = 412
      ctx.body = {
        code: 412,
        msg: "查询good失败",
        err
      }
    }
  }

  static async getOrderDetail(ctx) {
    let id = ctx.query.id
    if (id) {
      try {
        let data = await SaleModel.getOrderDetail(id)
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
          err
        }
      }
    } else {
      ctx.response.status = 416
      ctx.body = {
        code: 416,
        msg: "订单ID必须传"
      }
    }
  }

  static async getOrderId(ctx) {
    let id = ctx.query.id
    if (id) {
      try {
        let data = await SaleModel.getOrderId(id)
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
          err
        }
      }
    } else {
      ctx.response.status = 416
      ctx.body = {
        code: 416,
        msg: "订单ID必须传"
      }
    }
  }
}

module.exports = saleController
