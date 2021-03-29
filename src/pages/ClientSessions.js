import React from "react";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
import Header from "../components/Header";

function ClientSessions () {
    
    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Routes for 'Book New Session' button to 'BookNewSession' pg
    //  - Function to handle grabbing session details and appending to proper list
    //      - Use js-booking-calendar
    //  - Props for:
    //      - Trainer's name                    (Used in table)
    //      - Client's rewards points           (Used in table)
    //      - Client's sessions                 (Used in table)
    
    return(
        <div>
            <Header />
            <Container className = "text-center justify-content-center">
                <Row className = "text-center justify-content-center">
                    <h1 style={{textAlign: "center"}}>Sessions</h1>
                </Row>
                <Row flex className = "text-center justify-content-center">
                    <Col xs={6}>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td><b>Trainer:</b></td>
                                    <td>Xavier</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button variant="success" className="btn-lg btn-block mt-0" href="/BookNewSession">Book a new session</Button>
                    </Col>
                </Row>

                <br />

                <Row>
                    <Col>
                        <h3>Last Week</h3>
                    </Col>
                </Row>
                <Row className = "text-center justify-content-center">
                    <Col xs={6}>
                        <Table bordered striped hover>
                            <tbody>
                                <tr>
                                    <td xs={2}>Mon</td>
                                    <td xs={4}>12:15 pm</td>
                                </tr>
                                <tr>
                                    <td xs={2}>Wed</td>
                                    <td xs={4}>1:45 pm</td>
                                </tr>
                                <tr>
                                    <td xs={2}>Fri</td>
                                    <td xs={4}>5:15 pm</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3>This Week</h3>
                    </Col>
                </Row>
                <Row className = "text-center justify-content-center">
                    <Col xs={6}>
                        <Table bordered striped hover>
                            <tbody>
                                <tr>
                                    <td xs={2}>Mon</td>
                                    <td xs={4}>12:15 pm</td>
                                </tr>
                                <tr>
                                    <td xs={2}>Wed</td>
                                    <td xs={4}>1:45 pm</td>
                                </tr>
                                <tr>
                                    <td xs={2}>Fri</td>
                                    <td xs={4}>5:15 pm</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3>Next Week</h3>
                    </Col>
                </Row>
                <Row className = "text-center justify-content-center">
                    <Col xs={6}>
                        <Table bordered striped hover>
                            <tbody>
                                <tr>
                                    <td xs={2}>Mon</td>
                                    <td xs={4}>12:15 pm</td>
                                </tr>
                                <tr>
                                    <td xs={2}>Wed</td>
                                    <td xs={4}>1:45 pm</td>
                                </tr>
                                <tr>
                                    <td xs={2}>Fri</td>
                                    <td xs={4}>5:15 pm</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default ClientSessions;