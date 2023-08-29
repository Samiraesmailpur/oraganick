const express = require("express");
const ctrl = require("../../controllers/products");

const router = express.Router();

router.get("/", ctrl.getRecommendedProducts);

module.exports = router;
