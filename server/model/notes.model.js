const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  title : {
    type : String,
    required : [true,"Title is required"],
  },
  content : {
    type : String,
    required : [true,"Content is required"],
  },
  isPinned : {
    type : Boolean,
    default : false,
  }
},{timestamps : true});

const Notes  = mongoose.model("Notes",notesSchema);
module.exports = Notes;