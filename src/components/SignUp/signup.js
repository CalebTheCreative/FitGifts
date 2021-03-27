import React, { Component } from 'react';
import axios from 'axios';

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
        axios.post()
	}

    render () {
        return (
            <div></div>
        );
    }
}

export default SignUp;
