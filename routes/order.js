const Router = require("koa-router");

const router = new Router();
const OrderController = require("../controller/order");
const BrandController = require("../controller/brand");
const CategoryController = require("../controller/category");

//获取品牌列表
router.get('/getBrand',BrandController.getBrand);
//添加品牌
router.post('/creatBrand',BrandController.createBrand);
//修改品牌
router.post('/updateBrand',BrandController.updateBrand);
router.post('/updateBrandShow',BrandController.updateBrandShow);
//获取一级品类
router.get('/getCategoryFirst',CategoryController.getCategoryFirst);
//根据id获取二级品类
router.get('/getCategorySecond',CategoryController.getCategorySecond);
//修改一级品类
router.post('/updateCategoryFirst',CategoryController.updateCategoryFirst);
//修改二级品类
router.post('/updateCategorySecond',CategoryController.updateCategorySecond);
//添加一级品类
router.post('/createCategoryFirst',CategoryController.createCategoryFirst);
//添加二级品类
router.post('/createCategorySecond',CategoryController.createCategorySecond);


//创建订单
// router.get('/createOrder',OrderController.createOrder);


//根据type获取订单列表
router.get('/getOrderList',OrderController.getOrderList);
//根据订单id获取所包含的商品信息
router.get('/getOrderDetail',OrderController.getOrderDetail);
//根据id修改订单状态
router.post('/updateOrderStatus',OrderController.updateOrderStatus);
//根据用户id获取用户信息
router.get('/getUserInfo',OrderController.getUserInfo);

router.get('/test',OrderController.test);
module.exports = router;
