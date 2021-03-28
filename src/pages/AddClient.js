import React from "react";
import { Button, Container, Form, Row, Col, ListGroup } from "react-bootstrap";
import Header from "../components/Header";

// ===========================================================================
// Needs
// ===========================================================================
//  - Function to handle key code
//      - Should be randomized 5 characted code with only Capital letters & numbers
//      - Maybe if button of code is clicked, trainer can be given option of either
//        copying code to clipboard or sending that code through text/email
//  - Function to handle adding rewards
//      - Should handle the value of points from dropdown and 'Reward Item' input
//      - Append each submitted item to a list below form
//      - If a submitted reward item is clicked, alert asking if trainer would like
//        to delete item
//  - Function to handle adding reward criteria
//      - Should handle the value of points from dropdown and 'Reward Criteria' input
//      - Append each submitted item to a list below form
//      - If a submitted reward criteria is clicked, alert asking if trainer would like
//        to delete criteria
//  - Function to handle full form submission
//      - Will take key code, any rewards, and any criteria and put it into the client's database
//      - After data is submitted, alert successful addition msg & route trainer to 'TrainerHome' pg

function AddClient() {
    return (
        <div>
            <Header />
            <Container className="text-center justify-content-center">
                <Row className="text-center justify-content-center">
                    <h1 style={{ textAlign: "center" }}>Add Client</h1>
                </Row>
                <Row className="text-center justify-content-center">
                    <h3>Send code to client</h3>
                </Row>
                <Row className="text-center justify-content-center">
                    <a href="mailto: sample@mail.com">
                        <Button variant="danger"><b>{/* Sample */}M68B3</b></Button>
                    </a>
                </Row>
                <Row className="text-center justify-content-center">
                    <h2>Add Rewards:</h2>
                </Row>
                <Row className="text-center justify-content-center" noGutters>
                    <Form>
                        <Form.Row className="align-items-center justify-content-center">
                            <Col xs="auto" className="my-1 mx-0">
                                <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                    Add Rewards Form
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    className="mr-sm-2"
                                    id="formSelectRewardVal"
                                    custom
                                    defaultValue="Points"
                                >
                                    <option>Points</option>
                                    <option>5</option>
                                    <option>10</option>
                                    <option>15</option>
                                    <option>20</option>
                                    <option>25</option>
                                    <option>50</option>
                                    <option>75</option>
                                    <option>100</option>
                                </Form.Control>
                            </Col>
                            <Col xs="auto" className="my-1 mx-0">
                                <Form.Control type="text" placeholder="Reward Item" id="formInputReward" />
                            </Col>
                            <Col xs="auto" className="my-1 mx-0">
                                <Button type="submit" variant="secondary"><i className="fas fa-plus"></i></Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Row>

                <Row className="text-center justify-content-center">
                    <Col xs={4}>
                        <ListGroup>
                            <ListGroup.Item> {/* Sample */}10% off next session</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>


                <Row className="text-center justify-content-center">
                    <h2>Rewards Criteria:</h2>
                </Row>

                <Row className="text-center justify-content-center">
                    <Form>
                        <Form.Row className="align-items-center justify-content-center">
                            <Col xs="auto" className="my-1">
                                <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                                    Add Criteria Form
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    className="mr-sm-2"
                                    id="formSelectCritVal"
                                    custom
                                    defaultValue="Points"
                                >
                                    <option>Points</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>10</option>
                                    <option>15</option>
                                    <option>20</option>
                                    <option>25</option>
                                    <option>50</option>
                                    <option>75</option>
                                    <option>100</option>
                                </Form.Control>
                            </Col>
                            <Col xs="auto" className="my-1">
                                <Form.Control type="text" placeholder="Reward Criteria" />
                            </Col>
                            <Col xs="auto" className="my-1">
                                <Button type="submit" variant="secondary"><i className="fas fa-plus"></i></Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Row>

                <Row className="text-center justify-content-center">
                    <Col xs={4}>
                        <ListGroup>
                            <ListGroup.Item> {/* Sample */} 1 pt for ever completed session</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="text-center justify-content-center mt-2">
                    <Button variant="secondary" href="/trainerhome">
                        Done
                    </Button>
                </Row>

            </Container>
        </div>
    )
}

export default AddClient;