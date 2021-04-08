const router = require('express').Router;
const reward = require('../../controllers/rewardController');

// Matches with "/api/rewards"
router.route('/find').get(reward.findOne);

// Matches with "/api/rewards/:id"
router.route('/:id').get(reward.findById).put(reward.update).delete(reward.remove);

module.exports = router;
