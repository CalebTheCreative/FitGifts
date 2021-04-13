import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientHome from './pages/ClientHome';
import ClientList from './components/ClientList';
import ClientProfile from './pages/ClientProfile';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './pages/Home';
import TRewards from './components/TRewards';

function App() {

	function setToken(email) {
		sessionStorage.setItem('token', email);
	}

	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route exact path={"/"}
					render={(props) => (
						<Login
						{...props}
						tokenStatus={setToken}
						/>
					)} />
					<Route exact path="/home-client">
						<ClientHome />
					</Route>
					<Route exact path="/client-list">
						<ClientList />
					</Route>
					<Route path="/client-profile">
						<ClientProfile />
					</Route>
					{/* <Route exact path={['/', '/login']}>
						<Login />
					</Route> */}
					<Route exact path="/signup">
						<Signup />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/trewards">
						<TRewards />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
