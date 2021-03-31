import React from "react";
import { Container, Row, Table, Col, Button } from "react-bootstrap";

function ClientHome () {

    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Routes for 'Rewards' & 'Sessions' buttons
    //  - Function to handle logout and route to login page after
    //  - Props for:
    //      - Client's name                     (Used in welcome message)
    //      - Trainer's name                    (Used in table)
    //      - Client's rewards points           (Used in table)
    //      - Client's sessions this week       (Used in table)
    //      - Client's Rewards                  (Used for progress bar)
    //      - Trainer's phone number            (Used in 'Contact Trainer' button)

    return(
        <div>
            <Container className = "text-center justify-content-center">
                <Row className = "text-center justify-content-center">
                    <h1 style={{textAlign: "center"}}>Welcome</h1><span><h1>&nbsp;Daniel</h1></span>
                </Row>
                <Row flex className = "text-center justify-content-center">
                    <Col xs={4}>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td>Trainer:</td>
                                    <td>Xavier</td>
                                </tr>
                                <tr>
                                    <td>Total Rewards Points</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Sessions this week</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row flex className = "text-center justify-content-center">
                    <h2 className="text-center">Progress to Next Reward:</h2>
                </Row>
                
                <Row className = "text-center justify-content-center">
                    
                    <Col xs={4}>
                        <Container className="border">
                            <Col xs={6}>
                                <Container className="bg-success mx-0 my-2">_</Container>
                            </Col>
                            <Col></Col>
                        </Container>
                    </Col>
                    <Col xs={2}>
                        <h4>50%</h4>
                    </Col>
                </Row>
                
                <Row className = "text-center justify-content-center mt-2">
                    <Container className="text-center justify-content-center">
                        <Col md={{ span: 6, offset: 3 }} className="text-center justify-content-center">
                            <Button className="my-1 btn-block btn-lg" variant="secondary" href="/client-rewards">Rewards</Button>
                            <Button className="my-1 btn-block btn-lg" variant="secondary" href="/client-sessions">Sessions</Button>
                            <Button className="my-1 btn-block btn-lg" variant="secondary">Contact Trainer</Button>
                            <Button className="my-1 btn-block btn-lg" variant="secondary">Logout</Button>
                        </Col>
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default ClientHome;