const mongoose = require("mongoose");

var QuoteSchema = mongoose.Schema({
  quote_text: { type: String, required: true, max: 200 },
  author: { type: String, require: true },
});

module.exports = mongoose.model("Quote", QuoteSchema);
