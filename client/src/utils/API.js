import axios from 'axios';

export default {
	//REWARD ROUTES

	findReward: function (rwdName) {
		return axios.get('/api/reward/find', {
			params: {
				rwdName: rwdName.rwdName,
			},
		});
	},

	//     USER ROUTES

	/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

	findUser: function (email) {
		return axios.get('/api/user/find', {
			params: {
				email: email.email,
			},
		});
	},

	getUsers: function () {
		return axios.get('/api/user');
	},
	// Gets the post with the given id
	getUser: function (id) {
		return axios.get('/api/user/' + id);
	},
	// Deletes the post with the given id
	deleteUser: function (id) {
		return axios.delete('/api/user/' + id);
	},
	// Log the user in
	login: function (email, password) {
		console.log('API login ', email, password);
		return axios.post('/api/user/login', { email: email, password: password });
	},
	// New user registration
	signup: function (userData) {
		console.log('API signup', userData);
		return axios.post('/api/user/signup', userData);
	},

	// Logout user
	logout: function () {
		return axios.post('/api/user/logout');
	},
};
