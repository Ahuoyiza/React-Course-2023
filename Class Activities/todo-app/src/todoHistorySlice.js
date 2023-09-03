import {createSlice} from '@reduxjs/toolkit';

const todoHistorySlice = createSlice({
    name: 'todoHistory',
    initialState: [],
    reducers: {
        addCompletedTodo: (state, action) =>{
            state.push(action.payload);
        }
    }
});

export const {addCompletedTodo} = todoHistorySlice.actions;
export default todoHistorySlice.reducer;