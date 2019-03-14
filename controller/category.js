const CategoryModel = require("../models/category");

class categoryController {
  static async create(ctx) {
    let req = ctx.request.body;
    if (
      req.title && // 文章标题
      req.author && // 文章作者
      req.content && // 文章内容
      req.category // 文章分类
    ) {
      try {
        // 创建文章模型
        const ret = await CategoryFirstModel.createArticle(req);
        // 把刚刚新建的文章ID查询文章详情，且返回新创建的文章信息
        const data = await CategoryFirstModel.getArticleDetail(ret.id);

        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: "创建文章成功",
          data
        };
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: "创建文章失败",
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
