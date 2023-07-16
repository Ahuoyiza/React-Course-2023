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
  state = {
    step: 1,
    FormData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      city: "",
      country: "",
    },
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      FormData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  nextStep = () => {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  };

  prevStep = () => {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  };
  render() {
    const { step, formData } = this.state;
    return (
      <Router>
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
