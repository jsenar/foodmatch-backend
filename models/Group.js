const mongoose = require('mongoose');
const User = require('./User');
const Business = require('./Business');
const { Schema } = mongoose;

const GroupSchema = new Schema({
  dateCreated: Number,
  users: [User],
  businesses: [Business],
});

module.exports = mongoose.model('Group', GroupSchema);
