const router = require('express').Router();
const reward = require('../../controllers/rewardController');

// Matches with "/api/reward/"
router.route('/').get(reward.findAll).post(reward.create);

// Matches with "/api/reward/:id"
router.route('/:id').get(reward.findById).put(reward.update).delete(reward.remove);

module.exports = router;
