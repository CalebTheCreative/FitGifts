const db = require('../models');

// Defining methods for the ClientsController
module.exports = {
	findAll: function (req, res) {
		db.Client.find(req.query)
			.sort({ rwdVal: +1 })
			.then((dbClient) => res.json(dbClient))
			.catch((err) => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Client.findById(req.params.id)
			.then((dbClient) => res.json(dbClient))
			.catch((err) => res.status(422).json(err));
	},
	findOne: function (req, res) {
		console.log('REQUEST: ******************\n', req.query);
		db.Client.findOne({ rwdName: req.query.rwdName })
			.then((dbClient) => res.json(dbClient.rwdName))
			.catch((err) => res.status(422) / json(err));
	},
	create: function (req, res) {
		db.Client.create(req.body)
			.then((dbClient) => {
				return db.User.findOneAndUpdate({ _id: req.params.id }, { clients: dbClient._id }, { new: true });
			})
			.then((dbUser) => {
				res.json(dbUser);
			})
			.catch((err) => {
				res.json(err);
			});
	},

	update: function (req, res) {
		db.Client.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbClient) => res.json(dbClient))
			.catch((err) => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Client.findById({ _id: req.params.id })
			.then((dbClient) => dbClient.remove())
			.then((dbClient) => res.json(dbClient))
			.catch((err) => res.status(422).json(err));
	},
};
