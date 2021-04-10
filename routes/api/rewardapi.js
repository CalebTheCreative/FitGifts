const router = require('express').Router();
const reward = require('../../controllers/rewardController');

// Matches with "/api/reward/"
router.route('/find-rewards').get(reward.findAll);

// Matches with "/api/reward/:id"
router.route('/:id').get(reward.findById).put(reward.update).delete(reward.remove);

// Matches with "/api/reward/new-reward"
router.post('/new-reward', reward.newReward);

// Matches with "api/reward/trainer-reward"
router.route('/trainer-reward', reward.findById);

module.exports = router;
