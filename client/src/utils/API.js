import axios from 'axios';

export default {
	/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

	// =========================================================
	// Rewards Routes
	// =========================================================

	// findReward: function (rwdName) {
	// 	return axios.get('/api/user/find-reward', {
	// 		params: {
	// 			rwdName: rwdName.rwdName,
	// 		},
	// 	});
	// },

	getRewards: function () {
		return axios.get('/api/reward/');
	},

	// Gets the REWARD post with the given values

	getReward: function (id) {
		console.log('API getReward: ', id);
		return axios.get('/api/reward/', id);
	},

	// Deletes the post with the given id
	deleteReward: function (id) {
		return axios.delete('/api/reward/' + id);
	},

	// adds a post to the database
	createRewards: function (rewardData) {
		console.log('API createReward: ', rewardData);
		return axios.post('/api/reward', rewardData);
	},

	// =========================================================
	// Criteria Routes
	// =========================================================

	getCritList: function () {
		console.log('API getCriterias list: ');
		return axios.get('/api/criteria/');
	},

	// Gets the CRITERIA post with the given values

	getCrit: function (id) {
		console.log('API getCriteria: ', id);
		return axios.get('/api/criteria/', id);
	},

	// Deletes the post with the given id
	deleteCrit: function (id) {
		console.log('API deleteCriteria: ', id);
		return axios.delete('/api/criteria/' + id);
	},

	// adds a post to the database
	createCrit: function (critData) {
		console.log('API createCriteria: ', critData);
		return axios.post('/api/criteria', critData);
	},

	// =========================================================
	// User Routes
	// =========================================================

	findUser: function (email) {
		return axios.get('/api/user/find', {
			email: email,
		});
	},

	getUsers: function () {
		console.log('API users: ');
		return axios.get('/api/user');
	},

	// // Gets the post with the given id
	getUser: function (email) {
		console.log('API getUser: ', email);
		return axios.get('/api/user/find', { email: email });
	},

	// // Deletes the post with the given id
	deleteUser: function (id) {
		console.log('API deleteUser: ', id);
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
