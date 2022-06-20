const mongoose = require("mongoose");
const { Schema } = mongoose;

const StockSchema = new Schema({
  symbol: {type: String, required: true},
  liked: {type: [String], dfailt: []}
});
const Stock = mongoose.model("Stock", StockSchema);

exports.Stock = Stock;
