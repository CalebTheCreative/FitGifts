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
                <Row flex className="text-center justify-content-center">
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
                        <Button block hover variant="outline-secondary">
                            12:15pm<span>with </span><span>12:15 pm</span>
                        </Button>
                        <Button block hover variant="outline-secondary">
                            1:45 pm <span>with </span><span>1:45 pm</span>
                        </Button>
                        <Button block hover variant="outline-secondary">
                            3:15 <span>with </span><span>12:15 pm</span>
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
                        <Button block hover variant="outline-secondary">
                            Monday <span>at </span><span>12:15 pm</span>
                        </Button>
                        <Button block hover variant="outline-secondary">
                            Wednesday <span>at </span><span>1:45 pm</span>
                        </Button>
                        <Button block hover variant="outline-secondary">
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
                        <Button block hover variant="outline-secondary">
                            Monday <span>at </span><span>12:15 pm</span>
                        </Button>
                        <Button block hover variant="outline-secondary">
                            Wednesday <span>at </span><span>1:45 pm</span>
                        </Button>
                        <Button block hover variant="outline-secondary">
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