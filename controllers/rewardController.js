const db = require('../models');

// Defining methods for the RewardsController
module.exports = {
	findAll: function (req, res) {
		db.Reward.find(req.query)
			.sort({ date: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Reward.findById(req.params.id)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	findOne: function (req, res) {
		console.log('REQUEST: ******************\n', req.query);
		db.Reward.findOne({ rwdName: req.query.rwdName })
			.then((dbModel) => res.json(dbModel.rwdName))
			.catch((err) => res.status(422) / json(err));
	},
	create: function (req, res) {
		db.Reward.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	update: function (req, res) {
		db.Reward.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Reward.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	newReward: (req, res) => {
		const { rwdName, rwdVal } = req.body;
		console.log('New Reward: ', req.body);
		db.Reward.create({
			rwdName: rwdName,
			rwdVal: rwdVal,
		})
			.then((result) => {
				console.log('reward: ', result);
				return res.json(result);
			})
			.catch((err) => res.status(422).json(err));
	},
};
