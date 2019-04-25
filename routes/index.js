const Router = require("koa-router")
const ArticleModel = require("../controller/article.js")
const UserModel = require("../controller/user.js")
// const ChangController = require("../controller/chang");
const order = require("./order")
const shop = require("./shop")
const sale = require("./sale")
const push = require("./push")
const upload = require("../utils/upload")
const login = require("./login")

const router = new Router({
  prefix: "/api/v1"
})
//
// /**
//  * 文章接口
//  */
// // 创建文章接口（路由）
// router.post("/article", ArticleModel.create);
// // 获取文章详情接口（路由）
// router.get("/article/:id", ArticleModel.detail);
//
// /**
//  * 用户接口
//  */
// router.post("/users", UserModel.create);
// // 获取文章详情接口（路由）
// router.get("/users/:id", UserModel.detail);
//
router.use(
  order.routes(),
  shop.routes(),
  sale.routes(),
  upload.routes(),
  push.routes(),
  login.routes()
)

module.exports = router
