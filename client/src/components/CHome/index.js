import React, { Component } from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
import "./style.css";

class CHome extends Component {
    state = {
        name: "firstName",
        trainerName: "Xavier",
        numSessions: 0,
        rwdTotal: 20,
        rwdProg1: 0,
        rwdProg2: 0,
        rwdProg3: 0,
        rwdg1: 5,
        rwdg2: 10,
        rwdg3: 25,
        rwdgn1: "10% off next training session",
        rwdgn2: "20% off next training session",
        rwdgn3: "50% off next training session",

        achieved: ""
    }

    componentDidMount() {
        this.calcProg();
        this.rwdAchieved();
    }

    addPoint1 = () => {
        this.setState({ rwdTotal: this.state.rwdTotal - this.state.rwdg1 })
    }

    addPoint2 = () => {
        this.setState({ rwdTotal: this.state.rwdTotal - this.state.rwdg2 })
    }

    addPoint3 = () => {
        this.setState({ rwdTotal: this.state.rwdTotal - this.state.rwdg3 })
    }

    calcProg = () => {
        let calc1 = ((this.state.rwdTotal / this.state.rwdg1) * 100);
        let calc2 = ((this.state.rwdTotal / this.state.rwdg2) * 100);
        let calc3 = ((this.state.rwdTotal / this.state.rwdg3) * 100);

        if (calc1 === 0) {
            this.setState({ rwdProg1: 0 });
        }
        else {
            this.setState({ rwdProg1: calc1 })
        }
        if (calc2 === 0) {
            this.setState({ rwdProg2: 0 });
        }
        else {
            this.setState({ rwdProg2: calc2 })
        }
        if (calc3 === 0) {
            this.setState({ rwdProg3: 0 });
        }
        else {
            this.setState({ rwdProg3: calc3 })
        }
    }

    rwdAchieved = () => {
        if (this.state.rwdTotal >= this.state.rwdNext) {
            this.setState({ achieved: "(Achieved)" })
        }
    }

    render() {
        return (
            <Container className="text-center justify-content-center" id="chCont">
                <Row>
                    <Container id="c-home-banner1" className="px-4 py-4">
                        <Row>
                            <Col>
                                <h1>Hello, {this.state.name}!</h1>
                                <p>Trainer Name: {this.state.trainerName}</p>
                                <Button size="small" variant="outline-secondary">Logout</Button>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col sm={4}>
                                <Button className="my-1" variant="outline-danger" block href="/client-rewards"><i className="fas fa-gift"></i><b> Rewards</b></Button>
                            </Col>
                            <Col sm={4}>
                                <Button className="my-1" variant="outline-danger" block href="/client-sessions"><i className="fas fa-calendar-check"></i><b> Sessions</b></Button>
                            </Col>
                            <Col sm={4}>
                                <Button className="my-1" variant="outline-danger" block><i className="fas fa-comment"></i><b> Contact Trainer</b></Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <br />
                <Row>
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
                <br />
                <Row className="justify-content-center">
                    <Container className="justify-content-center align-items-center bg-light p-2">
                        <Row className="justify-content-center align-items-center mx-2">
                            <Col xs={4} id="rwdTitleBox" className="align-items-center justify-content-center">
                                <Row className="align-items-center">
                                    <Col className="align-items-center">
                                        <h1 id="rwdPtBanner" className="text-black">
                                            {this.state.rwdTotal}
                                        </h1>
                                        <h5 className="text-black">Reward Points to Redeem</h5>
                                        <button type="button" className="btn btn-outline-light btn-sm" data-toggle="modal" data-target="#exampleModalCenter">
                                            How to Earn <i className="fas fa-chevron-right"></i>
                                        </button>
                                        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header text-black">
                                                        <h5 className="modal-title text-black" id="exampleModalLongTitle">How to Earn Points</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <Row className="text-center justify-content-center">
                                                            <Col xs={6} className="text-center justify-content-center bg-secondary">

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
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={8} className="text-center justify-content-center">

                                <Row className="text-center align-items-center justify-content-centermy-2 border py-2">
                                    <Col xs={8} className="text-center justify-content-center">
                                        <Row className="text-center justify-content-center">
                                            <h4>5 pts: &nbsp;</h4>
                                            <h4><b>{this.state.rwdgn1}</b></h4>
                                        </Row>
                                        <Row className="text-center justify-content-center">
                                            <Col xs={10}>
                                                <ProgressBar
                                                    completed={this.state.rwdProg1}
                                                    bgColor="#FF0000"
                                                    height="25px"
                                                    labelAlignment="outside"
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={4} className="text-center justify-content-center">
                                        <Row className="text-center justify-content-center">
                                            <Button size="lg" variant="danger" onClick={this.addPoint1}>Redeem</Button>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="text-center align-items-center justify-content-center my-2 border py-2">
                                    <Col xs={8} className="text-center justify-content-center">
                                        <Row className="text-center justify-content-center">
                                            <h4>10 pts: &nbsp;</h4>
                                            <h4><b>{this.state.rwdgn2}</b></h4>
                                        </Row>
                                        <Row className="text-center justify-content-center">
                                            <Col xs={10}>
                                                <ProgressBar
                                                    completed={this.state.rwdProg2}
                                                    bgColor="#FF0000"
                                                    height="25px"
                                                    labelAlignment="outside"
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={4} className="text-center justify-content-center">
                                        <Row className="text-center justify-content-center">
                                            <Button size="lg" variant="danger" onClick={this.addPoint2}>Redeem</Button>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="text-center align-items-center justify-content-center my-2 border py-2">
                                    <Col xs={8} className="text-center justify-content-center">
                                        <Row className="text-center justify-content-center">
                                            <h4>25 pts: &nbsp;</h4>
                                            <h4><b>{this.state.rwdgn3}</b></h4>
                                        </Row>
                                        <Row className="text-center justify-content-center">
                                            <Col xs={10}>
                                                <ProgressBar
                                                    completed={this.state.rwdProg3}
                                                    bgColor="#ff0000"
                                                    height="25px"
                                                    labelAlignment="outside"
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={4} className="text-center justify-content-center">
                                        <Row className="text-center justify-content-center">
                                            <Button size="lg" variant="danger" onClick={this.addPoint3}>Redeem</Button>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Row>

            </Container>
        )
    }
}

export default CHome;