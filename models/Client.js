const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
	clientFirstName: {
		type: String,
	},
	clientLastName: {
		type: String,
	},
	clientPhone: {
		type: String,
	},
	clientEmail: {
		type: String,
	},
	rwdPts: {
		type: Number,
		default: 0,
	},
	rwdEligible: [
		{
			eRwdName: {
				type: String,
			},
			eRwdVal: {
				type: Number,
			},
		},
	],
});

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;
