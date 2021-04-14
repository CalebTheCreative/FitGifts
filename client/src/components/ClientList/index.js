import React, { useEffect, useReducer, useState } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API from '../../utils/API';

function ClientList() {
	const [clients, setClients] = useState([]);
	const [clientFirstName, setClientFirstName] = useState([]);
	const [clientLastName, setClientLastName] = useState([]);
	const [clientPhone, setClientPhone] = useState([]);
	const [clientEmail, setClientEmail] = useState([]);
	const [rwdPts, setRwdPts] = useState('');
	// const [clientRwdEligible, setClientRwdEligible] = useState([]);
	// const [clientObject, setClientObject] = useState({});
	// const [isRedeemed, setIsRedeemed] = useState(false);

	const [count, dispatch] = useReducer((state, action) => {
		if (action === 'add') {
			return state + 1;
		} else if (action === 'subtract') {
			return state - 1;
		} else {
			return state;
		}
	}, 0);

	
	// Load all clients and store them with setClients
	useEffect(() => {
		loadClients();
	}, []);

	function loadClients() {
		API.getClients()
			.then((res) => setClients(res.data))
			.catch((err) => console.log(err));
	}

	function handlePoints(e) {
		e.preventDefault();
		API.updatePoints({
			rwdPts: rwdPts,
		})
			.then((res) => {
				setRwdPts(res.data);
			})
			.catch((err) => console.log(err));
	}

	function handleDelete(id) {
		API.deleteClient(id)
			.then((res) => setClients(res.data))
			.catch((err) => console.log(err));
	}
	// function handleInputChange(e) {
	// 	const { clientFirstName, clientLastName, clientPhone, clientEmail, value } = e.target;

	// 	setClientObject({ ...clientObject, [clientFirstName]: value, [clientLastName]: value, [clientPhone]: value, [clientEmail]:  });
	// }

	function handleSubmit(e) {
		e.preventDefault();
		console.log('Client Desc. : ');
		console.log('First Name: ', clientFirstName);
		console.log('Last Name: ', clientLastName);
		console.log('Phone: ', clientPhone);
		console.log('Email: ', clientEmail);

		if (clientFirstName && clientLastName && clientPhone && clientEmail) {
			API.createClient({
				clientFirstName: clientFirstName,
				clientLastName: clientLastName,
				clientPhone: clientPhone,
				clientEmail: clientEmail,
			})
				.then((res) => alert('Client Creation Successful!'), loadClients())
				.catch((err) => console.log(err));
		}
	}

	return (
		<div>
			<Row className="mt-4">
				<Container id="c-home-banner1" className="p-4 bg-danger">
					<Row className="justify-contents-center align-items-center text-center">
						<Col id="rwdTitleBox" className="align-items-center justify-content-center">
							<Row className="align-items-center text-center">
								<Col className="align-items-center text-white">
									<h1>Client List</h1>
								</Col>
							</Row>
						</Col>
					</Row>
					<hr className="bg-light" />
					<Row className="align-items-center justify-content-center">
						<Col sm={12} className="justify-content-center">
							<form>
								<Row className="justify-content-center">
									<Col sm={3}>
										<div className="form-group">
											<input
												className="form-input"
												name="clientFirstName"
												placeholder="First Name"
												onChange={(e) => setClientFirstName(e.target.value)}
											/>
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<input
												className="form-input"
												name="clientLastName"
												placeholder="Last Name"
												onChange={(e) => setClientLastName(e.target.value)}
											/>
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<input
												className="form-input"
												name="clientPhone"
												placeholder="Phone Number"
												onChange={(e) => setClientPhone(e.target.value)}
											/>
										</div>
									</Col>
									<Col sm={3}>
										<div className="form-group">
											<input
												className="form-input"
												name="clientEmail"
												placeholder="Email"
												onChange={(e) => setClientEmail(e.target.value)}
											/>
										</div>
									</Col>
									<Col sm={4}>
										<button
											disabled={
												!(clientFirstName && clientLastName && clientPhone && clientEmail)
											}
											className="btn btn-primary"
											onClick={handleSubmit}
											type="submit"
										>
											Submit
										</button>
									</Col>
								</Row>
							</form>
						</Col>
					</Row>
					<hr className="bg-light" />

					{clients.length ? (
						<ListGroup>
							{clients.map((client) => (
								<ListGroupItem key={client._id}>
										<h1>{client.clientFirstName} {client.clientLastName}</h1>
										<h3>Rewards Points: {client.rwdPts}</h3>
										<b>Phone: </b>{client.clientPhone}
										<br />
										<b>email:</b>{client.clientEmail}
										<br />
									<Button
										className="mx-1"
										onChange={(e) => handlePoints(e.target.value)}
										onClick={() => dispatch('add')}
									>
										{' '}
										Add Point{' '}
									</Button>
									<Button
										className="mx-1"
										onChange={(e) => handlePoints(e.target.value)}
										onClick={() => dispatch('subtract')}
									>
										{' '}
										Subtract Point
									</Button>
								</ListGroupItem>
							))}
						</ListGroup>
					) : (
						<h3>No Rewards to display</h3>
					)}
				</Container>
			</Row>
			<br />
		</div>
	);
}

export default ClientList;