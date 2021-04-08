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
});

module.exports = Rewards = mongoose.model('Rewards', RewardSchema);
