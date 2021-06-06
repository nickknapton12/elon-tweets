import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import TeslaPage from "./components/TeslaPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/tesla" component={TeslaPage} />
      </Router>
    </div>
  );
}

export default App;
