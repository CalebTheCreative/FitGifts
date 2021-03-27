import React from "react";
import Header2 from "../components/header2";
import { Button, Container, Form, Row } from "react-bootstrap";


function Login() {
    return (
        <div>
            <Header2 />
            <Container className = "text-center justify-content-center">
                <Row className = "text-center justify-content-center">
                    <h1 style={{textAlign: "center"}}>FITGIFTS</h1>
                </Row>
                <Row className = "text-center justify-content-center">
                    <h3>SIGN UP</h3>
                </Row>
                <Row className = "text-center justify-content-center">
                    <a href="mailto: sample@mail.com">
                    </a>
                </Row>
                <Row className = "text-center justify-content-center">
                    <Form>
                    <button type="button" class="btn btn-primary btn-lg">Client</button>
                    <button type="button" class="btn btn-secondary btn-lg">Trainer</button>
                    </Form>
                </Row>
                <Row className = "text-center justify-content-center">
                    <Form>
                        <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">EMAIL ADDRESS</label>
                        <input type="email" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">PASSWORD</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="button" class="btn btn-secondary btn-lg">SUBMIT</button>
                        <p>OR</p>
                    </Form>
                </Row>
                <Row className = "text-center justify-content-center mt-2">
                    <Button variant="secondary" href="/trainerhome">
                        SIGNUP UP HERE
                    </Button>
                </Row>

            </Container>
        </div>
    )
}

export default Login;