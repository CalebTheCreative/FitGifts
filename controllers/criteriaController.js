const db = require('../models');

// Defining methods for the CriteriaController
module.exports = {
	findAll: function (req, res) {
		db.Criteria
			.find(req.query)
			.sort({ critVal: +1 })
			.then(dbCriteria => res.json(dbCriteria))
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Criteria
			.findById(req.params.id)
			.then(dbCriteria => res.json(dbCriteria))
			.catch(err => res.status(422).json(err));
	},
	findOne: function (req, res) {
		console.log('CRIT REQUEST: ******************\n', req.query);
		db.Criteria
			.findOne({ critName: req.query.critName })
			.then(dbCriteria => res.json(dbCriteria.critName))
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
			.then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { criteria: _id } }, { new: true })
			)
			.catch(err => res.status(422).json(err));
	},
	update: function (req, res) {
		db.Criteria
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbCriteria => res.json(dbCriteria))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Criteria
			.findById({ _id: req.params.id })
			.then(dbCriteria => dbCriteria.remove())
			.then(dbCriteria => res.json(dbCriteria))
			.catch(err => res.status(422).json(err));
	},
};
