import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import todoReducer from './todoSlice';
import todoHistoryReducer from './todoHistorySlice';
import themeReducer from './themeSlice';

const store = configureStore({
    reducer:{
        todos: todoReducer,
        todoHistory: todoHistoryReducer,
        theme: themeReducer,
    },
    middleware: [thunk],
})
export default store;

