const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rewards Schema
const RewardSchema = new Schema({
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
});

module.exports = Reward = mongoose.model('Reward', RewardSchema);
