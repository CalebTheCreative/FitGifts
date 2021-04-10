import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "./style.css";

function AddTrainer() {
    return (
        <Container>
            <Container className="mx-auto" id="AddTrainerCont">
                <Row className="text-center justify-content-center">
                    <h6>
                        Please enter your trainer's ID number.
                    </h6>
                </Row>
                <Row className="text-center justify-content-center">
                    <Form>
                        <Form.Group controlId="trainerCode">
                            <Form.Control type="text" placeholder="Enter Trainer ID Here" />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
        </Container>
    )
}

export default AddTrainer;