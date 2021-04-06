import React, { Component } from 'react';
import { Button, Col, Container, Row, ListGroup } from 'react-bootstrap';

class ClientList extends Component {

	// ===========================================================================
    // Needs
    // ===========================================================================
    //  - Map out list of clients as buttons in the list group

	// 	- Function to handle clicking a client's name
	// 		- Should route to that client's profile page

	state = {
		clients: [],
	};

	render(){
		return (
			
			<div>
				<Container className="text-center justify-content-center">
					<Row className = "text-center justify-content-center">
						<Col xs={6}>
							<h1>Clients</h1>
						</Col>
					</Row>

					<Row className="text-center justify-content-center">
						<Col xs={6}>
							<ListGroup>
								{/* Trainer's client list mapped out here */}
								{/* Remove 'disabled' from Button element */}
								{this.state.clients.map(client => (
									<ListGroup.Item>
										<Button variant="secondary" size="lg" block disabled href="/client-profile/:id">
											{this.state.clients.name}
										</Button>
									</ListGroup.Item>
								))}
								
								{/* Clickable Sample */}
								<ListGroup.Item>
									<Button variant="secondary" size="lg" block href="/client-profile">
										(Sample)
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>

					<Row className="text-center justify-content-center">
						<Col xs={6}>
							<Button striped bordered hover variant="dark" className="btn-block mt-2" href="/add-client">
								Add New Client
							</Button>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default ClientList;
