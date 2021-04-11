import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";

function ClientRewards(props) {

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

    // state = {
    //     name: "",
    //     trainerName: "",
    //     sessionlength: 0,
    //     rwdTotal: 5,
    //     rwdProg1: 0,
    //     rwdProg2: 0,
    //     rwdProg3: 0,
    //     rwdg1: 5,
    //     rwdg2: 10,
    //     rwdg3: 25,
    //     rwdgn1: "10% off next session",
    //     rwdgn2: "20% off next session",
    //     rwdgn3: "50% off next session",
    //     achieved1: "",
    //     achieved2: "",
    //     achieved3: "",
    // }

    // eslint-disable-next-line no-unused-vars
    function componentDidMount() {
        this.calcProg();
        this.rwdAchieved();
    }

    // eslint-disable-next-line no-unused-vars
    function calcProg() {
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

    // eslint-disable-next-line no-unused-vars
    function rwdAchieved() {
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

    return (
        <div>
            <Row className="mt-4">
                <Container id="c-home-banner1" className="p-4 bg-danger">
                    <Row className="justify-contents-center align-items-center text-center">
                        <Col id="rwdTitleBox" className="align-items-center justify-content-center">
                            <Row className="align-items-center text-center">
                                <Col className="align-items-center text-white">
                                    <h1 id="rwdPtBanner">
                                        {props.rwdTotal}
                                    </h1>
                                    <h5>Reward Points to Redeem</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr className="bg-light" />
                    <Row className="justify-content-center">
                        <Col sm={4}>
                            <Button className="my-1" variant="outline-light" block href="/client-rewards"><b>How to Earn <i className="fas fa-chevron-right"></i></b></Button>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container className="text-center justify-content-center p-4 border bg-white">
                    <Container>
                        <Row className="align-items-center justify-content-center">
                            <Col sm={3}>
                                <Row className="align-items-center">
                                    <Col className="align-items-center">
                                        <h1 id="rwdPtBanner">
                                            {props.rwdg1} pts
                                        </h1>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={6}>
                                <Row className="text-center justify-content-center align-items-center text- my-2">
                                    <Col xs={10} className="text-center justify-content-center text-black">
                                        <Row className="text-center justify-content-center text-black">
                                            <h2><b>{props.rwdgn1}</b></h2>
                                        </Row>
                                        <Row className="text-center justify-content-center text-black">
                                            <Col xs={12}>
                                                <ProgressBar
                                                    completed={props.rwdProg1}
                                                    bgColor="#FF0000"
                                                    height="25px"
                                                    labelAlignment="outside"
                                                    labelColor="#000000"
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={3}>
                                <Row className="text-center justify-content-center text-white">
                                    <Button size="lg" variant="danger"><b>Redeem</b></Button>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="align-items-center justify-content-center">
                            <Col sm={3}>
                                <Row className="align-items-center">
                                    <Col className="align-items-center">
                                        <h1 id="rwdPtBanner">
                                            {props.rwdg2} pts
                                        </h1>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={6}>
                                <Row className="text-center justify-content-center align-items-center text- my-2">
                                    <Col xs={10} className="text-center justify-content-center text-black">
                                        <Row className="text-center justify-content-center text-black">
                                            <h2><b>{props.rwdgn2}</b></h2>
                                        </Row>
                                        <Row className="text-center justify-content-center text-black">
                                            <Col xs={12}>
                                                <ProgressBar
                                                    completed={props.rwdProg2}
                                                    bgColor="#FF0000"
                                                    height="25px"
                                                    labelAlignment="outside"
                                                    labelColor="#000000"
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={3}>
                                <Row className="text-center justify-content-center text-white">
                                    <Button size="lg" variant="danger"><b>Redeem</b></Button>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="align-items-center justify-content-center">
                            <Col sm={3}>
                                <Row className="align-items-center">
                                    <Col className="align-items-center">
                                        <h1 id="rwdPtBanner">
                                            {props.rwdg3} pts
                                        </h1>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={6}>
                                <Row className="text-center justify-content-center align-items-center text- my-2">
                                    <Col xs={10} className="text-center justify-content-center text-black">
                                        <Row className="text-center justify-content-center text-black">
                                            <h2><b>{props.rwdgn3}</b></h2>
                                        </Row>
                                        <Row className="text-center justify-content-center text-black">
                                            <Col xs={12}>
                                                <ProgressBar
                                                    completed={this.state.rwdProg3}
                                                    bgColor="#FF0000"
                                                    height="25px"
                                                    labelAlignment="outside"
                                                    labelColor="#000000"
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={3}>
                                <Row className="text-center justify-content-center text-white">
                                    <Button size="lg" variant="danger"><b>Redeem</b></Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Row>

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
        </div >
    )
}

export default ClientRewards;