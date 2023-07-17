import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Step1 from './components/form-steps/Step1';

const App = () => {
  return (
  <Router>
        <h1>Registeration form</h1>
      <Routes>
        <Route exact path="/register" component= {Step1}/>
      </Routes>
  </Router>
  );
}

export default App;
