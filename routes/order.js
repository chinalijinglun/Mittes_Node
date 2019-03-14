const Router = require("koa-router");

const router = new Router();
const OrderController = require("../controller/order");
const BrandController = require("../controller/brand");
const CategoryController = require("../controller/category");
// const ClassController = require("../controller/class");

// router.get('/class',ClassController.create);
router.get('/order',OrderController.orderList);
//获取品牌列表
router.get('/getBrand',BrandController.getBrand);
//添加品牌
router.post('/creatBrand',BrandController.createBrand);
//修改品牌
router.post('/updateBrand',BrandController.updateBrand);
//获取一级品类
router.get('/getCategoryFirst',CategoryController.getCategoryFirst);
//根据id获取二级品类
router.get('/getCategorySecond',CategoryController.getCategorySecond);
module.exports = router;
