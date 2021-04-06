import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

function AddTrainer() {

    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Function to handle submit form
    //      - Ties client to trainer using specific code
    //      - Authentication (If code doesn't match any on file, alert to try again)
    //      - If authenticated upon submission, route client to their 'ClientHome' pg

    return (
        <div>
            <Container className="text-center justify-content-center">
                <Row className="text-center justify-content-center">
                    <h1 style={{ textAlign: "center" }}>Add Trainer</h1>
                </Row>
                <Container className="text-center justify-content-center">
                    <Row className="text-center justify-content-center">
                        <h6>
                            You should recieve a code from your trainer to begin.
                        </h6>
                    </Row>
                    <Row className="text-center justify-content-center">
                        <Form>
                            <Form.Group controlId="trainerCode">
                                <Form.Control type="text" placeholder="Enter Code Here" />
                            </Form.Group>
                            <Button variant="secondary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default AddTrainer;