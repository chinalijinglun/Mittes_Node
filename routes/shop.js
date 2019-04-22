const Router = require("koa-router");
const ShopController = require("../controller/shop");
const router = new Router();

router.get('/getCategoryNames',ShopController.getCategoryNames);
router.get('/getBrandNames',ShopController.getBrandNames);
router.post('/createShop',ShopController.createShop);

router.post('/updateVolume',ShopController.incrementVolume);
//删除商品
router.post('/deleteShop',ShopController.deleteShop);
module.exports = router;
