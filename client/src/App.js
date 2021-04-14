import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './pages/Home';

function App(path) {

	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={Login}/>
				<Route path="/signup">
					<Signup />
				</Route>
				<Route path="/home">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
