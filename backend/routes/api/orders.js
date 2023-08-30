const express = require("express");
const ctrl = require("../../controllers/orders");
const { validateBody } = require("../../middlewares/validateBody");
const { schema } = require("../../models/order");

const router = express.Router();

router.post("/", validateBody(schema), ctrl.addOrder);
router.get("/", ctrl.getOrders);

module.exports = router;
