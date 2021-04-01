import React from "react";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";

function TClientRewards() {

    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Function to handle notifying trainer that client wants to redeem a reward
    // 	- Function to handle redeeming a reward
    //      - Alerts a confirmation to redeem reward
    //      - Notifies client their reward is redeemed
    //      - Deducts reward points from client's reward point total
    //      - Once redeemed, routes trainer to Client's profile
    // 	- Function to handle the rewards progress bar using react-progress-bar

    //  - Props for:
    //      - Client's name                     (Used in table)
    //      - Client's rewards points           (Used in table and progress bar)
    //      - Client's Rewards                  (Used for progress bar)
    //      - Client's Reward Criteria          (Used in criteria section)

    return (
        <div>
            <Container className="text-center justify-content-center">
                <Row className="text-center justify-content-center">
                    <h1 style={{ textAlign: "center" }}>Rewards</h1>
                </Row>
                <Row flex className="text-center justify-content-center">
                    <Col xs={6}>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td>Client:</td>
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

                <Row flex className="text-center justify-content-center">
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
                </Row>

                <Row flex className="text-center justify-content-center">
                    <Col xs={6}>

                        <Row className="text-center justify-content-center">
                            <Col>
                                <h4 className="text-left">5 points<span> (Achieved) </span></h4>
                            </Col>
                            <Col>
                                <ProgressBar completed={100} bgcolor="#ff5000" height="25px" />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row flex className="text-center justify-content-center">
                    <Col xs={6}>

                        <Row className="text-center justify-content-center">
                            <Col>
                                <h4 className="text-left">10 points<span></span></h4>
                            </Col>
                            <Col>
                                <ProgressBar completed={50} bgcolor="#ff5000" height="25px" />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row flex className="text-center justify-content-center">
                    <Col xs={6}>

                        <Row className="text-center justify-content-center">
                            <Col>
                                <h4 className="text-left">25 points<span></span></h4>
                            </Col>
                            <Col>
                                <ProgressBar completed={20} bgcolor="#ff5000" height="25px" />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <Button variant="outline-secondary" className="btn-block btn-lg">10% off next session</Button>
                    </Col>
                </Row>

                <Row flex className="justify-content-center">
                    <h4 className="text-left">10 points<span></span></h4><br />
                </Row>
                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <Button variant="outline-secondary" className="btn-block btn-lg">20% off next session</Button>
                    </Col>
                </Row>

                <Row flex className="justify-content-center">
                    <h4 className="text-left">25 points<span></span></h4><br />
                </Row>
                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <Button variant="outline-secondary" className="btn-block btn-lg">50% off next session</Button>
                    </Col>
                </Row>
                <br />


                <Row className="text-center justify-content-center">
                    <Col xs={6} className="text-center justify-content-center bg-secondary text-white">

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
            </Container>
        </div>
    )
}

export default TClientRewards;