import './App.css';
import {Component} from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import SuccessPage from './components/SuccessPage';
import Step1 from './components/form-steps/Step1';
import Step2 from './components/form-steps/Step2';
import Step3 from './components/form-steps/Step3';
// import Welcome from './components/Welcome';


class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    step: 1,
    FormData: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
    },
  };
  // this.handleChange =this.handleChange.bind(this);
}
  handleChange = (e)=>{
    const {name, value} = e.target;
    this.setState((prevState)=>({
      FormData: {
        ...prevState.FormData,
        [name]:value,
      },
    }));
  }
  nextStep = () =>{
    this.setState((prevState)=>({
      step: prevState.step + 1
    }));
  };
  prevStep = () =>{
    this.setState((prevState)=>({
      step: prevState.step - 1
    }));
  };

  
  render(){
    const {step, formData} = this.state;
    return(
      <Router>
        
        <Routes>
          <Route  exact path = "/register"  Component = {(props) =>(
            <Step1 {...props} formData= {formData} handleChange = {handleChange} />
    )} />
          <Route exact path = "/step2"  render = { (props) =>(
          <Step2 {...props} formData= {formData} handleChange = {this.handleChange} />)} />
          <Route exact path = "/step3"  render = { (props) =>(
            <Step3 {...props} formData= {formData} handleChange = {this.handleChange} />
    )} />
          <Route exact path= "/success" Component = {SuccessPage} />

        </Routes>
          {
            step !== 1 && (
              <button onClick={this.prevStep}>Previous</button>
            )
          }
           {
            step !== 3 && (
              <button onClick={this.nextStep}>Next</button>
            )
          }
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
