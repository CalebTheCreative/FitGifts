import React, { useState } from 'react';
import axios from 'axios';
import API from '../../utils/API';
import { Col, Container, Form, Row, Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

function SignUp() {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	function handleSubmit(e) {
		e.preventDefault();
		console.log('signup-up-form, username: ');
		console.log('username is ' + username);
		console.log('password is ' + password);

		API.signup({
			username: username,
			password: password,
		})
			.then((response) => {
				if (response.data) {
					alert('Sign Up Successful');
					window.location.href = '/';
				}
			})
			.catch((error) => {
				console.log('Error: ', error);
			});
	}

	return (
		<div>
			<Container className="text-center justify-content-center">
				<Row className="text-center justify-content-center">
					<h1 style={{ textAlign: 'center' }}>FITGIFTS</h1>
				</Row>
				<Row className="text-center justify-content-center">
					<h3>SIGN UP</h3>
				</Row>
				<br />

				<Row className="text-center justify-content-center">
					<Col xs={8} className="text-center justify-content-center">
						<h6>Account type:&nbsp;</h6>
						<span>
							<ToggleButtonGroup type="radio" name="options" defaultValue={1} className="mb-2">
								<ToggleButton value={1}>Client</ToggleButton>
								<ToggleButton value={2}>Trainer</ToggleButton>
							</ToggleButtonGroup>
						</span>
					</Col>
				</Row>

				<Row className="text-center justify-content-center">
					<Col xs={6}>
						<Form>
							<Form.Group
								as={Row}
								controlId="formHorizontalFirst"
								className="text-center justify-content-center"
							>
								<Col xs={12}>
									<Form.Control type="input" placeholder="First Name" />
								</Col>
							</Form.Group>

							<Form.Group
								as={Row}
								controlId="formHorizontalLast"
								className="text-center justify-content-center"
							>
								<Col xs={12}>
									<Form.Control type="input" placeholder="Last Name" />
								</Col>
							</Form.Group>

							<Form.Group
								as={Row}
								controlId="formHorizontalEmail"
								className="text-center justify-content-center"
							>
								<Col xs={12}>
									<Form.Control
										type="username"
										placeholder="Email"
										name="username"
										onChange={(e) => setUsername(e.target.value)}
									/>
								</Col>
							</Form.Group>

							<Form.Group
								as={Row}
								controlId="formHorizontalPhone"
								className="text-center justify-content-center"
							>
								<Col xs={12}>
									<Form.Control type="tel" placeholder="Phone Number" />
								</Col>
							</Form.Group>

							<Form.Group
								as={Row}
								controlId="formHorizontalPassword"
								className="text-center justify-content-center"
							>
								<Col xs={12}>
									<Form.Control
										type="password"
										placeholder="Password"
										name="password"
										onChange={(e) => setPassword(e.target.value)}
									/>
								</Col>
							</Form.Group>

							<Form.Group as={Row} className="text-center justify-content-center">
								<Col xs={12}>
									<Button type="submit" onSubmit={handleSubmit} block href="/home-trainer">
										Sign Up
									</Button>
								</Col>
							</Form.Group>
						</Form>
					</Col>
				</Row>

				<Row className="text-center justify-content-center">
					<p>Already have an account? </p>
					<span>
						<a href="/login">&nbsp;Log in here</a>
					</span>
				</Row>
			</Container>
		</div>
	);
}
export default SignUp;
