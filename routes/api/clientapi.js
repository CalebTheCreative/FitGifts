const router = require('express').Router();
const client = require('../../controllers/clientController');

// Matches with "/api/reward/"
router.route('/').get(client.findAll).post(client.create);

// Matches with "/api/reward/:id"
router.route('/:id').get(client.findById).put(client.update).delete(client.remove);

module.exports = router;
