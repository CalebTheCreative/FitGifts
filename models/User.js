const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

//User Schema
const UserSchema = new Schema({
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
		unique: true,
	},
	password: {
		type: String,
		required: 'Please enter a secure password.',
	},
	// isTrainer: {
	// 	type: Boolean,
	// 	default: false,
	// },
	// rewardsPts: {
	// 	type: Number,
	// 	default: 0,
	// },
	rewards: [
		{ 
			type: Schema.Types.ObjectId,
			ref: 'Reward'
		}
	],
	criteria: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Criteria'
		}
	],
	clients: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Client'
		}
	],
	// trainer: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'User'
	// }
});

UserSchema.pre('save', function (next) {
	const user = this;

	// only hash the password if it has been modified (or is new)
	if (this.isModified('password') || this.isNew) {
		// generate a salt
		bcrypt.genSalt(10, function (err, salt) {
			if (err) {
				return next(err);
			} else {
				// hash the password using our new salt
				bcrypt.hash(user.password, salt, function (err, hash) {
					if (err) {
						return next(err);
					}
					// override the cleartext password with the hashed one
					user.password = hash;
					next();
				});
			}
		});
	} else {
		return next();
	}
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
