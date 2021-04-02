const router = require('express').Router();
// const workoutRoutes = require("./workoutapi");
const userRoutes = require('./userapi');

// routes
// router.use('/workouts', workouts);
router.use('/user', userRoutes);

module.exports = router;
