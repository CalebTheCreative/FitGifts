import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
// import Login from '../../pages/Login';

class UserLogin extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			redirectTo: null,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	handleSubmit(event) {
		console.log('login handleSubmit, username: ');
		console.log(this.handleSubmit);
		event.preventDefault();
		axios
			.post('/user/login', {
				username: this.state.username,
				password: this.state.password,
			})
			.then((response) => {
				console.log('login response: ');
				console.log(response);
				if (response.status === 200) {
					// update App.js state
					this.props.updateUser({
						loggedIn: true,
						username: response.data.username,
					});
					// update the state to redirect to home
					this.setState({
						redirectTo: '/',
					});
				}
			})
			.catch((error) => {
				console.log('login error: ');
				console.log(error);
			});
	}

	render() {
		return <div>{/* <Login/> */}</div>;
	}
}

export default UserLogin;
