import React, { Component } from 'react';
import Clients from "../components/Clients";

class ClientList extends Component {

	// ===========================================================================
    // Needs
    // ===========================================================================
    //  - Map out list of clients as buttons in the list group

	// 	- Function to handle clicking a client's name
	// 		- Should route to that client's profile page

	state = {
		clients: [],
	};

	render(){
		return (
			<div>
				<Clients />
			</div>
		);
	}
}

export default ClientList;
