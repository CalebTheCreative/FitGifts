import React from "react";
import { Container, Row, Table, Col, Button } from "react-bootstrap";
import Sessions from "../components/Sessions";

function ClientSessions () {
    
    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Routes for 'Book New Session' button to 'BookNewSession' pg
    //  - Function to handle grabbing session details and appending to proper list
    //      - Use js-booking-calendar
    //  - Props for:
    //      - Trainer's name                    (Used in table)
    //      - Client's rewards points           (Used in table)
    //      - Client's sessions                 (Used in table)
    
    return(
        <div>
            <Container className = "text-center justify-content-center">
                <Row className = "text-center justify-content-center">
                    <h1 style={{textAlign: "center"}}>Sessions</h1>
                </Row>
                <Row className = "text-center justify-content-center">
                    <Col xs={6}>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td><b>Trainer:</b></td>
                                    <td>Xavier</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button variant="success" className="btn-lg btn-block mt-0" href="/book-new-session">Book a new session</Button>
                    </Col>
                </Row>

                <br />

                <Sessions />

            </Container>
        </div>
    )
}

export default ClientSessions;