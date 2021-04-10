import React, { useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import API from '../../utils/API';
import './style.css';

function Login() {
	const [email, setEmail] = useState([]);
	const [password, setPassword] = useState([]);
	// const [isTrainer, setTrainer] = useState();

	function handleLogin(e) {
		e.preventDefault();
		console.log('login-form, email: ');
		console.log('email is ' + email);
		console.log('password is ' + password);

		API.login(email, password)
			.then((response) => {
				if (response.status === 200) {
					console.log('Login API', response.data);
					if (!response.isTrainer) {
						window.location.href = '/home-client';
					} else {
						window.location.href = '/home-trainer';
					}
				}
			})
			.catch((e) => {
				console.log('Error: ', e);
			});
	}

	return (
		<div>
			<Image src="/images/background/lift-1.jpg" className="loginBG" />
			<Container className="text-center justify-content-center cred-text-block">
				<Container className="credCont">
					<Row className="text-center justify-content-center">
						<Image src="/images/logos/fg-logo-scd-w.png" id="credLogo" />
					</Row>
					<br />

					<Row className="text-center justify-content-center">
						<Col xs={8}>
							<Form>
								<Form.Group as={Row} controlId="formBasicEmail">
									<Form.Label column sm="2">
										<i className="fas fa-user"></i>
									</Form.Label>
									<Col sm="10">
										<Form.Control
											type="email"
											placeholder="Email"
											name="email"
											onChange={(e) => setEmail(e.target.value)}
											className="bg-transparent text-white form-rounded"
										/>
									</Col>
								</Form.Group>

								<Form.Group as={Row} controlId="formBasicPassword">
									<Form.Label column sm="2">
										<i className="fas fa-lock"></i>
									</Form.Label>
									<Col sm="10">
										<Form.Control
											type="password"
											placeholder="Password"
											name="password"
											onChange={(e) => setPassword(e.target.value)}
											className="bg-transparent text-white form-rounded"
										/>
									</Col>
								</Form.Group>
								<Button
									variant="danger"
									block
									type="submit"
									className="form-rounded"
									onClick={handleLogin}
								>
									<b>Log In</b>
								</Button>
							</Form>
						</Col>
					</Row>
					<br />

					<Row className="text-center justify-content-center">
						<p>Don't have an account? </p>
						<span>
							<a href="/signup" className="text-white">
								&nbsp;<b>Sign up here</b>
							</a>
						</span>
					</Row>
				</Container>
			</Container>
		</div>
	);
}

export default Login;
