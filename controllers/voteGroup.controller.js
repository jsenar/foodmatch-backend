const VoteGroup = require('../models/voteGroup.model');
const mongoose = require('mongoose');

function voteGroupCreate(req, res) {
  console.log(req.body);
  const voteGroup = new VoteGroup(
    {
      _id: new mongoose.Types.ObjectId,
      users: [],
      restaurants: req.body.restaurants,
    },
  );

  voteGroup.save((err) => {
    if (err) {
      return next(err);
    }
    res.send('VoteGroup Created Successfully!');
    return null;
  });
}

function voteGroupDetails(req, res) {
  VoteGroup.findById(req.params.id, (err, voteGroup) => {
    if (err) return next(err);
    res.send(voteGroup);
  });
}

function voteGroupUpdate(req, res) {
  VoteGroup.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, voteGroup) => {
      if (err) {
        return next(err);
      }
      res.send('VoteGroup Updated');
    },
  );
}

function voteGroupDelete(req, res) {
  VoteGroup.findByIdAndRemove(
    req.params.id,
    (err) => {
      if (err) {
        return next(err);
      }
      res.send('VoteGroup deleted');
    },
  );
}

exports.voteGroupCreate = voteGroupCreate;
exports.voteGroupDetails = voteGroupDetails;
exports.voteGroupUpdate = voteGroupUpdate;
exports.voteGroupDelete = voteGroupDelete;
