import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import API from '../../utils/API';

function ClientList() {
	const [clients, setClients] = useState([]);
    const [clientFirstName, setClientFirstName] = useState([]);
    const [clientLastName, setClientLastName] = useState([]);
    const [clientPhone, setClientPhone] = useState([]);
    const [clientEmail, setClientEmail] = useState([]);
    // const [clientRwdEligible, setClientRwdEligible] = useState([]);
	
	// const [clientObject, setClientObject] = useState({});
	// const [isRedeemed, setIsRedeemed] = useState(false);

	// Load all clients and store them with setClients
	useEffect(() => {
		loadClients()
	}, [])

	function loadClients() {

		API.getClients()
			.then(res =>
				setClients(res.data)
			)
			.catch(err => console.log(err));
	};

	function handleDelete(id) {
		API.deleteClient(id)
			.then(res => 
				setClients(res.data)
			)
			.catch(err => console.log(err));
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
			API.createRewards({
				clientFirstName: clientFirstName,
				clientLastName: clientLastName,
				clientPhone: clientPhone,
				clientEmail: clientEmail
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
									<Col sm={4}>
										<div className="form-group">
											<input
												className="form-input"
												name="clientFirstName"
												placeholder="First Name"
												onChange={(e) => setClientFirstName(e.target.value)}
											/>
										</div>
									</Col>
									<Col sm={4}>
										<div className="form-group">
											<input
												className="form-input"
												name="clientLastNane"
												placeholder="Last Name"
												onChange={(e) => setClientLastName(e.target.value)}
											/>
										</div>
									</Col>
									<Col sm={4}>
										<div className="form-group">
											<input
												className="form-input"
												name="clientPhone"
												placeholder="Phone Number"
												onChange={(e) => setClientPhone(e.target.value)}
											/>
										</div>
									</Col>
									<Col sm={4}>
										<div className="form-group">
											<input
												className="form-input"
												name="clientEmail"
												placeholder="Phone Number"
												onChange={(e) => setClientEmail(e.target.value)}
											/>
										</div>
									</Col>
									<Col sm={4}>
										<button
											disabled={!(clientFirstName && clientLastName && clientPhone && clientEmail)}
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
								<ListGroupItem id={client._id}>
									{/* <Link to={'/client/' + client._id}>
										<b>
											First: {client.clientFirstName} Last: {client.clientLastName}
										</b>
									</Link> */}
										<Button onClick={handleDelete}>
											f:{client.clientFirstName}
											l:{client.clientLastName}
											p:{client.clientPhone}
											e:{client.clientEmail}
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
		</div >
	);
}

export default ClientList;
