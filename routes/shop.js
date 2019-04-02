const Router = require("koa-router");
const ShopController = require("../controller/shop");
const router = new Router();

router.get('/getCategoryNames',ShopController.getCategoryNames);
router.get('/getBrandNames',ShopController.getBrandNames);
module.exports = router;
