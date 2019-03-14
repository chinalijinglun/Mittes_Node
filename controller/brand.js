const BrandModel = require("../models/brand");

class brandController {
  /**
   * 创建品牌
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async createBrand(ctx) {
    // 接收客服端
    let req = ctx.request.body;
    // let req = {name:'竹蜻蜓',show:1,image:'www.baidu.com',weight:99};  测试数据
    if (
      req.name &&
      req.show &&
      req.image &&
      req.weight
    ) {
      try {
        // 创建文章模型
        const data = await BrandModel.createBrand(req);

        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: "添加品牌成功",
          data
        };
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: "添加品牌失败",
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
   * 根据id修改品牌
   * @param ctx
   * @returns {Promise<void>}
   */

  static async updateBrand(ctx) {
    let req = ctx.request.body;
    // let req = {name:'孙悟空',show:'0',image:'www.qq.com',weight:990,id:3};  //测试数据
    if (
      req.name &&
      req.show &&
      req.image &&
      req.weight
    ) {
      try {
        const data = await BrandModel.updateBrand(req);

        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: "修改品牌成功",
          data
        };
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: "修改品牌失败",
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
   * 获取文章详情
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getBrand(ctx) {
    try {
      let data = await BrandModel.getBrandList();
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
}

module.exports = brandController;
