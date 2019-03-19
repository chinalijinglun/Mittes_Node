const Router = require("koa-router");
const UserModel = require("../controller/sale.js");

const router = new Router();

router.post("/sale", UserModel.create);
router.get("/sale/:id", UserModel.detail);

module.exports = router;
