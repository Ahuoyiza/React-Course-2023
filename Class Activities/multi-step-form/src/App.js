import './App.css';
import {Component} from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import SuccessPage from './components/SuccessPage';
import RegistrationForm from './components/RegistrationForm';


class App extends Component {
  state = {
    step: 1,
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
    }
  }

  handleChange = (e)=>{
    const { name, value } = e.target;
    this.setState(
      ( prevState)  =>({
        formData: {
          ...prevState.formData,
          [name]: value,
        }
      })
    );
    nextStep = () => {
      this.setState(
        (prevState) => (
          {
            step: prevState.step + 1
          }
        )
      )
    }
  }

  render() {
    const { step, formData } = this.state;
    return(
      <Router>
        <h1>Welcome to Femcode Africa</h1>
        <p>React Bootcamp to start tomorrow</p>
        <Link to = "/register">Click here to Register</Link>
        <Routes>
          <Route exact path = "/register" Component={RegistrationForm} />
          <Route path="/success" Component={SuccessPage} />
          

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
