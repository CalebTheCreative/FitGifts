import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

function Header() {

    return (

        <Container className = "text-center justify-content-center fixed-top bg-transparent mt-2 mb-4">
            <Row className="text-center justify-content-center">
                <Col sm={3}>
                </Col>
                <Col sm={6}>
                    <a href="/home">
                        <img src="/images/logos/fg-logo-text-whitered.png" className="text-center mt-2" id="fgLogoScd" alt="FitGifts secondary logo" />
                    </a>
                </Col>
                <Col xs={3}></Col>
            </Row>
        </Container>
    )
}

export default Header;