const mongoose = require("mongoose");

// schema
const Schema = mongoose.Schema;
const notesSchema = new Schema({
  title: {
    type: String,
    required: true
    //custome validator
    //validate:{
    //   validator:function(value){
    // condition ? true:false
    // },
    //message:function(){return 'error'}
    // }
  },
  body: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category"
  },
  edit: {
    type: Boolean,
    default: false
  }
});

//mongoose middleware
//pre("validate")
notesSchema.pre("save", function(next) {
  console.log("function called before saving a reacord");
  next();
});
// model
const Note = mongoose.model("Note", notesSchema);

module.exports = Note;
