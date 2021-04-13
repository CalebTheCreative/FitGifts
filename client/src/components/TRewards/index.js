import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API from '../../utils/API';

function TRewards() {
	const [rewards, setRewards] = useState([]);
	const [rwdName, setRwdName] = useState([]);
	const [rwdVal, setRwdVal] = useState([]);
	// const [rewardObject, setRewardObject] = useState({});
	// const [isRedeemed, setIsRedeemed] = useState(false);

	// Load all rewards and store them with setRewards
	useEffect(() => {
		loadRewards()
	}, [])

	function loadRewards() {

		API.getRewards()
			.then(res =>
				setRewards(res.data)
			)
			.catch(err => console.log(err));
	};

	// function handleDelete(id) {
	// 	API.deleteReward(id)
	// 		.then(res => 
	// 			setRewards(res.data)
	// 		)
	// 		.catch(err => console.log(err));
	// }
	// function handleInputChange(e) {
	// 	const { rwdName, rwdVal, value } = e.target;

	// 	setRewardObject({ ...rewardObject, [rwdName]: value, [rwdVal]: value });
	// }

	function handleRewardSubmit(e) {
		e.preventDefault();
		console.log('Reward Desc. : ');
		console.log('reward name: ', rwdName);
		console.log('reward value: ', rwdVal);

		if (rwdName && rwdVal) {
			API.createRewards({
				rwdName: rwdName,
				rwdVal: rwdVal
			})
				.then((res) => alert('Creation Successful!'), loadRewards())
				.catch((err) => console.log(err));
		}
	}

	return (
		<div>
			<Row className="mt-4">
				<Container id="c-home-banner1" className="p-4 bg-danger">
					<Row className="justify-contents-center align-items-center text-center">
						<Col id="rwdTitleBox" className="align-items-center justify-content-center">
							<Row className="align-items-center text-center">
								<Col className="align-items-center text-white">
									<h1>Rewards List</h1>
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
												name="rwdName"
												placeholder="Reward Description"
												onChange={(e) => setRwdName(e.target.value)}
											/>
										</div>
									</Col>
									<Col sm={4}>
										<div className="form-group">
											<input
												className="form-input"
												name="rwdVal"
												placeholder="Reward Value"
												onChange={(e) => setRwdVal(e.target.value)}
											/>
										</div>
									</Col>
									<Col sm={4}>
										<button
											disabled={!(rwdName && rwdVal)}
											className="btn btn-primary"
											onClick={handleRewardSubmit}
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

					{rewards.length ? (
						<ListGroup>
							{rewards.map((reward) => (
								<ListGroupItem id={reward._id}>
									{/* <Link to={'/reward/' + reward._id}>
										<b>
											{reward.rwdName} worth {reward.rwdVal} points
										</b>
									</Link> */}
										<Button>
											{reward.rwdName} worth {reward.rwdVal} points
										</Button>
								</ListGroupItem>
							))}
						</ListGroup>
					) : (
						<h3>No Rewards to display</h3>
					)}
				</Container>
			</Row>
			<br />
		</div >
	);
}

export default TRewards;
