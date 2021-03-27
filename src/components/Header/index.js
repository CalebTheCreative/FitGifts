import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./style.css";

function Header() {
    return (
        <Container className = "text-center justify-content-center">
            <Row className="text-center justify-content-center">
                <Col xs={2}>
                <Button href="/clientlistpage" className="mt-2">
                    <i className="fas fa-arrow-left text-center"> Back</i>
                </Button>
                </Col>
                <Col xs={6}>
                <img src="/images/logos/fg-logo-scd.png" className="text-center mt-2" id="fgLogoScd" alt="FitGifts secondary logo" />
                </Col>
                <Col xs={2}></Col>
            </Row>
        </Container>
    )
}

export default Header;