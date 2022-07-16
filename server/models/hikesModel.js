const mongoose = require('mongoose')

const HikeSchema = new mongoose.Schema({
  difficulty : { type : String, required : true }, 
  type : { type : String, required : true },
  distance: {type: Number, required: true},
  location: {type: String, required: true},
  date: {type: String, required: true},
  notes : { type : String, required : false },
  crowds : { type : String, required : true }
});

const Hike = mongoose.model('hikes', HikeSchema)

module.exports = Hike;
