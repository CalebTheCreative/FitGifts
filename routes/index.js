const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes
router.use('/api', apiRoutes);
router.get("/", (req, res) => res.redirect('/login'));
router.get("*", (req, res) => res.redirect('/'));

module.exports = router;