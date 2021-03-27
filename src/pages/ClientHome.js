import React from "react";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
import Header from "../components/Header";

function ClientHome () {
    return(
        <div>
            <Header />
            <Container className = "text-center justify-content-center">
                <Row className = "text-center justify-content-center">
                    <h1 style={{textAlign: "center"}}>Welcome Daniel</h1>
                </Row>
                <Row flex className = "text-center justify-content-center">
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td>Trainer:</td>
                                <td>Xavier</td>
                            </tr>
                            <tr>
                                <td>Total Rewards Points</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Sessions this week</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>

                <Row flex className = "text-center justify-content-center">
                    <h2 className="text-center">Progress to Next Reward:</h2>
                </Row>
                
                <Row className = "text-center justify-content-center">
                    <Col xs={8}>
                        <Container className="border">
                            <Col xs={6}>
                                <Container className="bg-success mx-1 my-2">_</Container>
                            </Col>
                            <Col></Col>
                        </Container>
                    </Col>
                    <Col xs={4}>
                        <h4>50%</h4>
                    </Col>
                </Row>
                
                <Row className = "text-center justify-content-center mt-2">
                    <Container className="text-center justify-content-center">
                        <Col md={{ span: 6, offset: 3 }} className="text-center justify-content-center">
                            <Button className="my-0 btn-block btn-lg" variant="secondary" href="/ClientRewards">Rewards</Button>
                            <Button className="my-0 btn-block btn-lg" variant="secondary" href="/ClientSessions">Sessions</Button>
                            <Button className="my-0 btn-block btn-lg" variant="secondary">Contact Trainer</Button>
                            <Button className="my-0 btn-block btn-lg" variant="secondary">Logout</Button>
                        </Col>
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default ClientHome;