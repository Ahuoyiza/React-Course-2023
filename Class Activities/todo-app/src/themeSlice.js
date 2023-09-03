import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        toggleTheme: (state) => {
            state = state === 'light' ? 'dark' : 'light';
            return state
        }
    }
});
export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;