const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

//User Schema
const UserSchema = new Schema({
	// _id: {
	// 	type: Schema.Types.ObjectId,
	// },
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
		// validate: {
		// 	validator: function (v) {
		// 		return /\d{3}-\d{3}-\d{4}/.test(v);
		// 	},
		// 	message: (props) => `${props.value} is not a valid phone number!`,
		// },
		required: [true, 'Please enter a phone number.'],
	},
	email: {
		type: String,
		required: 'Please enter a valid email.',
		// validate: {
		// 	validator: function (v) {
		// 		const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		// 		return emailRegex.test(v.text);
		// 	},
		// },
		unique: true,
	},
	password: {
		type: String,
		required: 'Please enter a secure password.',
		// validate: {
		// 	min: [8, 'Password must be at least 8 characters.'],
		// },
	},
	isTrainer: {
		type: Boolean,
		default: false,
	},
	rewardsPts: {
		type: Number,
		default: 0,
	},
	rewards: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Reward',
		},
	],
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

UserSchema.methods.validPassword = function (password, cb) {
	bcrypt.compareSync(password, this.password, function (err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

module.exports = User = mongoose.model('User', UserSchema);
