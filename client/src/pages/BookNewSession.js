import React from "react";
import { Container, Row } from "react-bootstrap";
import Sessions from "../components/Sessions";

function BookNewSession() {

    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Route for 'Done' button to go to client home page
    //  - Function to handle booking sessions by clicking on individual session buttons
    //      - Should popup confirmation asking client if they'd like to book that session
    //  - Function to handle Day titles
    //      - Should be sorted by "Today", "Tomorrow", "Day 3", "Day 4", etc
    //  - Props for:
    //      - Trainer's name                    (Used in table)
    //      - Trainer's available sessions      (Used in displayed session buttons)

    return (
        <Container>
            <Row className="text-center justify-content-center">
                <h1 style={{ textAlign: "center" }}>Book A Session</h1>
            </Row>
            <Sessions />
        </Container>
    )
}

export default BookNewSession;