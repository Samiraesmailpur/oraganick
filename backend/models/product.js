const { model, Schema } = require("mongoose");

const productSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  image: {
    type: String,
    required: [true, "image is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  discount: {
    type: Number,
    required: [true, "discount is required"],
  },
  description: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
    required: true,
  },
  recommended: {
    type: Boolean,
  },
  rating: {
    type: Number,
  },
});

const Product = model("Product", productSchema);

module.exports = {
  Product,
};
