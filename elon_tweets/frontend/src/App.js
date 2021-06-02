import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Route path="/" component={ HomePage } />
      </Router>
    </div>
  );
}

export default App;
