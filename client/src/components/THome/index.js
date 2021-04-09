import React, { Component } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import TRewards from "../TRewards";
import "./style.css";

class THome extends Component {
    state = {
        name: "Caleb",
        actNum: 12345,
        numSessions: 3,
        rwdName1: "10% off cost of next session",
        rwdGoal1: 5,
        clientName1: "Test1",
        clientTot1: 0,
        rwdProg: 0
    }

    componentDidMount() {
        this.calcProg();
    }

    addPoint = () => {
        this.setState({ clientTot1: this.state.clientTot1 + 1 })
        this.calcProg();
    }

    calcProg = () => {
        let calc = ((this.state.clientTot1 / this.state.rwdGoal1) * 100);

        if (calc === 0) {
            this.setState({ rwdProg: 0 });
        }
        else {
            this.setState({ rwdProg: calc })
        }
    }

    render() {
        return (
            <Container className="text-center justify-content-center" id="thCont">
                <Row className="mb-3">
                    <Container id="t-home-banner1" className="px-4 py-4">

                        <Row>
                            <Col>
                                <h1>Hello, {this.state.name}!</h1>
                                <h5 className="text-danger">Account Number: {this.state.actNum}</h5>
                                <Button size="small" variant="outline-secondary">Logout</Button>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col sm={4}>
                                <Button variant="danger" className="my-1" block href="/client-list"><i className="fas fa-users"></i><b> Clients</b></Button>
                            </Col>
                            <Col sm={4}>
                                <Button variant="danger" className="my-1" block href="/trewards"><i className="fas fa-gift"></i><b> Rewards</b></Button>
                            </Col>
                            <Col sm={4}>
                                <Button variant="danger" className="my-1" block href="/trainer-sessions"><i className="fas fa-calendar-check"></i><b> Sessions</b></Button>
                            </Col>
                        </Row>

                    </Container>
                </Row>

                <Row className="my-3">
                    <Container className="justify-content-center">
                        <Row className="text-center justify-content-center text-white">

                            <Col sm={4}>

                                <Row className="text-center justify-content-center text-white">
                                    <h5>You have {this.state.numSessions} sessions booked for today</h5>
                                </Row>
                                <Row className="text-center justify-content-center text-white">
                                    <Button className="mx-1" size="sm" variant="outline-light" href="/client-sessions">View Sessions <i className="fas fa-chevron-right"></i></Button>
                                    <Button className="mx-1" size="sm" variant="outline-light" href="/book-new-session">Book a Session <i className="fas fa-chevron-right"></i></Button>
                                </Row>

                            </Col>

                        </Row>
                    </Container>
                </Row>

                <Row className="justify-content-center my-3">
                    <Container className="justify-content-center align-items-center bg-light px-4">
                        <Row className="justify-content-center align-items-center m-2">
                            <Col xs={3} id="rwdTitleBox" className="align-items-center justify-content-center">
                                <Row className="align-items-center">
                                    <Col className="align-items-center">
                                        <h1>
                                            Your Clients
                                        </h1>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={9} className="text-center justify-content-center align-items-center">

                                <Row className="text-center align-items-center justify-content-center my-2 p-3 border">
                                    <Col sm={4} className="text-center justify-content-center">
                                        <Row className="text-center justify-content-center">
                                            <h2>{this.state.clientName1}</h2>
                                        </Row>
                                    </Col>
                                    <Col sm={2} className="text-center justify-content-center">
                                        <Row className="text-center justify-content-center">
                                            <h2 className="text-center">{this.state.clientTot1}</h2>
                                        </Row>
                                    </Col>
                                    <Col sm={6} className="text-center justify-content-center">
                                        <Row className="text-center justify-content-center">
                                            <Button className="mx-1" variant="danger" onClick={this.addPoint}><i class="fas fa-plus"></i><b> Add Pt</b></Button>
                                            <Button className="mx-1" variant="danger" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-comment"></i><b> Contact</b></Button>

                                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <Button block variant="outline-danger">Call</Button>
                                                            <Button block variant="outline-danger">Text</Button>
                                                            <Button block variant="outline-danger">Email</Button>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-primary">Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button className="mx-1" variant="danger"><i class="fas fa-minus-circle"></i><b> Remove</b></Button>
                                        </Row>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Container>
                </Row>

                <Row className="justify-content-center my-3">
                    <TRewards />
                </Row>

            </Container>
        )
    }
}

export default THome;