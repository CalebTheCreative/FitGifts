import React, { Component } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./style.css";

class THome extends Component {
    state={
        name: "Caleb",
        actNum: 12345,
        numSessions: 3
    }

    render(){
        return(
            <div>
                <br />
                <br />
                <Container className = "text-center justify-content-center">
                    <Row>
                        <Container id="t-home-banner1" className="px-4 py-4">
                            <Row>
                                <Col>
                                <h1>Hello, {this.state.name}!</h1>
                                <p>Account Number: {this.state.actNum}</p>
                                <Button size="small" variant="outline-secondary">Logout</Button>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col sm={4}>
                                    <Button className="my-1" block href="/trainer-sessions"><i className="fas fa-calendar-check"></i> Sessions</Button>
                                </Col>
                                <Col sm={4}>
                                    <Button className="my-1" block href="/client-list"><i className="fas fa-users"></i> Clients</Button>
                                </Col>
                                <Col sm={4}>
                                    <Button className="my-1" block href="/trewards"><i className="fas fa-gift"></i> Rewards</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <br />
                    <Row>
                        <Image src="/images/background/bell-1.png" className="session-bg" />
                        <Container className="sec-text-block">
                            <Container className="secCont">
                                <h1>You have {this.state.numSessions} sessions</h1>
                                <h1>booked for today</h1>
                                <Button href="/trainer-sessions" variant="outline-light"><b>View Sessions</b></Button>
                            </Container>
                        </Container>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default THome;