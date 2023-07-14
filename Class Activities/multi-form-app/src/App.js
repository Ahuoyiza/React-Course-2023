import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SuccessPage from "./components/SuccessPage";
import RegistrationForm from "./components/RegistrationForm";
class App extends React.Component {
  render() {
    return (
      <Router>
        <h1>Welcome to Femcode Africa</h1>
        <p>React Bootcamp to start tomorrow</p>
        <Link to="/register">Click here to register</Link>
        <Routes>
          <Route exact path="/register" Component={RegistrationForm} />
          <Route path="/success" Component={SuccessPage} />
        </Routes>
      </Router>
    );
  }
}

export default App;
