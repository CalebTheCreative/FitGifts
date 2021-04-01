import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddClient from "./pages/AddClient";
import AddTrainer from "./pages/AddTrainer";
import BookNewSession from "./pages/BookNewSession";
import ClientHome from "./pages/ClientHome";
import ClientList from "./pages/ClientList";
import ClientProfile from "./pages/ClientProfile";
import ClientRewards from "./pages/ClientRewards";
import ClientSessions from "./pages/ClientSessions";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TClientRewards from "./pages/TClientRewards";
import TClientSessions from "./pages/TClientSessions";
import TrainerHome from "./pages/TrainerHome";
import TrainerSessions from "./pages/TrainerSessions";

function App() {
	return (
		
		<Router>
			<div>
				<Header />	
				<Switch>
					<Route exact path="/add-client">
						<AddClient />
					</Route>
					<Route exact path="/add-trainer">
						<AddTrainer />
					</Route>
					<Route exact path="/book-new-session">
						<BookNewSession />
					</Route>
					<Route exact path="/home-client">
						<ClientHome />
					</Route>
					<Route exact path="/client-list">
						<ClientList />	
					</Route>
					<Route exact path="/client-profile">
						<ClientProfile />
					</Route>
					<Route exact path="/client-rewards">
						<ClientRewards />
					</Route>
					<Route exact path="/client-sessions">
						<ClientSessions />
					</Route>
					<Route exact path={["/", "/login"]}>
						<Login />	
					</Route>
					<Route exact path="/signup">
						<Signup />
					</Route>
					<Route exact path="/t-client-rewards">
						<TClientRewards />
					</Route>
					<Route exact path="/t-client-sessions">
						<TClientSessions />
					</Route>
					<Route exact path="/home-trainer">
						<TrainerHome />
					</Route>
					<Route exact path="/trainer-sessions">
						<TrainerSessions />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
