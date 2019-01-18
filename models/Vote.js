const mongoose = require('mongoose');
const User = require('./User');
const { Schema } = mongoose;

const GroupSchema = new Schema({
  value: Number,
  user: User
});

module.exports = mongoose.model('Group', GroupSchema);
