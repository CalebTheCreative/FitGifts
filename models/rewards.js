const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rewards Schema
const RewardSchema = new Schema({
	Rewards: {
		rwdName: {
			type: String,
		},
		rwdVal: {
			type: Number,
		},
		isRedeemed: {
			type: Boolean,
			default: false,
		},
	},
	Criteria: {
		critName: {
			type: String,
		},
		critVal: {
			type: Number,
		},
	},
});

module.exports = Reward = mongoose.model('Reward', RewardSchema);
