const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('./config/passport');

const app = express();
const PORT = process.env.PORT || 3001;

// Route requires
const routes = require('./routes');
// Database
const db = require('./models');

// Middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/public'));
}

// Sessions
app.use(
	session({
		secret: 'count-down-city', //pick a random string to make the hash that is generated secure
		resave: true,
		saveUninitialized: true, //required
	})
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Routes
app.use(routes);

// Connect to the Mongo DB
mongoose
	.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitgifts', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log(err));
// Starting Server
app.listen(PORT, () => {
	console.log(`🌎  ==> API Server now listening on PORT: ${PORT}`);
});
