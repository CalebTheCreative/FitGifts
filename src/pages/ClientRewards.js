import React from "react";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
import Header from "../components/Header";

function ClientRewards () {
    return(
        <div>
            <Header />
            <Container className = "text-center justify-content-center">
                <Row className = "text-center justify-content-center">
                    <h1 style={{textAlign: "center"}}>Rewards</h1>
                </Row>

                <Row flex className = "text-center justify-content-center">
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td>Rewards Points</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                <br />

                <Row flex className = "text-center justify-content-center">
                    <h2 className="text-center">Progress to Next Reward:</h2>
                </Row>
                
                <Row className = "text-center justify-content-center">
                    <Col xs={8}>
                        <Container className="border">
                            <Col xs={6}>
                                <Container className="bg-success mx-1 my-2 text-success">.</Container>
                            </Col>
                            <Col></Col>
                        </Container>
                    </Col>
                    <Col xs={4}>
                        <h4>50%</h4>
                    </Col>
                </Row>
                <br />
                
                <Row flex className = "justify-content-center">
                    <h4 className="text-left">5 points<span> (Achieved) </span></h4><br />
                </Row>
                <Row className = "text-center justify-content-center">
                    <Col xs={6}>
                        <Button variant="outline-secondary" className="btn-block btn-lg">10% off next session</Button>
                    </Col>
                </Row>

                <Row flex className = "justify-content-center">
                    <h4 className="text-left">10 points<span></span></h4><br />
                </Row>
                <Row className = "text-center justify-content-center">
                    <Col xs={6}>
                        <Button variant="outline-secondary" className="btn-block btn-lg">20% off next session</Button>
                    </Col>
                </Row>

                <Row flex className = "justify-content-center">
                    <h4 className="text-left">25 points<span></span></h4><br />
                </Row>
                <Row className = "text-center justify-content-center">
                    <Col xs={6}>
                        <Button variant="outline-secondary" className="btn-block btn-lg">50% off next session</Button>
                    </Col>
                </Row>
                <br />
                
                <Container className="text-center justify-content-center bg-secondary text-white">
                    <Row className="text-center justify-content-center">
                        <h3 className="text-center">Criteria:</h3>
                    </Row>

                    <Row className="text-center justify-content-center">
                        <Col xs={2} >
                            <h5>1 pt</h5>
                        </Col>
                        <Col xs={4}>
                            <h5 className="text-left">Every completed session</h5>
                        </Col>
                    </Row>

                    <Row className="text-center justify-content-center">
                        <Col xs={2}>
                            <h5>2 pts</h5>
                        </Col>
                        <Col xs={4}>
                            <h5 className="text-left">Each goal met</h5>
                        </Col>
                    </Row>

                    <Row className="text-center justify-content-center">
                        <Col xs={2}>
                            <h5>3 pt</h5>
                        </Col>
                        <Col xs={4}>
                            <h5 className="text-left">Every month w/ 4 completed sessions</h5>
                        </Col>
                    </Row >
                </Container>
                <br />
                <Row className="text-center justify-content-center">
                    <Col xs={4}>
                        <Button variant="outline-success" className="btn-lg btn-block">
                            Use Reward
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ClientRewards;