const router = require("express").Router();
const rewardsController = require("../../controllers/rewardsController");

// Matches with "/api/rewardsController"
router.route("/")
  .get(rewardsController.findAll)
  .post(rewardsController.create);

// Matches with "/api/rewardsControllers/:id"
router
  .route("/:id")
  .get(rewardsController.findById)
  .put(rewardsController.update)
  
module.exports = router;