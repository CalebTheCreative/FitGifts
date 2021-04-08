const db = require('../models');

// Defining methods for the RewardsController
module.exports = {
	findAll: function (req, res) {
		db.Rewards.find(req.query)
			.sort({ date: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Rewards.findById(req.params.id)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	findOne: function (req, res) {
		console.log('REQUEST: ******************\n', req.query);
		db.Rewards.findOne({ rwdName: req.query.rwdName })
			.then((dbModel) => res.json(dbModel.rwdName))
			.catch((err) => res.status(422) / json(err));
	},
	create: function (req, res) {
		db.Rewards.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	update: function (req, res) {
		db.Rewards.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Rewards.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
};
