import React, { Component } from 'react';
import { Container, Table, Col, Row, Button } from 'react-bootstrap';
import ProgressBar from "@ramonak/react-progress-bar";

class ClientProfile extends Component {

	// ===========================================================================
	// Needs
	// ===========================================================================
	//  - Add Point Function:
	// 		- Needs fixing. Progress is always 10% behind what it should be
	//  - Change state vals to reflect database
	// 	- Function to handle removing the client
	//  - Props for:
	//      - Client's name                     (Used in table)
	//      - Client's rewards points           (Used in table and progress bar)
	//      - Client's Rewards                  (Used for progress bar)
	//      - Client's phone number            (Used in 'Contact Client' button)

	state = {
		name: "",
		rwdTotal: 5,
		rwdProg: 0,
		rwdNext: 10
	}

	componentDidMount() {
		this.calcProg();
	}

	addPoint = () => {
		this.setState({ rwdTotal: this.state.rwdTotal + 1 })
		this.calcProg();
	}

	calcProg = () => {
		let calc = ((this.state.rwdTotal / this.state.rwdNext) * 100);

		if (calc === 0) {
			this.setState({ rwdProg: 0 });
		}
		else {
			this.setState({ rwdProg: calc })
		}
	}

	render() {
		return (

			<div>

				<Container className="text-center justify-content-center">
					<Row className="text-center justify-content-center">
						<Col xs={6}>
							<Table bordered>
								<tbody>
									<tr>
										<td className="bg-secondary text-white">Client:</td>
										{/* Remove Sample */}
										<td><b>{this.state.name}Sample</b></td>
									</tr>
									<tr>
										<td className="bg-secondary text-white">Total Rewards Points</td>
										<td><b>{this.state.rwdTotal}</b></td>
									</tr>
								</tbody>
							</Table>
						</Col>
					</Row>

					<Row className="text-center justify-content-center">
						<h2 className="text-center">Progress to Next Reward:</h2>
					</Row>

					<Row className="text-center justify-content-center">

						<Col xs={5}>
							<ProgressBar completed={this.state.rwdProg} bgcolor="#ff5000" height="25px" />
						</Col>

					</Row>

					<Row className="text-center justify-content-center mt-2">

						<Container className="text-center justify-content-center">

							<Col md={{ span: 6, offset: 3 }} className="text-center justify-content-center">


								<Button className="my-1 btn-block btn-lg" variant="secondary" onClick={this.addPoint}>Add Reward Point</Button>
                                <div className="accordion" id="accordionExample">
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingOne">
										<Button className="my-1 btn-block btn-lg accordion-button" variant="secondary" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Contact Client</Button>
										</h2>
										<div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
											<div className="accordion-body">
											<Button className="my-1 btn-block btn-lg" variant="outline-secondary" href="tel:123-456-7890"><i className="fas fa-phone"></i>&nbsp;Call</Button>
											<Button className="my-1 btn-block btn-lg" variant="outline-secondary" href="sms:123-456-7890"><i className="fas fa-comment-dots"></i>&nbsp;Text</Button>
											<Button className="my-1 btn-block btn-lg" variant="outline-secondary" href="mailto:sample@mail.com"><i className="fas fa-envelope"></i>&nbsp;Email</Button>
											</div>
										</div>
									</div>
								</div>								
								<Button className="my-1 btn-block btn-lg" variant="secondary" href="/t-client-rewards">View Rewards</Button>
								<Button className="my-1 btn-block btn-lg" variant="secondary" href="/t-client-sessions">Sessions</Button>
								<Button className="my-1 btn-block btn-lg" variant="danger">Remove Client</Button>
							</Col>
						</Container>
					</Row>

				</Container>
			</div>
		);
	}
}

export default ClientProfile;
