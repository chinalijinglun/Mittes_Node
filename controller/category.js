const CategoryModel = require("../models/category");

class categoryController {
  /**
   * 添加一级品类
   * @param ctx
   * @returns {Promise<void>}
   */
  static async createCategoryFirst(ctx) {
    let req = ctx.request.body;
    if (
      req.name &&
      req.img &&
      req.show &&
      req.weight
    ) {
      try {
        const data = await CategoryModel.createCategoryFirst(req);
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
   *  添加二级品类
   * @param ctx
   * @returns {Promise<void>}
   */
  static async createCategorySecond(ctx) {
    let req = ctx.request.body;
    if (
      req.name &&
      req.show &&
      req.weight &&
      req.property &&
      req.parent_id
    ) {
      try {
        const data = await CategoryModel.createCategorySecond(req);
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
   * 更新一级品类
   * @param ctx
   * @returns {Promise<void>}
   */
  static async updateCategoryFirst(ctx) {
    let req = ctx.request.body;
    if (
      req.name &&
      req.img &&
      req.show &&
      req.weight &&
      req.id
    ) {
      try {
        const data = await CategoryModel.updateCategoryFirst(req);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: "修改一级品类成功",
          data
        };
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: "修改一级品类失败",
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
   * 更新二级品类
   * @param ctx
   * @returns {Promise<void>}
   */
  static async updateCategorySecond(ctx) {
    let req = ctx.request.body;
    if (
      req.id
    ) {
      try {
        const data = await CategoryModel.updateCategorySecond(req);
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
   *
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getCategoryFirst(ctx) {
    try {
      let data = await CategoryModel.getCategoryFirstList();
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
   *
   * @param ctx
   * @returns {Promise<void>}
   */
  static async getCategorySecond(ctx) {
    let id = ctx.query.id;
    if (id) {
      try {
        let data = await CategoryModel.getCategorySecondList(id);
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
        msg: "文章ID必须传"
      };
    }
  }
}

module.exports = categoryController;
