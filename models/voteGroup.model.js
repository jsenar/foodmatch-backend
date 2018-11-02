const mongoose = require('mongoose');

const { Schema } = mongoose;

const VoteGroupSchema = new Schema({
  users: [{ name: String, votes: [{ restaurantId: String, liked: Boolean }] }],
  restaurants: [{
    id: String,
    name: String,
    imageUrl: String,
    url: String,
    rating: Number,
    reviewCount: Number,
  }],
});

module.exports = mongoose.model('VoteGroup', VoteGroupSchema);
