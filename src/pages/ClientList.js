import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Header from '../components/Header';

function ClientList() {
	return (
		<div>
			<div id="client-list">
				<Container>
					<Header />
					<Row>
						<Col>
							<Table striped bordered hover variant="dark">
								<tr>
									<td>
										<h1>Clients:</h1>
									</td>
								</tr>
								{/* Here is where we will map out the client list with a component */}
								<tr>
									<td>
										<h4>Client List</h4>
									</td>
								</tr>
							</Table>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button striped bordered hover variant="dark">
								<h6>Add New Client </h6>
							</Button>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default ClientList;
