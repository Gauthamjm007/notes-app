const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  edit: {
    type: Boolean,
    default: true
  }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
