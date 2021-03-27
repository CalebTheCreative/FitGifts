import './App.css';
import AddClient from "./pages/AddClient";
import TClientSessions from "./pages/TClientSessions";
import TClientRewards from "./pages/TClientRewards";
import AddTrainer from "./pages/AddTrainer";
import ClientHome from "./pages/ClientHome";
import ClientRewards from "./pages/ClientRewards";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TrainerHomePage from './pages/TrainerHomePage';

function App() {
  return (
    <div className="App">
      {/* <AddClient />  */}
      {/* <TClientSessions /> */}
      {/* <TClientRewards /> */}
      {/* <AddTrainer /> */}
      {/* <ClientHome /> */}
      {/* <ClientRewards /> */}
        {/* <Login />  */}
        <Signup/>
        {/* <TrainerHomePage/> */}
    </div>
  );
}

export default App;
