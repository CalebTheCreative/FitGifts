import React from "react";
import { Container, Row, Table, Col, Button} from "react-bootstrap";
import Header from "../components/Header";

function BookNewSession () {
    
    // Need event listener for time slot buttons to popup confirmation to book session
    function handleSessionClick() {
        alert("You clicked a button");
    }

    return(
        <div>
            <Header />
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
                            <Button variant="outline-success" className="btn-lg btn-block" onClick={handleSessionClick}>
                                12:15 pm
                            </Button>
                            <Button variant="outline-success" className="btn-lg btn-block" onClick={handleSessionClick}>
                                1:45 pm
                            </Button>
                            <Button variant="outline-success" className="btn-lg btn-block" onClick={handleSessionClick}>
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
                            <Button variant="outline-success" className="btn-lg btn-block" onClick={handleSessionClick}>
                                12:15 pm
                            </Button>
                            <Button variant="outline-success" className="btn-lg btn-block" onClick={handleSessionClick}>
                                1:45 pm
                            </Button>
                            <Button variant="outline-success" className="btn-lg btn-block" onClick={handleSessionClick}>
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
                            <Button variant="outline-success" className="btn-lg btn-block" onClick={handleSessionClick}>
                                12:15 pm
                            </Button>
                            <Button variant="outline-success" className="btn-lg btn-block" onClick={handleSessionClick}>
                                1:45 pm
                            </Button>
                            <Button variant="outline-success" className="btn-lg btn-block" onClick={handleSessionClick}>
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