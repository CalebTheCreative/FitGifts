import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CHome from "../components/CHome";

class ClientHome extends Component {

    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Routes for 'Rewards' & 'Sessions' buttons
    //  - Function to handle logout and route to login page after
    //  - Needs ability to figure out reward levels.
    //      - If goal 1 was 5 points and user has 6, needs to show progress towards goal 2
    //  - Still need Props for:
    //      - Trainer's phone number and email  (Used in 'Contact Trainer' button)

    render(){
        return(
            <Container>
                <CHome />
            </Container>
        )
    }       
}

export default ClientHome;