const router = require('express').Router();
// const rewardRoutes = require("./rewardapi");
const userRoutes = require('./userapi');

// routes
router.use('/reward', rewardRoutes);
router.use('/user', userRoutes);

module.exports = router;
