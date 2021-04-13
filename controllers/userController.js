const db = require('../models');

// Defining methods for the userController
module.exports = {
	findAll: function (req, res) {
		db.User.find(req.query)
			.sort({ date: -1 })
			.then((dbUser) => res.json(dbUser))
			.catch((err) => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.User.findById(req.params.id)
			.then((dbUser) => res.json(dbUser))
			.catch((err) => res.status(422).json(err));
	},
	findOne: function (req, res) {
		console.log(req.query);
		db.User.findOne({ _id: req.params.id })
			.populate('rewards')
			.then((dbUser) => {
				res.json(dbUser);
			})
			.catch((err) => {
				res.json(err);
			});
	},
	create: function (req, res) {
		db.User.create(req.body)
			.then((dbUser) => res.json(dbUser))
			.catch((err) => res.status(422).json(err));
	},
	update: function (req, res) {
		db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbUser) => res.json(dbUser))
			.catch((err) => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.User.findById({ _id: req.params.id })
			.then((dbUser) => dbUser.remove())
			.then((dbUser) => res.json(dbUser))
			.catch((err) => res.status(422).json(err));
	},

	signup: (req, res) => {
		const { email, password, firstName, lastName, phoneNumber } = req.body;
		console.log('signup', req.body);
		db.User.create({
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
			phoneNumber: phoneNumber
			// isTrainer: isTrainer,
		}).then((result) => {
			console.log('signup', result);
			return res.json(result);
		});
	},

	login: (req, res) => {
		console.log('Login res:');
		console.log(req);
		res.json({
			// id: req.user._id,
			email: req.user.email,
			// isTrainer: req.user.isTrainer,
			firstName: req.user.firstName,
			lastName: req.user.lastName,
			phoneNumber: req.user.phoneNumber,
			// rewardPts: req.user.rewardPts,
			rewards: req.user.rewards,
		});
	},

	logout: (req, res) => {
		req.logout();
	},
};
