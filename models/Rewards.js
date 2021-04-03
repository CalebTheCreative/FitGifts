const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rewardsSchema = new Schema({
    RwdName: { type: String, required: true },
    RwdValue: { type: String, required: true },
    isRedeemed:{ type: Boolean, default: false }
  });
  
  const Rewards = mongoose.model("Rewards", rewardsSchema);
  
  module.exports = Rewards;
  