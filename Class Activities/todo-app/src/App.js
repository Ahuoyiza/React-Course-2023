import {useState} from 'react';
import {addTodo,toggleTodo, deleteTodo} from './todoSlice';
import {connect, useDispatch, useSelector} from 'react-redux';
import {addCompletedTodo} from './todoHistorySlice';
import {toggleTheme} from './themeSlice';
import './App.css';

const App = () =>{
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const theme = useDispatch((state) => state.theme);

  const handleAddTodo = () =>{
    if(inputText.trim() !== ''){
      dispatch(addTodo(inputText));
      setInputText('');
    }
  };

  const handleToggleTodo = (id) =>{
    dispatch(toggleTodo(id));
    const completedTodo = todos.find((todo) => todo.id === id);
    if(completedTodo){
      dispatch(addCompletedTodo(completedTodo));
    }
  }

  const handleDeleteTodo = (id) =>{
    dispatch(deleteTodo(id));
  }

  return (
    <div className={`flex-center ${theme}`}>
      <h1>Simple ToDo App</h1>
      <input 
      type='text'
      value= {inputText}
      onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <div>
        <ul>
          {todos.map((todo) =>(
            <li
            key={todo.id}
            onClick = {()=> handleToggleTodo(todo.id)}
            style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
            >
              {todo.text}
              <button className='delete-button'
              onClick={()=>handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button 
        onClick={() => dispatch(toggleTheme())}
        >
          Change Theme
        </button>
      </div>
    </div>
  )
}


export default App;
