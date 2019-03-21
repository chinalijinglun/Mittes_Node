const Koa = require("koa");
const app = new Koa();
const co = require("co");
const convert = require("koa-convert");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const debug = require("debug")("koa2:server");
const path = require("path");
const koaBody = require("koa-body");

const config = require("./config");
const router = require("./routes");

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

// middlewares  .use(bodyparser())
app
  .use(json())
  .use(logger())
  .use(require("koa-static")(__dirname + "/public"))
  .use(
    koaBody({
      multipart: true,
      formidable: {
        maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
      }
    })
  );

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - $ms`);
});

// 路由使用
app.use(router.routes(), router.allowedMethods());

app.on("error", function(err, ctx) {
  console.log(err);
  logger.error("server error", err, ctx);
});

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
