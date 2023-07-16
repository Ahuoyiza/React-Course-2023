import './App.css';
import {Component} from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import SuccessPage from './components/SuccessPage';
import RegistrationForm from './components/RegistrationForm';


class App extends Component {
  render(){
    return(
      <Router>
        <h1>Welcome to Femcode Africa</h1>
        <p>React Bootcamp to start tomorrow</p>
        <Link to = "/register">Click here to Register</Link>
        <Routes>
          <Route exact path = "/register" Component={RegistrationForm} />
          <Route path= "/success" Component = {SuccessPage} />
        </Routes>
          
      </Router>
    )
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
