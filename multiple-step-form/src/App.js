
import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'

import SuccessPage from './Components/Form-steps/Successpage';
import Step3 from './Components/Form-steps/Step3';
import Step2 from './Components/Form-steps/Step2';
import Step1 from './Components/Form-steps/Step1';
import Welcome from './Components/Form-steps/welcome';

class App extends Component{
  constructor(props){
    super(props)
  //constructor(){
    //super();
    //this.state ={
      //appname: 'React class reg'
    //}
  //}
  state= {
    step: 1,
    FormData: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
    }
  }
  this.handlechange = this.handlechange.bind(this)
  handlechange = (e)=>{
    const [name, value]= e.target;
    this.setState((prevstate)=> ({
      FormData:{
        ...prevstate.FormData,
        [name]: value,
      }
    }))
  };
  nextstep=()=>{
    this.setState((prevstate)=>({
      step: prevstate+ 1
    }))
  }
  prevstep=()=>{
    this.setState((prevstate)=>({
      step: prevstate - 1
    }))
  }
  }
  render(){
    return(
      <BrowserRouter>
         <Link to="/successpage">Submit</Link>
         <Link to="/registration">Register Now</Link>
         
         <Routes>
            <Route exact path='/registration' render= {(props)=>{
              <Step1 {...props }FormData={FormData} handlechange={this.handlechange}/>}}/>
            
            
            <Route exact path='/registration' render= {(props)=>{
              <Step2 {...props }FormData={FormData} handlechange={this.handlechange}/>}}/>
            
            <Route exact path='/registration' render= {(props)=>{
              <Step3 {...props }FormData={FormData} handlechange={this.handlechange}/>}}/>

             <Route exact path='/successpage' Component={SuccessPage}/>
         </Routes>
         {
          step !== 1 &&(
            <button onClick={this.nextstep}>Previous</button>
          )
         }
         {
          step !== 4 &&(
            <button onClick={this.nextstep}>Next</button>
          )
         }
         
      </BrowserRouter>
    )
  }
}



export default App;
