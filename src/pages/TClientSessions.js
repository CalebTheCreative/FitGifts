import React from "react";
import { Container, Row, Table, Col } from "react-bootstrap";
import Header from "../components/Header";

function TClientSessions () {
    return(
        <div>
            <Header />
            <Container className = "text-center justify-content-center">
                <Row className = "text-center justify-content-center">
                    <h1 style={{textAlign: "center"}}>Sessions</h1>
                </Row>
                <Row flex className = "text-center justify-content-center">
                    <Table bordered striped hover>
                        <tbody>
                            <tr>
                                <td>Client:</td>
                                <td>Daniel</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>

                <Row>
                    <Col xs={6}>
                        <h3>Last Week</h3>
                    </Col>
                </Row>
                <Row className = "text-center justify-content-center">
                    <Table bordered striped hover>
                        <tbody>
                            <tr>
                                <td xs={2}>Mon</td>
                                <td xs={4}>12:15 pm</td>
                            </tr>
                            <tr>
                                <td xs={2}>Wed</td>
                                <td xs={4}>1:45 pm</td>
                            </tr>
                            <tr>
                                <td xs={2}>Fri</td>
                                <td xs={4}>5:15 pm</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>

                <Row>
                    <Col xs={6}>
                        <h3>This Week</h3>
                    </Col>
                </Row>
                <Row className = "text-center justify-content-center">
                    <Table bordered striped hover>
                        <tbody>
                            <tr>
                                <td xs={2}>Mon</td>
                                <td xs={4}>12:15 pm</td>
                            </tr>
                            <tr>
                                <td xs={2}>Wed</td>
                                <td xs={4}>1:45 pm</td>
                            </tr>
                            <tr>
                                <td xs={2}>Fri</td>
                                <td xs={4}>5:15 pm</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>

                <Row>
                    <Col xs={6}>
                        <h3>Next Week</h3>
                    </Col>
                </Row>
                <Row className = "text-center justify-content-center">
                    <Table bordered striped hover>
                        <tbody>
                            <tr>
                                <td xs={2}>Mon</td>
                                <td xs={4}>12:15 pm</td>
                            </tr>
                            <tr>
                                <td xs={2}>Wed</td>
                                <td xs={4}>1:45 pm</td>
                            </tr>
                            <tr>
                                <td xs={2}>Fri</td>
                                <td xs={4}>5:15 pm</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>

            </Container>
        </div>
    )
}

export default TClientSessions;