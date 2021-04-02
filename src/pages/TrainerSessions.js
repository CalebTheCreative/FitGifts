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
							<Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
								12:15 pm<span>&nbsp;with&nbsp;</span><span id="sessionName">Alex</span>
							</Button>
							<Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
								1:45 pm<span>&nbsp;with&nbsp;</span><span id="sessionName">Bobby</span>
							</Button>
							<Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"  href="/client-profile">
								3:15 pm<span>&nbsp;with&nbsp;</span><span id="sessionName">Daniel</span>
							</Button>
							<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <p>What would you like to do?</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                         <a href="/client-profile" button type="button" class="btn btn-primary">Clients Profile Page</a>
                                         <a href="tel:123-456-7890" button type="button" class="btn btn-primary">Call Client</a>
                                        <button type="button" class="btn btn-primary">Delete Session</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
							<Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
								8:15 am<span>&nbsp;with&nbsp;</span><span id="sessionName">Frank</span>
							</Button>
							<Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
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
							<Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
								9:15 am<span>&nbsp;with&nbsp;</span><span id="sessionName">Bobby</span>
							</Button>
							<Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"  href="/client-profile">
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
