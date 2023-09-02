import { type } from "os";

const ADD_TODO = 'ADD-TODO';
const TOOGLE_TODO = 'TOOGLE_TODO';

export const addtodo =(text)=>({
    type: ADD_TODO, text
})
export const toogletodo =(id)=>({
    type: TOOGLE_TODO, id
})
const todoReducer = (state =initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
        return[
            ...state,
            {
                id: state.lenght+1,
                text: action.text,
                completed: false,
            },
        ];
        case TOOGLE_TODO:
            return state.map(todo=> todo.id ===action.id ?{
                ...todo, completed: !todo.completed
            } : todo);
            default: return state;
    }
}

export default todoReducer;