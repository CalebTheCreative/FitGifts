import React, { useState } from 'react';
import CRewards from '../components/CRewards';
import TRewards from '../components/TRewards';
import API from '../utils/API';

function Rewards({ childern }) {
	const [rwdName, setRwdName] = useState([]);
	const [rwdVal, setRwdVal] = useState([]);

	function handleSubmit(e) {
		e.preventDefault();
		console.log('Reward Name: ', rwdName);
		console.log('Reward Value: ', rwdVal);

		API.createReward({
			rwdName: rwdName,
		})
			.then((response) => {
				console.log(response);
				if (response.data) {
					alert('Reward Created Successful');
					Location.reload();
				}
			})
			.catch((error) => {
				console.log('Error: ', error);
			});
	}

	return (
		<div>
			{/* <CRewards /> */}
			<TRewards />
		</div>
	);
}

export default Rewards;
