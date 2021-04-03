const router = require('express').Router();
// const workoutRoutes = require("./workoutapi");
const userRoutes = require('./userapi');
const rewardsRoutes = require('./rewards')
// routes
// router.use('/workouts', workouts);
router.use('/user', userRoutes);
router.use('/rewards',rewardsRoutes)
module.exports = router;
