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
		event.preventDefault();
	}

	render() {
		return (
            // <Login/>
        )
	}
}

export default UserLogin;
