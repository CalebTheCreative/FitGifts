import React from 'react';
import { Button, Col, Container, Row, ListGroup } from 'react-bootstrap';
import Header from '../components/Header';

function ClientList() {

	// ===========================================================================
    // Needs
    // ===========================================================================
    //  - Map out list of clients as buttons in the list group
	// 	- Function to handle clicking a client's name
	// 		- Should route to that client's profile page
	// 	- Route to send trainer to 'AddClient' pg when they click 'Add New Client' button
    //  - Prop for:
    //      - Client's name             		(Used in list group buttons)


	return (
		<div>
			<Header />
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
                            <ListGroup.Item> {/* Sample */} <Button variant="secondary" size="lg" block disabled>Alex</Button></ListGroup.Item>
							<ListGroup.Item> {/* Sample */} <Button variant="secondary" size="lg" block disabled>Bobby</Button></ListGroup.Item>
							{/* Clickable Sample */}
							<ListGroup.Item> {/* Sample */} <Button variant="secondary" size="lg" block href="/ClientProfile">Daniel</Button></ListGroup.Item>
							<ListGroup.Item> {/* Sample */} <Button variant="secondary" size="lg" block disabled>Frank</Button></ListGroup.Item>
							<ListGroup.Item> {/* Sample */} <Button variant="secondary" size="lg" block disabled>Luke</Button></ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

				<Row className="text-center justify-content-center">
					<Col xs={6}>
						<Button striped bordered hover variant="dark" className="btn-block mt-2">
							<h6>Add New Client </h6>
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default ClientList;
