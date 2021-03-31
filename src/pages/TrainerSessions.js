import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

function TrainerSessions() {

	// ===========================================================================
	// Needs
	// ===========================================================================
	//  - Function to handle session info
	//      - Use js-booking-calendar for grabbing session information
	//      - When a session is clicked, popup menu displays giving option to:
	// 			- Go to Client's profile page (ClientProfile)
	//          - Call Client
	//          - Delete Session
	//          - Possibly add session information to local calendar app
	//      - Once option is made and handled, route trainer to 'ClientProfile' pg
	//  - Props for:
	//      - Client's names               	   		(Used in table)
	//      - All sessions trainer has for week		(Used in table)
	//      - Client's phone number             	(Used as option when selecting session)

	return (
		<div>
			<div id="trainer-sessions">
				<Container className="text-center justify-content-center">
					<br></br>
					{/* Will give the sessions of the current day and two days coming after */}
					{/* Checks to see what time they are scheduled */}
					<Row className="text-center justify-content-center">
						<Col xs={6}>
							<h3>Today</h3>
						</Col>
					</Row>
					<Row className="text-center justify-content-center">
						<Col xs={6}>
							<Button block hover variant="outline-secondary">
								12:15 pm<span>&nbsp;with&nbsp;</span><span id="sessionName">Alex</span>
							</Button>
							<Button block hover variant="outline-secondary">
								1:45 pm<span>&nbsp;with&nbsp;</span><span id="sessionName">Bobby</span>
							</Button>
							<Button block hover variant="outline-secondary" href="/client-profile">
								3:15 pm<span>&nbsp;with&nbsp;</span><span id="sessionName">Daniel</span>
							</Button>
						</Col>
					</Row>
					<br />

					<Row className="text-center justify-content-center">
						<Col xs={6}>
							<h3>Tomorrow</h3>
						</Col>
					</Row>
					<Row className="text-center justify-content-center">
						<Col xs={6}>
							<Button block hover variant="outline-secondary">
								8:15 am<span>&nbsp;with&nbsp;</span><span id="sessionName">Frank</span>
							</Button>
							<Button block hover variant="outline-secondary">
								11:45 pm<span>&nbsp;with&nbsp;</span><span id="sessionName">Luke</span>
							</Button>
						</Col>
					</Row>
					<br />

					<Row className="text-center justify-content-center">
						<Col xs={6}>
							<h3>Today</h3>
						</Col>
					</Row>
					<Row className="text-center justify-content-center">
						<Col xs={6}>
							<Button block hover variant="outline-secondary">
								9:15 am<span>&nbsp;with&nbsp;</span><span id="sessionName">Bobby</span>
							</Button>
							<Button block hover variant="outline-secondary" href="/client-profile">
								1:45 pm<span>&nbsp;with&nbsp;</span><span id="sessionName">Daniel</span>
							</Button>
						</Col>
					</Row>
					<br />
				</Container>
			</div>
		</div>
	);
}

export default TrainerSessions;
