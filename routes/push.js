const Router = require("koa-router")
const pushController = require("../controller/push.js")

const router = new Router()

router.post("/push", pushController.create)
router.get("/push/:id", pushController.detail)

module.exports = router
