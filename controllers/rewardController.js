const db = require('../models');

// Defining methods for the RewardsController
module.exports = {
	findAll: function (req, res) {
		db.Reward.find(req.query)
			.sort({ rwdVal: +1 })
			.then((dbReward) => res.json(dbReward))
			.catch((err) => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Reward.findById(req.params.id)
			.then((dbReward) => res.json(dbReward))
			.catch((err) => res.status(422).json(err));
	},
	findOne: function (req, res) {
		console.log('REQUEST: ******************\n', req.query);
		db.Reward.findOne({ rwdName: req.query.rwdName })
			.then((dbReward) => res.json(dbReward.rwdName))
			.catch((err) => res.status(422) / json(err));
	},
	create: function (req, res) {
		db.Reward.create(req.body)
			.then((dbReward) => {
				return db.User.findOneAndUpdate({ _id: req.params.id }, { rewards: dbReward._id }, { new: true });
			})
			.then((dbUser) => {
				res.json(dbUser);
			})
			.catch((err) => {
				res.json(err);
			});
	},
	update: function (req, res) {
		db.Reward.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbReward) => res.json(dbReward))
			.catch((err) => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Reward.findById({ _id: req.params.id })
			.then((dbReward) => dbReward.remove())
			.then((dbReward) => res.json(dbReward))
			.catch((err) => res.status(422).json(err));
	},
};
