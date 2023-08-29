const express = require("express");
const ctrl = require("../../controllers/products");

const router = express.Router();

router.get("/", ctrl.getProducts);
router.get("/:productId", ctrl.getProductsById);

module.exports = router;
