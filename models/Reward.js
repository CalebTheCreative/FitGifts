const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rewards Schema
const RewardSchema = new Schema({
	rwdName: {
		type: String,
		required: true,
	},
	rwdVal: {
		type: Number,
		required: true,
	},
	isRedeemed: {
		type: Boolean,
		default: false,
	}
});

const Reward = mongoose.model('Reward', RewardSchema);
module.exports = Reward;
