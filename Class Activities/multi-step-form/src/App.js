import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import SuccessPage from "./components/SuccessPage";
import Step1 from "./components/form-steps/Step1";
import Step2 from "./components/form-steps/Step2";
import Step3 from "./components/form-steps/Step3";
class App extends Component {
  render() {
    return (
      <Router>
        {/* <div>
          <RegistrationForm />
          <SuccessPage />
        </div> */}
        <h1>Welcome to Femcode Africa</h1>
        <p>React Bootcamp to start tomorrow</p>
        <Link to="/register">Click here to register for the</Link>
        <Routes>
          <Route exact path="/register" component={Step1} />
          <Route path="/success" component={SuccessPage} />
        </Routes>
      </Router>
    );
  }
}
export default App;
