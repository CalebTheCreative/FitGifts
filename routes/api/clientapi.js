const router = require('express').Router();
const client = require('../../controllers/clientController');

// Matches with "/api/client/"
router.route('/').get(client.findAll).post(client.create);

// Matches with "/api/client/:id"
router.route('/:id').get(client.findById).put(client.update).delete(client.remove);

router.route('/').get(client.update)

module.exports = router;
