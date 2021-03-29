import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


function Login() {

    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Function to handle login authentication using Passport.js
    //      - Once authenticated, directs to either 'TrainerHome' or 'ClientHome' pg
    //  - Route to 'Signup' pg when clicking the 'Sign up here' link

    return (
        <div>

            <Container className="text-center justify-content-center">
                <Row className="text-center justify-content-center">
                    <h1 style={{ textAlign: "center" }}>FITGIFTS</h1>
                </Row>
                <br />
                <Row className="text-center justify-content-center">
                    <h3>Log In</h3>
                </Row>

                <Row className="text-center justify-content-center">
                    <Col xs={6}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="secondary" size="lg" block type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <br />

                <Row className="text-center justify-content-center">
                    <p>Don't have an account? </p><span><a href="/login">&nbsp;Sign up here</a></span>
                </Row>

            </Container>
        </div>
    )
}

export default Login;