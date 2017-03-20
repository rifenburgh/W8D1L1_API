const mongoose          = require('mongoose');
const Schema            = mongoose.Schema;

//Defines the data types that will be used in the Phones Model
const phoneSchema       = new Schema({
  brand:                {
    type:               String,
    required:           [true, 'The phone brand is required']
  },
  image:                {
    type:               String,
    default:            ''
  },
  name:                 {
    type:               String,
    required:           [true, 'The phone name is required']
  },
  specs:                {
    type:               Array,
    defaults:           []
  },

});

const Phones             = mongoose.model('Phones', phoneSchema);
module.exports          = Phones;
