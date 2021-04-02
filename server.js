const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('./config/passport');
const app = express();
const PORT = process.env.PORT || 3001;
// Models required
const db = require('./models');

// Route required
const routes = require('./routes');

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('/build'));
}

// Passport
app.use(session({ secret: 'count-down-city', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// calls the deserializeUser

// Routes
app.use(routes);

// Connect to Mongo DB
mongoose
	.connect(process.env.MONGODB_URI || 'mongodb://localhost/fit-gifts', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log(err));

// Starting Server

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
