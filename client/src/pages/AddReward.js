import React from "react";
import { Container, Row, Form, Button, Col, ListGroup } from "react-bootstrap";

function AddReward() {
    return (
        <Container>
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
                <br />


                <Row className="text-center justify-content-center">
                    <h2>Add Rewards Criteria:</h2>
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
                                <Form.Control type="text" placeholder="Reward Criteria" id="formInputCrit" />
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
                    <Button variant="secondary" href="/home/trainer">
                        Done
                    </Button>
                </Row>
        </Container>
    )
}

export default AddReward;