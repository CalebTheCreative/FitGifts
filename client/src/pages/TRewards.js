import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function TRewards() {
    return(
        <Container className="text-center justify-content-center">
                <Row className="text-center justify-content-center">
                    <h1 style={{ textAlign: "center" }}>Rewards</h1>
                </Row>

                <br />


                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <Button block href="/add-reward" className="btn-lg"><b>Add</b></Button>
                    </Col>
                </Row>
                <br />
                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <Button variant="outline-secondary" className="btn-block btn-lg">10% off next session</Button>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <h4 className="text-left">10 points<span></span></h4><br />
                </Row>
                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <Button variant="outline-secondary" className="btn-block btn-lg">20% off next session</Button>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <h4 className="text-left">25 points<span></span></h4><br />
                </Row>
                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <Button variant="outline-secondary" className="btn-block btn-lg">50% off next session</Button>
                    </Col>
                </Row>
                <br />
                
                <Row className="text-center justify-content-center">
                    <Col xs={6} className="text-center justify-content-center bg-secondary text-white">

                        <Row className="text-center justify-content-center">
                            <h3 className="text-center">Criteria:</h3>
                        </Row>

                        <Row className="text-center justify-content-center">
                            <Col>
                                <p>1 pt</p>
                            </Col>
                            <Col>
                                <p className="text-left">Every completed session</p>
                            </Col>
                        </Row>

                        <Row className="text-center justify-content-center">
                            <Col>
                                <p>2 pts</p>
                            </Col>
                            <Col>
                                <p className="text-left">Each goal met</p>
                            </Col>
                        </Row>

                        <Row className="text-center justify-content-center">
                            <Col>
                                <p>3 pt</p>
                            </Col>
                            <Col>
                                <p className="text-left">Every month w/ 4 completed sessions</p>
                            </Col>
                        </Row >
                    </Col>
                </Row>
            </Container>
    )
}

export default TRewards;