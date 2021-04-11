import React from 'react';
import Clients from '../Clients';
import './style.css';

function ClientList() {
	// ===========================================================================
	// Needs
	// ===========================================================================
	//  - Map out list of clients as buttons in the list group

	// 	- Function to handle clicking a client's name
	// 		- Should route to that client's profile page

	// state = {
	// 	clients: [],
	// };

	return (
		<div>
			<Clients />
		</div>
	);
}

export default ClientList;
