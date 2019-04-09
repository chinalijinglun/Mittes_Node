const ShopModel = require("../models/shop.js");


class shopController {

  /**
   * 根据订单type获取相应的订单列表
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getShopList(ctx) {
    let type = ctx.query.type;
    if (type) {
      try {
        // 查询文章详情模型
        let data = await ShopModel.getShopList(type);
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
        msg: "商品type必须传"
      };
    }
  }

  static async getCategoryNames(ctx) {
    try {
      // 查询文章详情模型
      let data = await ShopModel.getCategoryNames();
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
  }

  static async getBrandNames(ctx) {
    try {
      // 查询文章详情模型
      let data = await ShopModel.getBrandNames();
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
  }

  /**
   * @param ctx
   * @returns {Promise<void>}
   */
  static async createShop(ctx) {
    let req = ctx.request.body;
    if (
      req.shopType &&
      req.name &&
      req.imageUrl &&
      req.price &&
      req.property &&
      req.brandName &&
      req.categoryFirstName &&
      req.categorySecondName &&
      req.count &&
      req.offerPrice
    ) {
      try {

        const data = await ShopModel.addShop(req);
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



}

module.exports = shopController;
