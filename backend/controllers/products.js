const { Product } = require("../models/product");
const { HttpError } = require("../helpers");

const getProducts = async (req, res) => {
  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;

  const products = await Product.find({}).skip(skip).limit(limit).sort({
    discount: -1,
  });
  const totalProducts = await Product.countDocuments({});

  if (!products) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({ totalProducts, products });
};

const getRecommendedProducts = async (req, res) => {
  const products = await Product.find({});
  const recommendedProducts = products.filter((prod) => prod.recommended);
  if (!recommendedProducts) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(recommendedProducts);
};

const getShopProducts = async (req, res) => {
  const products = await Product.find({ discount: { $exists: true } });
  if (!products) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(products);
};

const getProductsById = async (req, res) => {
  const { productId } = req.params;
  const products = await Product.findOne({ _id: productId });

  if (!products) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(products);
};

module.exports = {
  getProducts,
  getProductsById,
  getShopProducts,
  getRecommendedProducts,
};
