import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function TrainerHome () {

    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Function to display the amount of sessions a trainer has booked for today
    //      - If no sessions, change session text to display the no session text
	// 	- Function to handle removing the client
    //  - Props for:
    //      - Trainer's name                    (Used in welcome message)
    //      - Trainer's session's for today     (Used in table and progress bar)

    return(
        <div>
            <br />
            <br />
            <Container className = "text-center justify-content-center">
                <Row className = "text-center justify-content-center">
                    <h1 style={{textAlign: "center"}}>Welcome <span>Xavier</span></h1>
                </Row>
                <Row className = "text-center justify-content-center">
                    <h2 className="text-center">You have <b><span className="text-danger">4</span></b> sessions booked for today!</h2>
                </Row>
                <Row className = "text-center justify-content-center">
                    <h2 className="text-center d-none">You don't have any sessions booked for today</h2>
                </Row>
                
                <Row className = "text-center justify-content-center mt-2">
                    <Col xs={6} className="text-center justify-content-center">
                        <Button className="my-2 btn-block btn-lg" variant="secondary" href="/trainer-sessions">Sessions</Button>
                        <Button className="my-2 btn-block btn-lg" variant="secondary" href="/client-list">Clients</Button>
                        <Button className="my-2 btn-block btn-lg" variant="secondary" href="/trewards">Rewards</Button>
                        <Button className="my-2 btn-block btn-lg" variant="outline-secondary">Logout</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TrainerHome;