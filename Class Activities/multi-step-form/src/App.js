import { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SuccessPage from "./component/SuccessPage";
import RegistrationForm from "./component/RegistrationForm";

class App extends Component {
  render() {
    return (
      <Router>
        <h1>Welcome to Femcode Africa</h1>
        <p>React Bootcamp to start tomorrow</p>
        <Link to="/register">Click here to Register</Link>
        <Routes>
          <Route path="/register" Component={RegistrationForm} />
          <Route path="/success" Component={SuccessPage} />
        </Routes>
      </Router>
    );
  }
}

export default App;
