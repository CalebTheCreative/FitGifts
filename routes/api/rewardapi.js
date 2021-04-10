const router = require('express').Router();
const rewards = require('../../controllers/rewardController');

// Matches with "/api/rewards"
router.route('/find-rewards')
    .get(rewards.findAll)
    .post(rewards.create);

// Matches with "/api/rewards/:id"
router.route('/:id')
    .get(rewards.findById)
    .put(rewards.update)
    .delete(rewards.remove);

module.exports = router;
