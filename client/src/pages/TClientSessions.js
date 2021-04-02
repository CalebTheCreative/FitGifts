import React from "react";
import { Container, Row, Table, Col, Button } from "react-bootstrap";

function TClientSessions() {

    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Function to handle session info
    //      - Use js-booking-calendar for grabbing session information
    //      - When a session is clicked, popup menu displays giving option to:
    //          - Call Client
    //          - Delete Session
    //          - Possibly add session information to local calendar app
    //      - Once option is made and handled, route trainer to 'ClientProfile' pg
    //  - Props for:
    //      - Client's name                     (Used in table)
    //      - Client's sessions w/ trainer      (Used in table)
    //      - Client's phone number             (Used as option when selecting session)

    return (
        <div>
            <Container className="text-center justify-content-center">
                <Row className="text-center justify-content-center">
                    <h1 style={{ textAlign: "center" }}>Sessions</h1>
                </Row>
                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <Table bordered striped hover>
                            <tbody>
                                <tr>
                                    <td>Client:</td>
                                    <td>Daniel</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <h3>Today</h3>
                    </Col>
                </Row>
                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            12:15 pm <span>with </span><span>12:15 pm</span>
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
                                         <a href="mailto: sample@mail.com" button type="button" class="btn btn-primary">Email Client</a>
                                         <a href="tel:123-456-7890" button type="button" class="btn btn-primary">Call Client</a>
                                        <button type="button" class="btn btn-primary">Delete Session</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            1:45 pm <span>with </span><span>1:45 pm</span>
                        </Button>
                        <Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            3:15 pm <span>with </span><span>12:15 pm</span>
                        </Button>
                    </Col>
                </Row>
                <br />

                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <h3>This Week</h3>
                    </Col>
                </Row>
                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            Monday <span>at </span><span>12:15 pm</span>
                        </Button>
                        <Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            Wednesday <span>at </span><span>1:45 pm</span>
                        </Button>
                        <Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            Friday <span>at </span><span>12:15 pm</span>
                        </Button>
                    </Col>
                </Row>
                <br />

                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <h3>Next Week</h3>
                    </Col>
                </Row>
                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            Monday <span>at </span><span>12:15 pm</span>
                        </Button>
                        <Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            Wednesday <span>at </span><span>1:45 pm</span>
                        </Button>
                        <Button block hover variant="outline-secondary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            Friday <span>at </span><span>12:15 pm</span>
                        </Button>
                    </Col>
                </Row>
                <br />

                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <Button block hover size="lg" variant="success" href="/home-trainer">Done</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TClientSessions;