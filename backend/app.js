const express = require("express");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/products", require("./routes/api/products"));
app.use("/api/recommended", require("./routes/api/recommended"));
app.use("/api/orders", require("./routes/api/orders"));
app.use("/api/shop", require("./routes/api/shop"));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
