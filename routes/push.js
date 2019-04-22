const Router = require("koa-router")
const pushController = require("../controller/push.js")

const router = new Router()

router.post("/push", pushController.create)
router.post("/push/update/", pushController.changeDetail)
router.post("/push/delete/", pushController.deletePush)

router.get("/push/:id", pushController.detail)
router.get("/push/type/:type", pushController.getType)

module.exports = router
