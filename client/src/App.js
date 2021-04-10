import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientHome from './pages/ClientHome';
import ClientList from './pages/ClientList';
import ClientProfile from './pages/ClientProfile';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/SignUp';
import TClientRewards from './pages/TClientRewards';
import TrainerHome from './pages/TrainerHome';
import TRewards from './components/TRewards';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route exact path="/home-client">
						<ClientHome />
					</Route>
					<Route exact path="/client-list">
						<ClientList />
					</Route>
					<Route exact path="/client-profile">
						<ClientProfile />
					</Route>
					<Route exact path={['/', '/login']}>
						<Login />
					</Route>
					<Route exact path="/signup">
						<Signup />
					</Route>
					<Route exact path="/t-client-rewards">
						<TClientRewards />
					</Route>
					<Route exact path="/home-trainer">
						<TrainerHome />
					</Route>
					<Route exact path="/trewards">
						<TRewards />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
