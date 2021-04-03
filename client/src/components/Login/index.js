import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import API from '../../utils/API';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleLogin(e) {
		e.preventDefault();
		console.log('login-up-form, email: ');
		console.log('email is ' + email);
		console.log('password is ' + password);

		API.login(email, password)
			.then((response) => {
				if (response.status === 200) {
					console.log(response.data);
					// if (!isTrainer) {
					// 	window.location.href = '/home-client';
					// } else {
					// 	window.location.href = '/home-trainer';
					// }
				}
			})
			.catch((e) => {
				console.log('Error: ', e);
			});
	}

	return (
		<div>
			<Container className="text-center justify-content-center">
				<Row className="text-center justify-content-center">
					<h1 style={{ textAlign: 'center' }}>FITGIFTS</h1>
				</Row>
				<br />
				<Row className="text-center justify-content-center">
					<h3>Log In</h3>
				</Row>

				<Row className="text-center justify-content-center">
					<Col xs={6}>
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="Email"
									name="email"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
									name="password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Form.Group>
							<Button variant="secondary" size="lg" block type="submit" onSubmit={handleLogin}>
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
				<br />

				<Row className="text-center justify-content-center">
					<p>Don't have an account? </p>
					<span>
						<a href="/signup">&nbsp;Sign up here</a>
					</span>
				</Row>
			</Container>
		</div>
	);
}

export default Login;
