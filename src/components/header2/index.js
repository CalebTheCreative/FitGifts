import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";


function Header2() {
    return (
        <Container className = "text-center justify-content-center">
            <Row className="text-center justify-content-center">
                <Col xs={2}>
                </Col>
                <Col xs={6}>
                <img src="/images/logos/fg-logo-full.png" className="text-center mt-2" id="fgLogoScd" alt="FitGifts secondary logo" />
                </Col>
                <Col xs={2}></Col>
            </Row>
        </Container>
    )
}

export default Header2;