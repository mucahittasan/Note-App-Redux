import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "notes",
    initialState: {
        notes: [],
        searc: ''
    },
    reducers: {},
});

export default noteSlice.reducer;