const db = require('../models');

// Defining methods for the ClientsController
module.exports = {
	findAll: function (req, res) {
		db.Client
			.find(req.query)
			.sort({ _id: -1 })
			.then(dbClient => res.json(dbClient))
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Client
			.findById(req.params.id)
			.then(dbClient => res.json(dbClient))
			.catch(err => res.status(422).json(err));
	},
	findOne: function (req, res) {
		console.log('CLIENT REQUEST: ******************\n', req.query);
		db.Client
			.findOne({ clientEmail: req.query.clientEmail })
			.then(dbClient => res.json(dbClient.clientEmail))
			.catch(err => res.status(422) / json(err));
	},
	create: function (req, res) {
		const { clientFirstName, clientLastName, clientPhone, clientEmail } = req.body;
		console.log('New Client B4: ', req.body);
		db.Client
			.create({
				clientFirstName: clientFirstName,
				clientLastName: clientLastName,
				clientPhone: clientPhone,
				clientEmail: clientEmail
			})
			.then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { clients: _id } }, { new: true })
			)
			.catch(err => res.status(422).json(err));
	},

	update: function (req, res) {
		db.Client
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbClient => res.json(dbClient))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Client
			.findById({ _id: req.params.id })
			.then(dbClient => dbClient.remove())
			.then(dbClient => res.json(dbClient))
			.catch(err => res.status(422).json(err));
	},
};
