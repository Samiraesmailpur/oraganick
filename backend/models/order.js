const { model, Schema } = require("mongoose");
const Joi = require("joi");

const fullNameRegex = /^[A-Z][a-z]{2,}( [A-Z][a-z]{2,})?$/;
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const numberRegex = /^[+]?[(]?[0-9]{1,3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,10}$/;

const schema = Joi.object({
  fullName: Joi.string().pattern(fullNameRegex).required(),
  email: Joi.string().pattern(emailRegex).required(),
  address: Joi.string().required(),
  number: Joi.string().pattern(numberRegex).required(),
  products: Joi.array()
    .items(
      Joi.object({
        _id: Joi.string().required(),
        quantity: Joi.number().required(),
      })
    )
    .required(),
});

const orderSchema = Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    products: [
      {
        _id: {
          type: Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Order = model("Order", orderSchema);

module.exports = {
  Order,
  schema,
};
