const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router({
  prefix: "/api/v1"
});

const views = require("koa-views");
const co = require("co");
const convert = require("koa-convert");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const debug = require("debug")("koa2:server");
const path = require("path");

const config = require("./config");
const routes = require("./routes");

const ArticleModel = require("./controller/article.js");
const UserModel = require("./controller/user.js");
const cors = require("koa2-cors");

const port = process.env.PORT || config.port;

// error handler
onerror(app);

app.use(
  cors({
    origin: function(ctx) {
      return "*";
    },
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
    maxAge: 5,
    credentials: true,
    allowMethods: ["GET", "POST", "DELETE", "OPTIONS", "put"],
    allowHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "token",
      "Content-Length",
      "X-Requested-With"
    ]
  })
);

// middlewares
app
  .use(bodyparser())
  .use(json())
  .use(logger())
  .use(require("koa-static")(__dirname + "/public"))
  .use(
    views(path.join(__dirname, "/views"), {
      options: { settings: { views: path.join(__dirname, "views") } },
      map: { njk: "nunjucks" },
      extension: "njk"
    })
  )
  .use(router.routes())
  .use(router.allowedMethods());

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - $ms`);
});

router.get("/", async (ctx, next) => {
  // ctx.body = 'Hello World'
  ctx.state = {
    title: "Koa2"
  };
  await ctx.render("index", ctx.state);
});

// const router = new Router({
//   prefix: "/api/v1"
// });

/**
 * 文章接口
 */
// 创建文章接口（路由）
// router.post("/article", ArticleModel.create);
// 获取文章详情接口（路由）
// router.get("/article/:id", ArticleModel.detail);

/**
 * 用户接口
 */
router.post("/users", UserModel.create);
// 获取文章详情接口（路由）
router.get("/users/:id", UserModel.detail);

// routes(router);
app.on("error", function(err, ctx) {
  console.log(err);
  logger.error("server error", err, ctx);
});

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
