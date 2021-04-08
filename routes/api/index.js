const router = require('express').Router();
const rewardRoutes = require('./rewardapi');
const userRoutes = require('./userapi');
const critRoutes = require('./criteriaapi');

// routes
router.use('./criteria', critRoutes);
router.use('/rewards', rewardRoutes);
router.use('/user', userRoutes);

module.exports = router;
