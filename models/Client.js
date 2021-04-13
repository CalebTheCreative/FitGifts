const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
	firstName: {
		type: String,
		required: 'Please enter your first name.',
	},
	lastName: {
		type: String,
		required: 'Please enter your last name.',
	},
	phoneNumber: {
		type: String,
		required: [true, 'Please enter a phone number.'],
	},
	email: {
		type: String,
		required: 'Please enter a valid email.',
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
