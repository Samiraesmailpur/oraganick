const { Order } = require("../models/order");
const { HttpError } = require("../helpers");

const addOrder = async (req, res) => {
  const result = await Order.create({ ...req.body });

  res.status(201).json(result);
};

const getOrders = async (req, res) => {
  const orders = await Order.find({});

  if (!orders) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(orders);
};

module.exports = {
  addOrder,
  getOrders,
};
