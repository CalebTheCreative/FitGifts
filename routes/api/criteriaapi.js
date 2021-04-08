const router = require('express').Router();
const criteria = require('../../controllers/criteriaController');

// Matches with "/api/criteria"
router.route('/find').get(criteria.findOne);

// Matches with "/api/criteria/:id"
router.route('/:id').get(criteria.findById).put(criteria.update).delete(criteria.remove);

module.exports = router;
