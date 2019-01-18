const mongoose = require('mongoose');
const Vote = require('./Vote');
const { Schema } = mongoose;

const BusinessSchema = new Schema({
  name: String,
  alias: String,
  rating: Number,
  reviewCount: Number,
  votes: [Vote]
});

module.exports = mongoose.model('Group', GroupSchema);
