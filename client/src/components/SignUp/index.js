import React, { useState } from 'react';
import axios from 'axios';
import API from '../../utils/API';
import { Col, Image, Container, Form, Row, Button } from 'react-bootstrap';
import './style.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

function SignUp() {
	const [email, setEmail] = useState([]);
	const [password, setPassword] = useState([]);
	const [firstName, setFirstName] = useState([]);
	const [lastName, setLastName] = useState([]);
	const [phoneNumber, setPhoneNumber] = useState([]);
	const [isTrainer, setIsTrainer] = useState();

	function handleSubmit(e) {
		e.preventDefault();
		console.log('signup-up-form, email: ');
		console.log('email is ' + email);
		console.log('Name: ' + firstName + ' ' + lastName);
		console.log('Phone Number: ' + phoneNumber);
		console.log('Trainer ' + isTrainer);

		API.signup({
			email: email,
			firstName: firstName,
			lastName: lastName,
			password: password,
			phoneNumber: phoneNumber,
			isTrainer: isTrainer,
		})
			.then((response) => {
				console.log(response);
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
			<Image src="/images/background/lift-1.jpg" className="loginBG" />
			<Container className="text-center justify-content-center cred-text-block">
				<Container className="credCont">
					<Row className="text-center justify-content-center">
						<Image src="/images/logos/fg-logo-scd-w.png" id="credLogo" />
					</Row>
					<br />

					<Row className="text-center justify-content-center">
						<Col xs={8} className="text-center justify-content-center">
							<h6>Account type:&nbsp;</h6>
							<span>

								<BootstrapSwitchButton
									checked={false}
									onlabel="Trainer"
									onstyle="outline-primary"
									offlabel="Client"
									offstyle="outline-secondary"
									onChange={(checked) => {
										setIsTrainer(checked);
									}}
								/>
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
										<Form.Control
											type="input"
											placeholder="First Name"
											name="firstName"
											onChange={(e) => setFirstName(e.target.value)}
											className="bg-transparent text-white form-rounded"
										/>
									</Col>
								</Form.Group>

								<Form.Group
									as={Row}
									controlId="formHorizontalLast"
									className="text-center justify-content-center"
								>
									<Col xs={12}>
										<Form.Control
											type="input"
											placeholder="Last Name"
											name="lastName"
											onChange={(e) => setLastName(e.target.value)}
											className="bg-transparent text-white form-rounded"
										/>
									</Col>
								</Form.Group>

								<Form.Group
									as={Row}
									controlId="formHorizontalEmail"
									className="text-center justify-content-center"
								>
									<Col xs={12}>
										<Form.Control
											type="email"
											placeholder="Email"
											name="email"
											onChange={(e) => setEmail(e.target.value)}
											className="bg-transparent text-white form-rounded"
										/>
									</Col>
								</Form.Group>

								<Form.Group
									as={Row}
									controlId="formHorizontalPhone"
									className="text-center justify-content-center"
								>
									<Col xs={12}>
										<Form.Control
											type="tel"
											placeholder="Phone Number"
											name="phoneNumber"
											onChange={(e) => setPhoneNumber(e.target.value)}
											className="bg-transparent text-white form-rounded"
										/>
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
											className="bg-transparent text-white form-rounded"
										/>
									</Col>
								</Form.Group>

								<Form.Group as={Row} className="text-center justify-content-center">
									<Col xs={12}>
										<Button
											type="submit"
											variant="danger"
											className="form-rounded"
											onClick={handleSubmit}
											block
											href="/Login"
										>
											<b>Sign Up</b>
										</Button>
									</Col>
								</Form.Group>
							</Form>
						</Col>
					</Row>

					<Row className="text-center justify-content-center">
						<p>Already have an account? </p>
						<span>
							<a href="/login" className="text-white">
								&nbsp;<b>Log in here</b>
							</a>
						</span>
					</Row>
				</Container>
			</Container>
		</div>
	);
}
export default SignUp;
