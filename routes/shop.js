const Router = require("koa-router");

const router = new Router();

router.get('/mike',ctx => {
  ctx.body = {name:'mike'}
});
module.exports = router;
