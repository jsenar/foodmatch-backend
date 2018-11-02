const express = require('express');
const voteGroupController = require('../controllers/voteGroup.controller');

const router = express.Router();

router.post('/create', voteGroupController.voteGroupCreate);

router.get('/:id', voteGroupController.voteGroupDetails);

router.put('/:id/update', voteGroupController.voteGroupUpdate);

router.delete('/:id/delete', voteGroupController.voteGroupDelete);

module.exports = router;
