const db = require('../models');

// Defining methods for the userController
module.exports = {
	findOne: function (req, res) {
		db.User.find(req.query)
			.sort({ date: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.User.findById(req.params.id)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	create: function (req, res) {
		db.User.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	update: function (req, res) {
		db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.User.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},

	signup: (req, res) => {
		const { username, email, password, register_date } = req.body;
		db.User.create({
			username: username,
			email: email,
			password: password,
			register_date: register_date,
		}).then((result) => {
			console.log(result);
			return res.json(result);
		});
	},

	authenticate: (req, res) => {
		res.json({
			email: req.user.email,
			id: req.user.id,
		});
	},

	// Need to define rewards controller
};