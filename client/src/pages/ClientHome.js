import React, { Component } from "react";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";

class ClientHome extends Component {

    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Routes for 'Rewards' & 'Sessions' buttons
    //  - Function to handle logout and route to login page after
    //  - Needs ability to figure out reward levels.
    //      - If goal 1 was 5 points and user has 6, needs to show progress towards goal 2
    //  - Still need Props for:
    //      - Trainer's phone number and email  (Used in 'Contact Trainer' button)

    state = {
		name: "",
        trainerName: "",
        sessionlength: 0,
		rwdTotal: 1,
		rwdProg1: 0,
		rwdNext: 5,

        achieved: ""
	}

	componentDidMount() {
		this.calcProg();
        this.rwdAchieved();
	}

    calcProg = () => {
		let calc1 = ((this.state.rwdTotal / this.state.rwdNext) * 100);

		if (calc1 === 0) {
			this.setState({ rwdProg1: 0 });
		}
		else {
			this.setState({ rwdProg1: calc1 })
		}
	}

    rwdAchieved = () => {
        if (this.state.rwdTotal >= this.state.rwdNext) {
            this.setState({ achieved: "(Achieved)" })
        }
    }

    render(){
        return(
            <div>
                <Container className = "text-center justify-content-center">
                    <Row className = "text-center justify-content-center">
                        <h1 style={{textAlign: "center"}}>Welcome</h1><span><h1>&nbsp;{this.state.name}Sample</h1></span>
                    </Row>
                    <Row className = "text-center justify-content-center">
                        <Col xs={4}>
                            <Table bordered>
                                <tbody>
                                    <tr>
                                        <td>Trainer:</td>
                                        <td>{this.state.trainerName}Sample</td>
                                    </tr>
                                    <tr>
                                        <td>Total Rewards Points</td>
                                        <td>{this.state.rwdTotal}</td>
                                    </tr>
                                    <tr>
                                        <td>Sessions this week</td>
                                        <td>{this.state.sessionlength}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                    <Row className = "text-center justify-content-center">
                        <h2 className="text-center">Progress to Next Reward:</h2>
                    </Row>
                    
                    <Row className = "text-center justify-content-center">
                        <Col xs={5}>
                            <ProgressBar completed={this.state.rwdProg1} bgcolor="#ff5000" height="25px" />
                        </Col>
                    </Row>
                    
                    <Row className = "text-center justify-content-center mt-2">
                        <Container className="text-center justify-content-center">
                            <Col md={{ span: 6, offset: 3 }} className="text-center justify-content-center">
                                <Button className="my-1 btn-block btn-lg" variant="secondary" href="/client-rewards">Rewards</Button>
                                <Button className="my-1 btn-block btn-lg" variant="secondary" href="/client-sessions">Sessions</Button>
                                <div class="accordion" id="accordionExample">
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingOne">
										<Button className="my-1 btn-block btn-lg accordion-button" variant="secondary" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Contact Trainer</Button>
										</h2>
										<div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
											<div class="accordion-body">
											<Button className="my-1 btn-block btn-lg" variant="outline-secondary" href="tel:123-456-7890"><i className="fas fa-phone"></i>&nbsp;Call</Button>
											<Button className="my-1 btn-block btn-lg" variant="outline-secondary" href="sms:123-456-7890"><i class="fas fa-comment-dots"></i>&nbsp;Text</Button>
											<Button className="my-1 btn-block btn-lg" variant="outline-secondary" href="mailto:sample@mail.com"><i class="fas fa-envelope"></i>&nbsp;Email</Button>
											</div>
										</div>
									</div>
								</div>
                                <Button className="my-1 btn-block btn-lg" variant="secondary">Logout</Button>
                            </Col>
                        </Container>
                    </Row>
                </Container>
            </div>
        )
    }       
}

export default ClientHome;