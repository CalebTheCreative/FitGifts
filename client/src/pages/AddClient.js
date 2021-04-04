import React from "react";
import { Button, Container, Form, Row, Col, ListGroup } from "react-bootstrap";

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
            </Container>
        </div>
    )
}

export default AddClient;