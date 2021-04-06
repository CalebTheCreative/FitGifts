import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./style.css";

function Header() {
    
    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Function to handle back arrow to go to previous page
    //  - Function to handle home button to go to /home-trainer or /home-client

    return (

        <Container className = "text-center justify-content-center fixed-top bg-transparent">
            <Row className="text-center justify-content-center">
                <Col xs={2}>
                <Button href="/client-list" className="mt-2">
                    <i className="fas fa-arrow-left text-center"> Back</i>
                </Button>
                </Col>
                <Col xs={6}>
                    <a href="/home-trainer">
                        <img src="/images/logos/fg-logo-scd.png" className="text-center mt-2" id="fgLogoScd" alt="FitGifts secondary logo" />
                    </a>
                </Col>
                <Col xs={2}></Col>
            </Row>
        </Container>
    )
}

export default Header;