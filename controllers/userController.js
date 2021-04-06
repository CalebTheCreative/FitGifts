const db = require('../models');

// Defining methods for the userController
module.exports = {
	findAll: function (req, res) {
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
		const { email, password, firstName, lastName } = req.body;
		db.User.create({
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
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
