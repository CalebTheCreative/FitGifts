import React, { Component } from "react";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";

class ClientRewards extends Component {

	// ===========================================================================
    // Needs
    // ===========================================================================
    //  - Function to handle redeeming a reward when you click on it
    //      - Asks to confirm the trainer is redeeming that reward
    //      - Deducts that reward's point value from the client's reward point total
    //      - Once reward is used, route trainer to 'ClientProfile' pg
	// 	- Function to display the reward progress until next goal using react-progress-bar
    //      If reached goal 1, should show progress towards goal 2, etc.
	// 	- Function to display all of the rewards and rewards criteria with mapping
    //  - Function to notify trainer if client selected a reward they want to redeem
    //  - Props for:
    //      - Client's Rewards                  (Used for progress bar & buttons)

    state = {
		name: "",
        trainerName: "",
        sessionlength: 0,
		rwdTotal: 5,
		rwdProg1: 0,
        rwdProg2: 0,
        rwdProg3: 0,
		rwdg1: 5,
        rwdg2: 10,
        rwdg3: 25,

        achieved1: "",
        achieved2: "",
        achieved3: "",
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
        if (this.state.rwdTotal >= this.state.rwdg1) {
            this.setState({ achieved1: "(Achieved)" })
        }
        if (this.state.rwdTotal >= this.state.rwdg2) {
            this.setState({ achieved2: "(Achieved)" })
        }
        if (this.state.rwdTotal >= this.state.rwdg3) {
            this.setState({ achieved3: "(Achieved)" })
        }
    }

    render(){
        return(
            <div>
                <Container className = "text-center justify-content-center">
                    <Row className = "text-center justify-content-center">
                        <h1 style={{textAlign: "center"}}>Rewards</h1>
                    </Row>

                    <Row className = "text-center justify-content-center">
                        <Col xs={6}>
                            <Table bordered>
                                <tbody>
                                    <tr>
                                        <td>Name:</td>
                                        <td>{this.state.name}Sample</td>
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

                    <Row className = "text-center justify-content-center">
                        <h2 className="text-center">Progress to Next Reward:</h2>
                    </Row>
                    
                    <Row className = "text-center justify-content-center">
                        <Col xs={5}>
                            <ProgressBar completed={this.state.rwdProg1} bgcolor="#ff5000" height="25px" />
                        </Col>
                    </Row>
                    <br />
                    
                    <Row className = "justify-content-center">
                        <h4 className="text-left">{this.state.rwdg1} points<span> {this.state.achieved1}</span></h4><br />
                    </Row>
                    <Row className = "text-center justify-content-center">
                        <Col xs={6}>
                            <Button variant="outline-secondary" className="btn-block btn-lg">10% off next session</Button>
                        </Col>
                    </Row>

                    <Row className = "justify-content-center">
                        <h4 className="text-left">{this.state.rwdg2} points<span>{this.state.achieved2}</span></h4><br />
                    </Row>
                    <Row className = "text-center justify-content-center">
                        <Col xs={6}>
                            <Button variant="outline-secondary" className="btn-block btn-lg">20% off next session</Button>
                        </Col>
                    </Row>

                    <Row className = "justify-content-center">
                        <h4 className="text-left">{this.state.rwdg3} points<span>{this.state.achieved3}</span></h4><br />
                    </Row>
                    <Row className = "text-center justify-content-center">
                        <Col xs={6}>
                            <Button variant="outline-secondary" className="btn-block btn-lg">50% off next session</Button>
                        </Col>
                    </Row>
                    <br />
                    <Row className="text-center justify-content-center">
                        <Col xs={6} className="text-center justify-content-center bg-secondary text-white my-1">
                            <Row className="text-center justify-content-center">
                                <h3 className="text-center my-1">Criteria:</h3>
                            </Row>

                            <Row className="text-center justify-content-center">
                                <Col xs={4}>
                                    <p>1 pt</p>
                                </Col>
                                <Col>
                                    <p className="text-left">Every completed session</p>
                                </Col>
                            </Row>

                            <Row className="text-center justify-content-center">
                                <Col xs={4}>
                                    <p>2 pts</p>
                                </Col>
                                <Col>
                                    <p className="text-left">Each goal met</p>
                                </Col>
                            </Row>

                            <Row className="text-center justify-content-center">
                                <Col xs={4}>
                                    <p>3 pts</p>
                                </Col>
                                <Col>
                                    <p className="text-left">Every month w/ 4 completed sessions</p>
                                </Col>
                            </Row >
                        </Col>
                    </Row>
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
}

export default ClientRewards;