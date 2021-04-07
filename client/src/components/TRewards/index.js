import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class TRewards extends Component {

    state = {
        rwdName1: "10% off next session",
        rwdName2: "20% off next session",
        rwdName3: "50% off next session",
    }

    render() {
        return (
            <div>
                <Row className="mt-4">
                    <Container id="c-home-banner1" className="p-4 bg-danger">
                        <Row className="justify-contents-center align-items-center text-center">
                            <Col id="rwdTitleBox" className="align-items-center justify-content-center">
                                <Row className="align-items-center text-center">
                                    <Col className="align-items-center text-white">
                                        <h1>Rewards List</h1>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr className="bg-light" />
                        <Row className="align-items-center">
                            <Col sm={8}>
                                <h1 className="text-center">{this.state.rwdName1}</h1>
                            </Col>
                            <Col sm={2} className="text-center">
                                <Button block size="lg">Edit</Button>
                            </Col>
                            <Col sm={2} className="text-center">
                                <Button block size="lg">Remove</Button>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col sm={8}>
                                <h1 className="text-center">{this.state.rwdName2}</h1>
                            </Col>
                            <Col sm={2} className="text-center">
                                <Button block size="lg">Edit</Button>
                            </Col>
                            <Col sm={2} className="text-center">
                                <Button block size="lg">Remove</Button>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col sm={8}>
                                <h1 className="text-center">{this.state.rwdName3}</h1>
                            </Col>
                            <Col sm={2} className="text-center">
                                <Button block size="lg">Edit</Button>
                            </Col>
                            <Col sm={2} className="text-center">
                                <Button block size="lg">Remove</Button>
                            </Col>
                        </Row>

                    </Container>
                </Row>
            </div>
            // <Container className="text-center justify-content-center mt-4">
            //     <Row className="text-center justify-content-center">
            //         <h1 style={{ textAlign: "center" }}>Rewards</h1>
            //     </Row>

            //     <br />


            //     <Row className="text-center justify-content-center">
            //         <Col xs={6}>
            //             <Button block href="/add-reward" className="btn-lg"><b>Add</b></Button>
            //         </Col>
            //     </Row>
            //     <br />
            //     <Row className="text-center justify-content-center">
            //         <Col xs={6}>
            //             <Button variant="outline-secondary" className="btn-block btn-lg">10% off next session</Button>
            //         </Col>
            //     </Row>

            //     <Row className="justify-content-center">
            //         <h4 className="text-left">10 points<span></span></h4><br />
            //     </Row>
            //     <Row className="text-center justify-content-center">
            //         <Col xs={6}>
            //             <Button variant="outline-secondary" className="btn-block btn-lg">20% off next session</Button>
            //         </Col>
            //     </Row>

            //     <Row className="justify-content-center">
            //         <h4 className="text-left">25 points<span></span></h4><br />
            //     </Row>
            //     <Row className="text-center justify-content-center">
            //         <Col xs={6}>
            //             <Button variant="outline-secondary" className="btn-block btn-lg">50% off next session</Button>
            //         </Col>
            //     </Row>
            //     <br />

            //     <Row className="text-center justify-content-center">
            //         <Col xs={6} className="text-center justify-content-center bg-secondary text-white">

            //             <Row className="text-center justify-content-center">
            //                 <h3 className="text-center">Criteria:</h3>
            //             </Row>

            //             <Row className="text-center justify-content-center">
            //                 <Col>
            //                     <p>1 pt</p>
            //                 </Col>
            //                 <Col>
            //                     <p className="text-left">Every completed session</p>
            //                 </Col>
            //             </Row>

            //             <Row className="text-center justify-content-center">
            //                 <Col>
            //                     <p>2 pts</p>
            //                 </Col>
            //                 <Col>
            //                     <p className="text-left">Each goal met</p>
            //                 </Col>
            //             </Row>

            //             <Row className="text-center justify-content-center">
            //                 <Col>
            //                     <p>3 pt</p>
            //                 </Col>
            //                 <Col>
            //                     <p className="text-left">Every month w/ 4 completed sessions</p>
            //                 </Col>
            //             </Row >
            //         </Col>
            //     </Row>
            // </Container>
        )
    }
}

export default TRewards;