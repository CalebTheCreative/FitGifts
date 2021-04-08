const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const criteriaSchema = new Schema({
	critName: {
		type: String,
	},
	critVal: {
		type: Number,
	},
});

module.exports = Criteria = mongoose.model('Criteria', criteriaSchema);
