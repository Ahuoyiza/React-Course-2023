const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const toggleTodo = (id) => ({
  type : TOGGLE_TODO,
  id,
});
const initialState = [];
const todosReducer = (state = initialState, action) => {
  //handle actions
  switch (action.type){
    case ADD_TODO:
        return [
            ...state,
            {
                id: state.length+1,
                text: action.text,
                completed: false,
            },
        ];
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.id ? {
                ...todo, completed: !todo.completed
            }: todo
        );
        default:
            return state;
  }
};

export default todosReducer;