import React from "react";
import { Button, Container, Form, Row, Col, ToggleButton, ToggleButtonGroup } from "react-bootstrap";


function Signup() {
    
    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Function to handle signup authentication using Passport.js
    //      - Once authenticated, directs to either 'TrainerHome' or 'AddTrainer' pg
    //  - Route to 'Login' pg when clicking the 'Log in here' link
    
    return (
        <div>
            <Container className="text-center justify-content-center">
                <Row className="text-center justify-content-center">
                    <h1 style={{ textAlign: "center" }}>FITGIFTS</h1>
                </Row>
                <Row className="text-center justify-content-center">
                    <h3>SIGN UP</h3>
                </Row>
                <br />

                <Row className="text-center justify-content-center">
                    <Col xs={8} className="text-center justify-content-center">
                        <h6>Account type:&nbsp;</h6>
                        <span>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="mb-2">
                                <ToggleButton value={1}>Client</ToggleButton>
                                <ToggleButton value={2}>Trainer</ToggleButton>
                            </ToggleButtonGroup>
                        </span>
                    </Col>
                </Row>

                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalFirst" className="text-center justify-content-center">
                                <Col xs={12}>
                                    <Form.Control type="input" placeholder="First Name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalLast" className="text-center justify-content-center">
                                <Col xs={12}>
                                    <Form.Control type="input" placeholder="Last Name" />
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} controlId="formHorizontalEmail" className="text-center justify-content-center">
                                <Col xs={12}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPhone" className="text-center justify-content-center">
                                <Col xs={12}>
                                    <Form.Control type="tel" placeholder="Phone Number" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword" className="text-center justify-content-center">
                                <Col xs={12}>
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="text-center justify-content-center">
                                <Col xs={12}>
                                    <Button type="submit" block>Sign Up</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>

                </Row>

                <Row className="text-center justify-content-center">
                    <p>Already have an account? </p><span><a href="/login">&nbsp;Log in here</a></span>
                </Row>
            </Container>
        </div>
    )
}
export default Signup;