import React from "react";
import { Container, Row, Table, Col, Button} from "react-bootstrap";

function BookNewSession () {
    
    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Route for 'Done' button to go to client home page
    //  - Function to handle booking sessions by clicking on individual session buttons
    //      - Should popup confirmation asking client if they'd like to book that session
    //  - Function to handle Day titles
    //      - Should be sorted by "Today", "Tomorrow", "Day 3", "Day 4", etc
    //  - Props for:
    //      - Trainer's name                    (Used in table)
    //      - Trainer's available sessions      (Used in displayed session buttons)

    return(
        <div>
            <Container className = "text-center justify-content-center">
                <Row className = "text-center justify-content-center">
                    <h1 style={{textAlign: "center"}}>Book New Session</h1>
                </Row>
                <Row flex className = "text-center justify-content-center">
                    <Col xs={4}>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td><b>Trainer:</b></td>
                                    <td>Xavier</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <br />

                <Row>
                    <Col>
                        <h3>Today</h3>
                    </Col>
                </Row>
                <Row className = "text-center justify-content-center">
                    <Col xs={8}>
                            <Button variant="outline-success" className="btn-lg btn-block">
                                12:15 pm
                            </Button>
                            <Button variant="outline-success" className="btn-lg btn-block">
                                1:45 pm
                            </Button>
                            <Button variant="outline-success" className="btn-lg btn-block">
                                5:15 pm
                            </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3>Tomorrow</h3>
                    </Col>
                </Row>
                <Row className = "text-center justify-content-center">
                    <Col xs={8}>
                            <Button variant="outline-success" className="btn-lg btn-block">
                                12:15 pm
                            </Button>
                            <Button variant="outline-success" className="btn-lg btn-block">
                                1:45 pm
                            </Button>
                            <Button variant="outline-success" className="btn-lg btn-block">
                                5:15 pm
                            </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3>Wednesday</h3>
                    </Col>
                </Row>
                <Row className = "text-center justify-content-center">
                    <Col xs={8}>
                            <Button variant="outline-success" className="btn-lg btn-block">
                                12:15 pm
                            </Button>
                            <Button variant="outline-success" className="btn-lg btn-block">
                                1:45 pm
                            </Button>
                            <Button variant="outline-success" className="btn-lg btn-block">
                                5:15 pm
                            </Button>
                    </Col>
                </Row>

                <Row className = "text-center justify-content-center mt-2">
                    <Col xs={8}>
                        <Button variant="success" className="btn-lg btn-block mt-0" href="/Home">Done</Button>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default BookNewSession;