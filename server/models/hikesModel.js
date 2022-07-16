const mongoose = require('mongoose')


const HikeSchema = new mongoose.Schema({
  title: {type: String, required : true},
  difficulty : { type : Number, required : false}, 
  type : { type : String, required : false },
  distance: {type: Number, required: false},
  location: {type: String, required: false},
  date: {type: String, required: false},
  notes : { type : String, required : false },
  crowds : { type : Number, required : false },
});

const Hike = mongoose.model('hikes', HikeSchema)

module.exports = Hike;
