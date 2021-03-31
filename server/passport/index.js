const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const User = require('../database/models/user');

passport.serializeUser((user, done) => {
	console.log('*** serializeUser called, user: ');
	console.log(user); //whole user object
	console.log('---------');
	done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called');
	User.findOne({ _id: id }, 'username', (err, user) => {
		console.log('*** Deserialize user, user:');
		console.log(user);
		console.log('--------------');
		done(null, user);
	});
});

//  Use Strategies
passport.use(LocalStrategy);

module.exports = passport;
