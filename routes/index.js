const Router = require("koa-router");
const ArticleModel = require("../controller/article.js");
const UserModel = require("../controller/user.js");

const router = new Router({
  prefix: "/api/v1"
});

/**
 * 文章接口
 */
// 创建文章接口（路由）
router.post("/article", ArticleModel.create);
// 获取文章详情接口（路由）
router.get("/article/:id", ArticleModel.detail);

/**
 * 用户接口
 */
router.post("/users", UserModel.create);
// 获取文章详情接口（路由）
router.get("/users/:id", UserModel.detail);

module.exports = router;
