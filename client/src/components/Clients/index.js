import React, { Component } from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import "./style.css";

class Clients extends Component {
	state = {
		clients: [
			{
				name: "Caleb",
				phone: "2108675309"
			},
			{
				name: "Xavier",
				phone: "2101111111"
			},			{
				name: "Luis",
				phone: "2102222222"
			},			{
				name: "Alex",
				phone: "2103333333"
			},			{
				name: "Max",
				phone: "2108675309"
			}
		]
	}

	render() {
		return (
			<div>
				<Container className="text-center justify-content-center client-block">

					<Container className="text-center justify-content-center clientCont px-4 py-4">
						<Row className="text-center justify-content-center">
							<Col xs={6}>
								<h1>Clients</h1>
							</Col>
						</Row>

						<Row className="text-center justify-content-center">
							<Col xs={6}>
								<ListGroup>
									{/* Trainer's client list mapped out here */}
									{/* Remove 'disabled' from Button element */}
									{/* {this.state.clients.map(({name}) => (
										<ListGroup.Item>
											<Button variant="secondary" size="lg" block href="/client-profile/:id">
												{name}
											</Button>
										</ListGroup.Item>
									))} */}
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
				</Container>
			</div>
		)
	}

}

export default Clients;