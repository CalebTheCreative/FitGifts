import React, { Component } from 'react';
import axios from 'axios';
import Signup from '../../pages/Signup';

class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			// isTrainer: null,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ');
		console.log(this.username);
		event.preventDefault();
		// if (typeof isTrainer !== 'boolean') {
		// }
		axios
			.post('/user/', {
				username: this.state.username,
				password: this.state.password,
			})
			.then((response) => {
				console.log(response);
				if (!response.data.err) {
					console.log('successful signup');
					this.setState({
						//redirect to login page
						redirectTo: '/login',
					});
				} else {
					console.log('username already taken, please choose another name');
				}
			})
			.catch((error) => {
				console.log('signup error: ');
				console.log(error);
			});
	}

	render() {
		return <div>{/* <Signup /> */}</div>;
	}
}

export default SignUp;
