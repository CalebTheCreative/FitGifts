import React from "react";
import { Container, Row, Table, Col, Button } from "react-bootstrap";

function ClientRewards () {

	// ===========================================================================
    // Needs
    // ===========================================================================
    //  - Function to handle redeeming a reward when you click on it
    //      - Asks to confirm the trainer is redeeming that reward
    //      - Deducts that reward's point value from the client's reward point total
    //      - Once reward is used, route trainer to 'ClientProfile' pg
	// 	- Function to display the reward progress until next goal using react-progress-bar
	// 	- Function to display all of the rewards and rewards criteria with mapping
    //  - Function to notify trainer if client selected a reward they want to redeem
    //  - Props for:
    //      - Client's name                     (Used in table)
    //      - Client's rewards points           (Used in table and progress bar)
    //      - Client's Rewards                  (Used for progress bar & buttons)

    return(
        <div>
            <Container className = "text-center justify-content-center">
                <Row className = "text-center justify-content-center">
                    <h1 style={{textAlign: "center"}}>Rewards</h1>
                </Row>

                <Row flex className = "text-center justify-content-center">
                    <Col xs={6}>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>Daniel</td>
                                </tr>
                                <tr>
                                    <td>Rewards Points</td>
                                    <td>5</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <br />

                <Row flex className = "text-center justify-content-center">
                    <h2 className="text-center">Progress to Next Reward:</h2>
                </Row>
                
                <Row className = "text-center justify-content-center">
                    <Col xs={4}>
                        <Container className="border">
                            <Col xs={6}>
                                <Container className="bg-success mx-0 my-2 text-success">.</Container>
                            </Col>
                            <Col></Col>
                        </Container>
                    </Col>
                    <Col xs={2}>
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

export default ClientRewards;