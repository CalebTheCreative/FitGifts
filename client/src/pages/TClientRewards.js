import React, { Component } from "react";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";

// ===========================================================================
// Needs
// ===========================================================================
//  - Function to handle notifying trainer that client wants to redeem a reward
// 	- Function to handle redeeming a reward
//      - Alerts a confirmation to redeem reward
//      - Notifies client their reward is redeemed
//      - Deducts reward points from client's reward point total
//      - Once redeemed, routes trainer to Client's profile

class TClientRewards extends Component {

    state = {
		name: "",
		rwdTotal: 1,
		rwdProg1: 0,
        rwdProg2: 0,
        rwdProg3: 0,
		rwdNext: 5,
        rwdg1: 5,
        rwdg2: 10,
        rwdg3: 25,
        achieved: "",
        rwdName1: "10% off next session",
        rwdName2: "20% off next session",
        rwdName3: "50% off next session",
	}

	componentDidMount() {
		this.calcProg();
        this.rwdAchieved();
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
            <div>
                <Container className="text-center justify-content-center">
                    <Row className="text-center justify-content-center">
                        <h1 style={{ textAlign: "center" }}>Rewards</h1>
                    </Row>
                    <Row className="text-center justify-content-center">
                        <Col xs={6}>
                            <Table bordered>
                                <tbody>
                                    <tr>
                                        <td>Client:</td>
                                        <td>{this.state.name}(Sample)</td>
                                    </tr>
                                    <tr>
                                        <td>Rewards Points</td>
                                        <td>{this.state.rwdTotal}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                    <br />

                    {/* <Row className="text-center justify-content-center">
                        <Col xs={6}>
                            <Table bordered>
                                <tbody>
                                    <tr>
                                        <td>Client chose:</td>
                                        <td className="bg-success text-white">10% off next session</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row> */}

                    <Row className="text-center justify-content-center">
                        <Col xs={6}>

                            <Row className="text-center justify-content-center">
                                <Col>
                                    <h4 className="text-left">{this.state.rwdg1} points <span>{this.state.achieved} </span></h4>
                                </Col>
                                <Col>
                                    <ProgressBar completed={this.state.rwdProg1} bgcolor="#ff5000" height="25px" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="text-center justify-content-center">
                        <Col xs={6}>

                            <Row className="text-center justify-content-center">
                                <Col>
                                    <h4 className="text-left">{this.state.rwdg2} points<span></span></h4>
                                </Col>
                                <Col>
                                    <ProgressBar completed={this.state.rwdProg2} bgcolor="#ff5000" height="25px" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="text-center justify-content-center">
                        <Col xs={6}>

                            <Row className="text-center justify-content-center">
                                <Col>
                                    <h4 className="text-left">{this.state.rwdg3} points<span></span></h4>
                                </Col>
                                <Col>
                                    <ProgressBar completed={this.state.rwdProg3} bgcolor="#ff5000" height="25px" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="text-center justify-content-center">
                        <Col xs={6}>
                            <Button variant="outline-secondary" className="btn-block btn-lg">{this.state.rwdName1}</Button>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <h4 className="text-left">10 points<span></span></h4><br />
                    </Row>
                    <Row className="text-center justify-content-center">
                        <Col xs={6}>
                            <Button variant="outline-secondary" className="btn-block btn-lg">{this.state.rwdName2}</Button>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <h4 className="text-left">25 points<span></span></h4><br />
                    </Row>
                    <Row className="text-center justify-content-center">
                        <Col xs={6}>
                            <Button variant="outline-secondary" className="btn-block btn-lg">{this.state.rwdName3}</Button>
                        </Col>
                    </Row>
                    <br />

                </Container>
            </div>
        )
    }
}

export default TClientRewards;