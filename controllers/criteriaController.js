const db = require('../models');

// Defining methods for the CriteriaController
module.exports = {
	findAll: function (req, res) {
		db.Criteria
			.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Criteria
			.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findOne: function (req, res) {
		console.log('CRIT REQUEST: ******************\n', req.query);
		db.Criteria
			.findOne({ critName: req.query.critName })
			.then(dbModel => res.json(dbModel.critName))
			.catch(err => res.status(422) / json(err));
	},
	create: function (req, res) {
		const { critName, critVal } = req.body;
		console.log('New Criteria B4: ', req.body);
		db.Criteria
			.create({
				critName: critName,
				critVal: critVal
			})
			.then(result => {
				console.log('New Criteria after: ', result);
				return res.json(result);
			})
			.catch(err => res.status(422).json(err));
	},
	update: function (req, res) {
		db.Criteria
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Criteria
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
};
