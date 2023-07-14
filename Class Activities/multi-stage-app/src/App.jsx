import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import SuccessPage from "./components/SuccessPage";
import Registration from "./components/Registration";

class App extends Component {
  render() {
    return (
      <Router>
        <h1>Welcome to FemCode Africa</h1>
        <p>React Bootcamp to start tomorrow</p>
        <Link to="/">Click here to Register</Link>

        <Routes>
          <Route exact path="/" Component={Registration} />
          <Route path="/success" Component={SuccessPage} />
        </Routes>
      </Router>
    );
  }
}

export default App;
