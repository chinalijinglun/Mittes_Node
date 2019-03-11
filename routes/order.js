const Router = require("koa-router");

const router = new Router();

router.get('/eric',ctx => {
  ctx.body = {name:'eric'}
});
module.exports = router;
