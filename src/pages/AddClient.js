import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Header from "../components/Header";

function AddClient() {
    return (
        <div>
            <Header />
            <Container className = "text-center justify-content-center">
                <Row className = "text-center justify-content-center">
                    <h1 style={{textAlign: "center"}}>Add Client</h1>
                </Row>
                <Row className = "text-center justify-content-center">
                    <h3>Send code to client</h3>
                </Row>
                <Row className = "text-center justify-content-center">
                    <a href="mailto: sample@mail.com">
                    <Button variant="danger"><b>M68B3</b></Button>
                    </a>
                </Row>
                <Row className = "text-center justify-content-center">
                    <h2>Add Rewards:</h2>
                </Row>
                <Row className = "text-center justify-content-center">
                    <Form>
                        <div className="input-group">
                            <select className="custom-select" id="inlineFormCustomSelect">
                                <option selected>Pts</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                            </select>
                            <input type="text" className="form-control" aria-label="Text input with 2 dropdown buttons" placeholder="Reward Item" />
                            <Button type="submit" variant="secondary" className="ml-1"><i className="fas fa-plus"></i></Button>
                        </div>
                    </Form>
                </Row>

                <Row className = "text-center justify-content-center">
                    <h2>Rewards Criteria:</h2>
                </Row>
                <Row className = "text-center justify-content-center">
                    <Form>
                        <div className="input-group">
                            <select className="custom-select" id="inlineFormCustomSelect">
                                <option selected>Pts</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <input type="text" className="form-control" aria-label="Text input with 2 dropdown buttons" placeholder="Reward Criteria" />
                            <button type="submit" className="btn btn-secondary ml-1"><i className="fas fa-plus"></i></button>
                        </div>
                    </Form>
                </Row>
                <Row className = "text-center justify-content-center mt-2">
                    <Button variant="secondary" href="/trainerhome">
                        Done
                    </Button>
                </Row>

            </Container>
        </div>
    )
}

export default AddClient;