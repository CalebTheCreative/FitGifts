import React from "react";
import { Container, Row, Table, Col } from "react-bootstrap";
import Header from "../components/Header";

function ClientRewards () {
    return(
        <div>
            <Header />
            <Container className = "text-center justify-content-center">
                <Row className = "text-center justify-content-center">
                    <h1 style={{textAlign: "center"}}>Rewards</h1>
                </Row>
                <Row flex className = "text-center justify-content-center">
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td>Client:</td>
                                <td>Daniel</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>

                <Row flex className = "text-center justify-content-center">
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td>Rewards Points</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                <br />
                <Row flex className = "text-center justify-content-center">
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td>Client chose:</td>
                                <td className="bg-success text-white">10% off next session</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>

                <Row className = "text-center justify-content-center">
                    <Table>
                        <tbody>
                            <tr>
                                <td>5 pts</td>
                                <td></td>
                                <td>100%</td>
                                <td>( 5 / 5 )</td>
                            </tr>
                            <tr>
                                <td colSpan="4">10% off next session</td>
                            </tr>

                            <tr>
                                <td>10 pts</td>
                                <td></td>
                                <td>50%</td>
                                <td>( 5 / 10 )</td>
                            </tr>
                            <tr>
                                <td colSpan="4">20% off next session</td>
                            </tr>

                            <tr>
                                <td>25 pts</td>
                                <td></td>
                                <td>20%</td>
                                <td>( 5 / 25 )</td>
                            </tr>
                            <tr>
                                <td colSpan="4">50% off next session</td>
                            </tr>

                        </tbody>
                    </Table>
                </Row>
                <Container className="text-center justify-content-center">
                    <Row className="text-center justify-content-center">
                        <h3 className="text-center">Criteria:</h3>
                    </Row>

                    <Row className="text-center justify-content-center">
                        <Col xs={2} >
                            <h5>1 pt</h5>
                        </Col>
                        <Col xs={4}>
                            <h5 className="text-left">Every completed session</h5>
                        </Col>
                    </Row>

                    <Row className="text-center justify-content-center">
                        <Col xs={2}>
                            <h5>2 pts</h5>
                        </Col>
                        <Col xs={4}>
                            <h5 className="text-left">Each goal met</h5>
                        </Col>
                    </Row>

                    <Row className="text-center justify-content-center">
                        <Col xs={2}>
                            <h5>3 pt</h5>
                        </Col>
                        <Col xs={4}>
                            <h5 className="text-left">Every month w/ 4 completed sessions</h5>
                        </Col>
                    </Row >
                </Container>
            </Container>
        </div>
    )
}

export default ClientRewards;