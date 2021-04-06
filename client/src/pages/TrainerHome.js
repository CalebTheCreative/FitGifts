import React, { Component } from "react";
import { Container } from "react-bootstrap";
import THome from "../components/THome";

class TrainerHome extends Component {
    state = {
        name: "Caleb",
        actNum: 12345,
        numSessions: 3
    }
    // ===========================================================================
    // Needs
    // ===========================================================================
    //  - Function to display the amount of sessions a trainer has booked for today
    //      - If no sessions, change session text to display the no session text

    render(){
        return(
            <Container>
                <THome />
            </Container>
        )
    }
}

export default TrainerHome;