import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API from '../../utils/API';

function TCriteria() {
	const [critList, setCritList] = useState([]);
	const [critName, setCritName] = useState([]);
	const [critVal, setCritVal] = useState([]);
	// const [critObject, setCritObject] = useState({});

	// Load all criteria and store them with setCrit
	useEffect(() => {
		loadCritList()
	}, [])

	function loadCritList() {

		API.getCritList()
			.then(res =>
				setCritList(res.data)
			)
			.catch(err => console.log(err));
	};

	// function handleInputChange(e) {
	// 	const { critName, critVal, value } = e.target;

	// 	setCritObject({ ...critObject, [critName]: value, [critVal]: value });
	// }

	function handleCritSubmit(e) {
		e.preventDefault();
		console.log('Criteria Desc. : ');
		console.log('Criteria name: ', critName);
		console.log('Criteria value: ', critVal);

		if (critName && critVal) {
			API.createCrit({
				critName: critName,
				critVal: critVal
			})
				.then((res) => alert('Creation Successful!'), loadCritList())
				.catch((err) => console.log(err));
		}
	}

	return (
		<div>
			<Row className="mt-4">
				<Container id="c-home-banner1" className="p-4 bg-danger">
					<Row className="justify-contents-center align-items-center text-center">
						<Col id="critTitleBox" className="align-items-center justify-content-center">
							<Row className="align-items-center text-center">
								<Col className="align-items-center text-white">
									<h1>Criteria List</h1>
								</Col>
							</Row>
						</Col>
					</Row>
					<hr className="bg-light" />
					<Row className="align-items-center justify-content-center">
						<Col sm={12} className="justify-content-center">
							<form>
								<Row className="justify-content-center">
									<Col sm={4}>
										<div className="form-group">
											<input
												className="form-input"
												name="critName"
												placeholder="Criteria Description"
												onChange={(e) => setCritName(e.target.value)}
											/>
										</div>
									</Col>
									<Col sm={4}>
										<div className="form-group">
											<input
												className="form-input"
												name="critVal"
												placeholder="Criteria Value"
												onChange={(e) => setCritVal(e.target.value)}
											/>
										</div>
									</Col>
									<Col sm={4}>
										<button
											disabled={!(critName && critVal)}
											className="btn btn-primary"
											onClick={handleCritSubmit}
											type="submit"
										>
											Submit
										</button>
									</Col>
								</Row>
							</form>
						</Col>
					</Row>
					<hr className="bg-light" />

					{critList.length ? (
						<ListGroup>
							{critList.map((crit) => (
								<ListGroupItem key={crit._id}>
									<Link to={'/criteria/' + crit._id}>
										<b>
											{crit.critName} worth {crit.critVal} points
										</b>
									</Link>
								</ListGroupItem>
							))}
						</ListGroup>
					) : (
						<h3>No Criteria to display</h3>
					)}
				</Container>
			</Row>
			<br />
		</div >
	);
}

export default TCriteria;
