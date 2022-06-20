const mongoose = require("mongoose");
const db = mongoose.connect(process.env.DB, {
  useUnifiedTopolog: true,
  useNewUrlParser: true,
});

module.exports = db;
