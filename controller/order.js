const OrderModel = require("../models/order.js");

class orderController {

  static async toSaleBack(ctx) {
    let req = ctx.request.body;
    if (
      req.id
    ) {
      try {
        const data = await OrderModel.toSaleBack(req);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: "成功",
          data
        };
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: "失败",
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

  static async createOrder(ctx) {
    // let req = ctx.request.body;
    let req = {
      user_id:17,
      status:'孙悟空',
      pay_type:'猜猜看',
      score_price:100,
      total_price:200
    };
    if (
      req.status &&
      req.pay_type &&
      req.score_price &&
      req.total_price &&
      req.user_id
    ) {
      try {

        const data = await OrderModel.createOrder(req);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: "成功",
          data
        };
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: "失败",
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
   * 根据订单id更新状态
   * @param ctx
   * @returns {Promise<void>}
   */
  static async updateOrderStatus(ctx) {
    let req = ctx.request.body;
    if (
      req.id
    ) {
      try {
        const data = await OrderModel.updateOrderStatus(req);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: "成功",
          data
        };
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: "失败",
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
   * 根据订单type获取相应的订单列表
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getOrderList(ctx) {
    let type = ctx.query.type;

    if (type) {
      try {
        // 查询文章详情模型
        let data = await OrderModel.getOrderList(type);
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
          err
        };
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: "订单type必须传"
      };
    }
  }

  /**
   * 根据订单id获取所含商品信息
   * @param ctx
   * @returns {Promise<void>}
   */

  static async getOrderDetail(ctx) {
    let id = ctx.query.id;
    if (id) {
      try {
        let data = await OrderModel.getOrderDetail(id);
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
          err
        };
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: "订单ID必须传"
      };
    }
  }

  /**
   * 根据id获取用户信息
   * @param ctx
   * @returns {Promise<void>}
   */

  static async getUserInfo(ctx) {
    let user_id = ctx.query.id;
    if (user_id) {
      try {
        let data = await OrderModel.getUserInfo(user_id);
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
          err
        };
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: "订单user_id必须传"
      };
    }
  }
}

module.exports = orderController;
