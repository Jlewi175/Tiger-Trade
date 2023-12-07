const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  itemDescription: {
    type: String,
    required: true
  },
  itemPrice: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: false
  }
});

module.exports = mongoose.model('item', itemSchema);

