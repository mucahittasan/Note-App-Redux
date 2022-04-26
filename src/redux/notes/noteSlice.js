import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "notes",
    initialState: {
        items: localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [],
        search: ''
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem('notes', JSON.stringify(state.items));
        },
        removeNote: (state, action) => {
            const { id } = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            localStorage.setItem('notes', JSON.stringify(state.items));
        }
    },
});

export default noteSlice.reducer;
export const { addNote, removeNote } = noteSlice.actions;