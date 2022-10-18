import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState:{
        name: "Brian",
        email: "banana@gmail.com",
    },
    reducers:{
        update: (state, action) =>{
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
    },
});

// exporting actions
export const { update } = userSlice.actions;
// exporting reducer to store.js
export default userSlice.reducer;