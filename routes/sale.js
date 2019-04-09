const Router = require("koa-router")
const saleController = require("../controller/sale")

const router = new Router()

router.post("/sale", saleController.create)
router.get("/sale/list", saleController.getOrderList)
router.get("/sale/user", saleController.getUserInfo)
router.get("/sale/:id", saleController.detail)

module.exports = router
