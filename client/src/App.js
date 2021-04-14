import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ClientHome from './pages/ClientHome';
// import ClientList from './components/ClientList';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './pages/Home';

function App() {

	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route exact path={[["/", "/login"]]}>
						<Login />
					</Route>
					<Route exact path="/signup">
						<Signup />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
