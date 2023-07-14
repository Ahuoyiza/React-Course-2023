import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import SuccessPage from "./Components/SuccessPage";
import RegistrationForm from "./Components/RegistrationForm";

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

        <Switch>
          <Route exact path="/" component={RegistrationForm} />
          <Route path="/success" component={SuccessPage} />
        </Switch>
      </Router>
    );
  }
}
export default App;
