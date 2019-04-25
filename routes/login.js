const Router = require("koa-router");
const ShopController = require("../controller/user");
const router = new Router();

router.get('/login', ShopController.detail);
router.post('/register', ShopController.create);
module.exports = router;
