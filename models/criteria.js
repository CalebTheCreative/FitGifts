const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CriteriaSchema = new Schema({
	critName: {
		type: String,
	},
	critVal: {
		type: Number,
	},
});

const Criteria = mongoose.model('Criteria', CriteriaSchema);
module.exports = Criteria;


