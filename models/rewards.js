const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rewards Schema
const RewardSchema = new Schema({
	Rewards: {
		RwdName: {
			type: String,
		},
		RwdVal: {
			type: Number,
		},
		isRedeemed: {
			type: Boolean,
			default: false,
		},
	},
	Criteria: {
		CritName: {
			type: String,
		},
		CritVal: {
			type: Number,
		},
	},
});
module.exports = Rewards = mongoose.model('Rewards', RewardSchema);