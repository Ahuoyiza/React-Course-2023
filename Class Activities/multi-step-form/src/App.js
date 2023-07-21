import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import SuccessPage from "./components/SuccessPage";
import Step1 from "./components/form-steps/Step1";
import Step2 from "./components/form-steps/Step2";
import Step3 from "./components/form-steps/Step3";

class App extends Component {
  render() {
    return (
      <Router>
        <h1>Welcome to Femcode Africa</h1>
        <p>React Bootcamp to start tomorrow</p>
        <Link to="/register">Click here to Register</Link>
        <Routes>
          <Route exact path="/register" Component={RegistrationForm} />
          <Route path="/success" Component={SuccessPage} />
        </Routes>
      </Router>
    );
  }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <h1>multi step form</h1>
//     </div>
//   );
// }

// export default App;
