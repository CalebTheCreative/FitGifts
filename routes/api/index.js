const router = require('express').Router();
// const rewardRoutes = require("./rewardapi");
const userRoutes = require('./userapi');

// routes
// router.use('/rewards', rewardRoutes);
router.use('/user', userRoutes);

module.exports = router;
