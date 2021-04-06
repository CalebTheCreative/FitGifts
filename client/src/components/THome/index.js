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
                                <Col>
                                    <Button block href="/trainer-sessions"><i class="fas fa-calendar-check"></i> Sessions</Button>
                                </Col>
                                <Col>
                                    <Button block href="/client-list"><i class="fas fa-users"></i> Clients</Button>
                                </Col>
                                <Col>
                                    <Button block href="/trewards"><i class="fas fa-gift"></i> Rewards</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <br />
                    <Row>
                        <Image src="/images/background/bell-1.png" className="session-bg" />
                        <Container className="sec-text-block">
                            <Container className="secCont">
                                <br /><br />
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