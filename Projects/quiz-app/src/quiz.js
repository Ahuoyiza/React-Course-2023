import './App.css';
import { useState } from 'react';


const questions = [
    {
      questionText: 'The gas evolved when open your coke is called',
      answerOptions: [
        {answerText: 'NO2', isCorrect:false},
        {answerText: 'NO', isCorrect:false},
        {answerText: 'NO3', isCorrect:false},
        {answerText: 'CO2', isCorrect:true}
      ],
    },
    {
      questionText: 'What is the lightest known gas',
      answerOptions: [
        {answerText: 'helium', isCorrect:false},
        {answerText: 'hydrogen', isCorrect:true},
        {answerText: 'Aluminium', isCorrect:false},
        {answerText: 'silicon', isCorrect:false}
      ],
    },
    {
      questionText: 'Which is the most abundant element',
      answerOptions: [
        {answerText: 'Aluminium', isCorrect:true},
        {answerText: 'sulphur', isCorrect:false},
        {answerText: 'argon', isCorrect:false},
        {answerText: 'rubidium', isCorrect:false}
      ],
    },
    {
      questionText: '____________ is a greenish yellow gas with an unpleasant choking smell',
      answerOptions: [
        {answerText: 'Astatine', isCorrect:false},
        {answerText: 'Carbon', isCorrect:false},
        {answerText: 'Chlorine', isCorrect:true},
        {answerText: 'cyprus', isCorrect:false}
      ],
    },
    
    {
        questionText: 'Which of these has the molar mass of 32g?',
        answerOptions: [
          {answerText: 'Oxygen', isCorrect:false},
          {answerText: 'Oxygen gas', isCorrect:true},
          {answerText: 'Ozone', isCorrect:false},
          {answerText: 'oxonium ion', isCorrect:false}
        ],
      },
      
    {
        questionText: 'What type of bond constitute hydrochloric acid',
        answerOptions: [
          {answerText: 'Vanderwaal forces', isCorrect:false},
          {answerText: 'hydrogen bond', isCorrect:false},
          {answerText: 'Ionic bond', isCorrect:true},
          {answerText: 'Covalent bond', isCorrect:false}
        ],
      },
      {
        questionText: 'What type of bond constitute H-CL',
        answerOptions: [
          {answerText: 'Vanderwaal forces', isCorrect:false},
          {answerText: 'hydrogen bond', isCorrect:false},
          {answerText: 'Ionic bond', isCorrect:false},
          {answerText: 'Covalent bond', isCorrect:true}
        ],
      },
      {
        questionText: 'Which one of these is the most volatile',
        answerOptions: [
          {answerText: 'petrol', isCorrect:true},
          {answerText: 'diesel', isCorrect:false},
          {answerText: 'blood', isCorrect:false},
          {answerText: 'water', isCorrect:false}
        ],
      },
      {
        questionText: 'Which one of these is the least volatile',
        answerOptions: [
          {answerText: 'petrol', isCorrect:false},
          {answerText: 'diesel', isCorrect:false},
          {answerText: 'blood', isCorrect:false},
          {answerText: 'water', isCorrect:true}
        ],
      },
  ]
  
function Quiz (){
    let [currentQuestion, setCurrentQuestion] = useState(0)
  const handleNextQuestion = (isCorrect) =>{
    if(isCorrect===true){
      setGetScore(getScore + 1)
    }
    const nextQuestion = currentQuestion +1;
  if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion)
  } else {
    setShowScore(true)
  }
  }
  const [showScore, setShowScore] = useState(false)
  const [getScore, setGetScore] = useState(0)
  
  return (
    <div className="main-app">
      {showScore ? (<div className='showscore'>
            <span>
              You got {getScore}/{questions.length}
            </span>
      </div>)
      :
      
      (
      <>
     
      <div className='app'>      
      <h2 className='questions'>{questions[currentQuestion].questionText}</h2>
      <div className='answer-list'>
        {questions[currentQuestion].answerOptions.map((answer, index)=>(
          <li key={index} className='answer-item'><input type='button' value={answer.answerText} onClick={() => 
            handleNextQuestion(answer.isCorrect)}/></li>
          ))}
      </div>
      </div>
      </>
      )}
    </div>
  );
}
export default Quiz;