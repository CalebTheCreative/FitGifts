import React from 'react';
import { Container, Table, Col, Row, Button } from 'react-bootstrap';

function ClientProfile() {

	// ===========================================================================
    // Needs
    // ===========================================================================
    //  - Function to handle adding reward point to client's reward point total
	// 	- Function to handle removing the client
	// 	- Function to handle the rewards progress bar using react-progress-bar
	// 	- Routes for 'Sessions' => 'TClientSessions' pg & 'View Rewards' => 'TClientRewards' pg
    //  - Props for:
    //      - Client's name                     (Used in table)
    //      - Client's rewards points           (Used in table and progress bar)
    //      - Client's Rewards                  (Used for progress bar)
    //      - Client's phone number            (Used in 'Contact Client' button)
	
	return (
		<div>
			<Container className="text-center justify-content-center">
				<Row flex className="text-center justify-content-center">
					<Col xs={6}>
						<Table bordered>
							<tbody>
								<tr>
									<td className="bg-secondary text-white">Client:</td>
									<td><b>Daniel</b></td>
								</tr>
								<tr>
									<td className="bg-secondary text-white">Total Rewards Points</td>
									<td><b>5</b></td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>

				<Row flex className="text-center justify-content-center">
					<h2 className="text-center">Progress to Next Reward:</h2>
				</Row>

				<Row className="text-center justify-content-center">

					<Col xs={4}>
						<Container className="border">
							<Col xs={6}>
								<Container className="bg-success mx-0 my-2">_</Container>
							</Col>
							<Col></Col>
						</Container>
					</Col>
					<Col xs={2}>
						<h4>50%</h4>
					</Col>
				</Row>

				<Row className="text-center justify-content-center mt-2">
					<Container className="text-center justify-content-center">
						<Col md={{ span: 6, offset: 3 }} className="text-center justify-content-center">
							<Button className="my-1 btn-block btn-lg" variant="secondary">Add Reward Point</Button>
							<Button className="my-1 btn-block btn-lg" variant="secondary">Contact Client</Button>
							<Button className="my-1 btn-block btn-lg" variant="secondary" href="/t-client-rewards">View Rewards</Button>
							<Button className="my-1 btn-block btn-lg" variant="secondary" href="/t-client-sessions">Sessions</Button>
							<Button className="my-1 btn-block btn-lg" variant="danger">Remove Client</Button>
						</Col>
					</Container>
				</Row>

			</Container>
		</div>
	);
}

export default ClientProfile;
