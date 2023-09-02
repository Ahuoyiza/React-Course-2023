import {useState} from 'react';
import {addTodo,toggleTodo} from './todo.reducer';
import {connect} from 'react-redux';
import './App.css';

const App = ({todos, addTodo, toggleTodo}) =>{
  const [inputText, setInputText] = useState('');

  const handleAddTodo = () =>{
    if(inputText.trim() !== ''){
      addTodo(inputText);
      setInputText('');
    }
  };
  return (
    <div className='flex-center'>
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
            onClick = {()=> toggleTodo(todo.id)}
            style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps  = {
  addTodo,
  toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);