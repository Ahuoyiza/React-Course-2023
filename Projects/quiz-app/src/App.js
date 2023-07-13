import './App.css';
import Quiz from './quiz';
import { useState } from 'react';


function App() {
  const [showQuestion, setShowQuestion] = useState(true)
  const appmain= ()=>{
    setShowQuestion(false)
  }
  
  return (
    <div className="App">
      {showQuestion ? (
        <div>
         <h1 className='app-header'>Test your chemistry ability</h1>
        <button className='btn' onClick={appmain}>start</button>
        </div>
      )
      :
      (
      <Quiz/>
      )
}
    </div>
      
  );
}
export default App;