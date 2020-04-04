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
  },
  user: {
    type: Schema.Types.ObjectId
  }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
