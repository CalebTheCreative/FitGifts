import React from "react";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
import Header from "../components/Header";


function TrainerHomePage () {
    return(
        <div>
            <Header />
            <Container className = "text-center justify-content-center">
                <Row className = "text-center justify-content-center">
                    <h1 style={{textAlign: "center"}}>Welcome Daniel</h1>
                </Row>
                <Row flex className = "text-center justify-content-center">
                    <h2 className="text-center">YOU HAVE <span>4</span> SESSIONS BOOKED FOR TODAY!</h2>
                </Row>
                
                <Row className = "text-center justify-content-center mt-2">
                    <Container className="text-center justify-content-center">
                        <Col md={{ span: 6, offset: 3 }} className="text-center justify-content-center">
                            <Button className="my-0 btn-block btn-lg" variant="secondary" href="/ClientSessions">Sessions</Button>
                            <Button className="my-0 btn-block btn-lg" variant="secondary" href="/ClientSessions">Clients</Button>
                            <Button className="my-0 btn-block btn-lg" variant="secondary"href="/ClientSessions" >Logout</Button>
                        </Col>
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default TrainerHomePage;